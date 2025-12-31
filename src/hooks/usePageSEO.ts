import { useState, useEffect } from 'react';
import { getContentBySlug, type SEOData, type WPPost } from '../services/wordpress';

interface UsePageSEOResult {
    seoData: SEOData | null;
    content: WPPost | null;
    loading: boolean;
    error: Error | null;
    type: 'page' | 'post' | null;
}

/**
 * Custom hook to fetch and manage SEO data and content from WordPress.
 * 
 * @param {string} slug - The slug of the page or post to fetch.
 * @returns {UsePageSEOResult} Object containing data, loading state, and errors.
 * 
 * @example
 * const { seoData, loading, error } = usePageSEO('home');
 */
export const usePageSEO = (slug: string): UsePageSEOResult => {
    const [seoData, setSeoData] = useState<SEOData | null>(null);
    const [content, setContent] = useState<WPPost | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [type, setType] = useState<'page' | 'post' | null>(null);

    useEffect(() => {
        // Flag to prevent state updates on unmounted component
        let isMounted = true;

        if (!slug) {
            setLoading(false);
            return;
        }

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const result = await getContentBySlug(slug);

                if (isMounted) {
                    if (result) {
                        setSeoData(result.seo);
                        setContent(result.post);
                        setType(result.type);
                    } else {
                        console.warn(`[usePageSEO] No content found for slug: "${slug}"`);
                        setSeoData(null);
                        setContent(null);
                        setType(null);
                    }
                }
            } catch (err) {
                if (isMounted) {
                    console.error(`[usePageSEO] Error fetching content for slug "${slug}":`, err);
                    setError(err instanceof Error ? err : new Error('Unknown error occurred during fetch'));
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [slug]);

    return { seoData, content, loading, error, type };
};

