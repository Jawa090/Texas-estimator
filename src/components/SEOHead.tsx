import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { type SEOData } from '../services/wordpress';

interface SEOHeadProps {
    data: SEOData | null;
    fallbackData?: Partial<SEOData>;
}

const DEFAULT_SEO = {
    title: 'Texas Construction Estimating',
    description: 'Professional construction estimating services in Texas.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
};

/**
 * SEO Head component that manages document head metadata.
 * Prioritizes dynamic WordPress data, then provided fallbacks, then system defaults.
 * 
 * @component
 */
export const SEOHead: React.FC<SEOHeadProps> = ({ data, fallbackData }) => {

    // Memoize the merged SEO data to prevent unnecessary re-calculations
    const seo = useMemo(() => {
        return {
            title: data?.title || fallbackData?.title || DEFAULT_SEO.title,
            description: data?.description || fallbackData?.description || DEFAULT_SEO.description,
            canonical: data?.canonical || fallbackData?.canonical,

            // Open Graph
            ogTitle: data?.ogTitle || fallbackData?.ogTitle || data?.title || fallbackData?.title || DEFAULT_SEO.title,
            ogDescription: data?.ogDescription || fallbackData?.ogDescription || data?.description || fallbackData?.description || DEFAULT_SEO.description,
            ogImage: data?.ogImage || fallbackData?.ogImage,

            // Twitter
            twitterTitle: data?.twitterTitle || data?.title || fallbackData?.title || DEFAULT_SEO.title,
            twitterDescription: data?.twitterDescription || data?.description || fallbackData?.description || DEFAULT_SEO.description,
            twitterImage: data?.twitterImage || data?.ogImage || fallbackData?.ogImage,

            // Schema
            schema: data?.schema || fallbackData?.schema,
        };
    }, [data, fallbackData]);

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            {seo.canonical && <link rel="canonical" href={seo.canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={DEFAULT_SEO.ogType} />
            <meta property="og:title" content={seo.ogTitle} />
            <meta property="og:description" content={seo.ogDescription} />
            {seo.canonical && <meta property="og:url" content={seo.canonical} />}
            {seo.ogImage && <meta property="og:image" content={seo.ogImage} />}

            {/* Twitter Card */}
            <meta name="twitter:card" content={DEFAULT_SEO.twitterCard} />
            <meta name="twitter:title" content={seo.twitterTitle} />
            <meta name="twitter:description" content={seo.twitterDescription} />
            {seo.twitterImage && <meta name="twitter:image" content={seo.twitterImage} />}

            {/* Structured Data (Schema.org) */}
            {seo.schema && (
                <script type="application/ld+json">
                    {JSON.stringify(seo.schema)}
                </script>
            )}
        </Helmet>
    );
};

