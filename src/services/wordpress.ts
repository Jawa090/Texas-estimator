import axios, { AxiosError } from 'axios';

/**
 * Configuration for the WordPress API connection.
 * @constant
 */
export const WP_CONFIG = {
    // Fallback to the hardcoded URL if env var is missing to maintain backward compatibility
    API_BASE: import.meta.env.VITE_WP_API_URL || 'https://cms.constructionestimatingtexas.com/wp-json/wp/v2',
    TIMEOUT: 10000, // 10s timeout
};

/**
 * Standardized SEO Data structure for the frontend.
 */
export interface SEOData {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImage?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
    schema?: Record<string, any>;
}

/**
 * Interface representing the raw Yoast SEO data structure from WordPress API.
 * This ensures type safety when accessing nested properties.
 */
export interface YoastHeadJson {
    title: string;
    description: string;
    canonical: string;
    og_title: string;
    og_description: string;
    og_url: string;
    og_site_name: string;
    og_image?: Array<{
        url: string;
        width: number;
        height: number;
        type: string;
    }>;
    twitter_card: string;
    twitter_title?: string;
    twitter_description?: string;
    twitter_imageHeader?: string;
    schema?: Record<string, any>;
    [key: string]: any; // Allow for other metadata fields
}

/**
 * Interface representing a standard WordPress Post or Page object.
 */
export interface WPPost {
    id: number;
    date: string;
    date_gmt: string;
    slug: string;
    link: string;
    type: 'post' | 'page';
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
        protected: boolean;
    };
    excerpt: {
        rendered: string;
        protected: boolean;
    };
    yoast_head_json?: YoastHeadJson;
    featured_media?: number;
}

export interface ContentResponse {
    post: WPPost;
    seo: SEOData;
    type: 'post' | 'page';
}

/**
 * Helper function to strip HTML tags from a string.
 * Useful for creating fallback descriptions from excerpts.
 * 
 * @param {string} html - HTML string to sanitize.
 * @returns {string} Plain text string.
 */
const stripHtml = (html: string): string => {
    return html.replace(/<[^>]+>/g, '').trim();
};

/**
 * Helper to normalize canonical URLs.
 * Logic:
 * 1. Remove "cms" subdomain.
 * 2. Strip trailing slashes.
 * 3. Handle Home Page: strip /home to root.
 * 4. Dev Mode: use localhost origin.
 * 
 * @param {string} url - The raw URL.
 * @returns {string} The cleaned canonical URL.
 */
export const cleanCanonicalUrl = (url: string = ''): string => {
    if (!url) return '';

    // 1. Remove "cms" subdomain (if present)
    let clean = url.replace('//cms.', '//');

    // 2. Strip trailing slash
    if (clean.endsWith('/')) {
        clean = clean.slice(0, -1);
    }

    // 3. Handle Home Page: if URL ends in /home or the long home slug, strip it to match root
    if (clean.endsWith('/home')) {
        clean = clean.slice(0, -5);
    }
    if (clean.endsWith('/construction-estimating-services-texas')) {
        clean = clean.replace('/construction-estimating-services-texas', '');
    }

    // 4. Dev Mode: Use window.location.origin
    if (import.meta.env.DEV && typeof window !== 'undefined') {
        try {
            const urlObj = new URL(clean);
            // Construct local URL, avoiding double slash if pathname is just /
            const path = urlObj.pathname === '/' ? '' : urlObj.pathname;
            return `${window.location.origin}${path}`;
        } catch (e) {
            console.warn('Invalid URL in cleanCanonicalUrl:', clean);
        }
    }

    return clean;
};

/**
 * Normalizes raw WordPress post data into a clean SEOData object.
 * Prioritizes Yoast SEO data, falling back to core WordPress fields if necessary.
 * 
 * @param {WPPost} post - The raw WordPress post object.
 * @returns {SEOData} Normalized SEO data for consumption by the UI.
 */
export const normalizeSEO = (post: WPPost): SEOData => {
    const yoast = post.yoast_head_json;
    const coreTitle = post.title.rendered;
    const coreDescription = stripHtml(post.excerpt.rendered);

    return {
        title: yoast?.title || coreTitle,
        description: yoast?.description || coreDescription,
        canonical: cleanCanonicalUrl(yoast?.canonical || post.link),

        // Open Graph
        ogTitle: yoast?.og_title || yoast?.title || coreTitle,
        ogDescription: yoast?.og_description || yoast?.description || coreDescription,
        ogImage: yoast?.og_image?.[0]?.url,

        // Twitter
        twitterTitle: yoast?.twitter_title || yoast?.og_title || coreTitle,
        twitterDescription: yoast?.twitter_description || yoast?.og_description || coreDescription,
        twitterImage: yoast?.twitter_imageHeader || yoast?.og_image?.[0]?.url,

        // Schema.org
        schema: yoast?.schema,
    };
};

/**
 * Generic fetcher for WordPress API endpoints.
 * Handles timeouts and standardizes error logging.
 * 
 * @template T
 * @param {string} endpoint - The API endpoint (e.g., '/posts').
 * @param {Record<string, any>} params - Query parameters.
 * @returns {Promise<T[] | null>} The data array or null on error.
 */
const fetchFromAPI = async <T>(endpoint: string, params: Record<string, any> = {}): Promise<T[] | null> => {
    try {
        const response = await axios.get<T[]>(`${WP_CONFIG.API_BASE}${endpoint}`, {
            params,
            timeout: WP_CONFIG.TIMEOUT,
        });
        return response.data;
    } catch (error) {
        if (error instanceof AxiosError) {
            console.error(`[WP API Error] ${endpoint}: ${error.message}`, {
                status: error.response?.status,
                params
            });
        } else {
            console.error(`[WP API Error] ${endpoint}: Unexpected error`, error);
        }
        return null;
    }
};

/**
 * Fetches a single WordPress entity (post or page) by its slug.
 * 
 * @param {string} endpoint - '/posts' or '/pages'.
 * @param {string} slug - The slug identifier.
 * @returns {Promise<WPPost | null>} The found post or null.
 */
const fetchEntityBySlug = async (endpoint: string, slug: string): Promise<WPPost | null> => {
    const data = await fetchFromAPI<WPPost>(endpoint, { slug });
    return data && data.length > 0 ? data[0] : null;
};

/**
 * Fetches content (page or post) by slug.
 * Prioritizes Pages, matches standard WordPress structure where Pages are distinct from Posts.
 * 
 * @param {string} slug - The slug to search for.
 * @returns {Promise<ContentResponse | null>} The content including standardized SEO data.
 */
export const getContentBySlug = async (slug: string): Promise<ContentResponse | null> => {
    // Map internal React routes/names to actual WP slugs
    let wpSlug = slug;

    // Normalization logic for special pages
    if (slug === '/' || slug === '' || slug === 'home') {
        wpSlug = 'construction-estimating-services-texas';
    } else if (slug === 'about') {
        wpSlug = 'about-us';
    } else if (slug === 'contact') {
        wpSlug = 'contact-us';
    }

    // 1. Try to fetch as a Page first (most common for static routes)
    const page = await fetchEntityBySlug('/pages', wpSlug);
    if (page) {
        return {
            post: page,
            seo: normalizeSEO(page),
            type: 'page'
        };
    }

    // 2. Fallback to fetch as a Post (for blog posts)
    const post = await fetchEntityBySlug('/posts', wpSlug);
    if (post) {
        return {
            post: post,
            seo: normalizeSEO(post),
            type: 'post'
        };
    }

    return null;
};

/**
 * Legacy export for backward compatibility if needed, 
 * but `getContentBySlug` is preferred.
 */
export const getPageBySlug = async (slug: string) => {
    const page = await fetchEntityBySlug('/pages', slug);
    if (page) {
        return { post: page, seo: normalizeSEO(page) };
    }
    return null;
};

/**
 * Legacy export for backward compatibility.
 */
export const getPostBySlug = async (slug: string) => {
    const post = await fetchEntityBySlug('/posts', slug);
    if (post) {
        return { post: post, seo: normalizeSEO(post) };
    }
    return null;
};

