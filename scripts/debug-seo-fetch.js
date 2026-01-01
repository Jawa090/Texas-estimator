
import fs from 'fs';

const API_BASE = 'https://cms.constructionestimatingtexas.com/wp-json/wp/v2';

const run = async () => {
    try {
        const url = `${API_BASE}/pages?per_page=50`;
        const response = await fetch(url);
        const pages = await response.json();
        
        const summary = pages.map(p => ({
            id: p.id,
            slug: p.slug,
            link: p.link,
            title: p.title.rendered
        }));
        
        fs.writeFileSync('debug_pages_list.json', JSON.stringify(summary, null, 2));
        console.log('Written pages list to debug_pages_list.json');
    } catch (e) {
        console.error(e);
    }
};

run();
