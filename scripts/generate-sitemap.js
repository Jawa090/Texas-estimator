
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Node 18+ has built-in fetch
const WP_API_PAGES = 'https://cms.constructionestimatingtexas.com/wp-json/wp/v2/pages';
const SITE_URL = 'https://constructionestimatingtexas.com';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Read App.tsx to find routes dynamically
const APP_TSX_PATH = path.resolve(__dirname, '../src/App.tsx');
let REACT_ROUTES = [];

try {
    const appContent = fs.readFileSync(APP_TSX_PATH, 'utf-8');
    // Regex to find <Route path="..." ... />
    // Matches path="/about" or path="/" etc.
    const routeRegex = /<Route\s+path="([^"]+)"/g;
    let match;
    
    while ((match = routeRegex.exec(appContent)) !== null) {
        const routePath = match[1];
        // Exclude dynamic routes with parameters if any (e.g. /post/:id) for now unless handled
        if (!routePath.includes(':')) {
             // Derive slug from path (e.g. "/about" -> "about", "/" -> "home")
            let slug = routePath === '/' ? 'home' : routePath.replace(/^\//, '');
            REACT_ROUTES.push({ path: routePath, slug });
        }
    }
    console.log('Found dynamic routes:', REACT_ROUTES);
} catch (e) {
    console.warn('Failed to read App.tsx, falling back to defaults:', e);
    REACT_ROUTES = [
        { path: '/', slug: 'home' },
        { path: '/about', slug: 'about' },
        { path: '/pricing', slug: 'pricing' },
        { path: '/contact', slug: 'contact' }
    ];
}



async function fetchWPPages() {
    try {
        console.log('Fetching WordPress pages...');
        const response = await fetch(WP_API_PAGES + '?per_page=100');
        if (!response.ok) throw new Error(`Failed to fetch pages: ${response.statusText}`);
        const pages = await response.json();
        return pages;
    } catch (error) {
        console.error('Error fetching WP pages:', error);
        return [];
    }
}

async function generateSitemap() {
    const wpPages = await fetchWPPages();
    
    // Create a map of slug -> modified_gmt for quick lookup
    const lastModMap = new Map();
    wpPages.forEach(page => {
        lastModMap.set(page.slug, page.modified_gmt);
    });

    // Generate URL entries
    const urls = REACT_ROUTES.map(route => {
        // Try to find a matching WP page by slug to get the last modified date
        // Fallback to current ISO string if not found
        const lastMod = lastModMap.get(route.slug) 
            ? lastModMap.get(route.slug) + 'Z' // Append Z to indicate UTC matching WP format
            : new Date().toISOString();

        return `
  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    });

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('')}
</urlset>`;

    // Ensure public dir exists
    if (!fs.existsSync(PUBLIC_DIR)) {
        fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    }

    fs.writeFileSync(SITEMAP_PATH, sitemapContent);
    console.log(`✅ Sitemap mapped to React routes generated at ${SITEMAP_PATH}`);
}

generateSitemap();
