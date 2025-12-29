import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  structuredData?: any;
  preloadImages?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Texas Construction Estimating Services',
  description = 'Professional construction estimating and takeoff services for Texas contractors',
  keywords = 'construction estimating, quantity takeoff, cost estimation, Texas contractors',
  canonical,
  structuredData,
  preloadImages
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Preload Images */}
      {preloadImages?.map((img, index) => (
        <link key={index} rel="preload" as="image" href={img} />
      ))}
    </Helmet>
  );
};