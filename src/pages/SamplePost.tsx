import React from 'react';
import { usePageSEO } from '../hooks/usePageSEO';
import { SEOHead } from '../components/SEOHead';

export const SamplePost: React.FC = () => {
    // 1. Use the custom hook to fetch data for "sample-post"
    const { content: post, seoData, loading, error } = usePageSEO('sample-post');

    if (loading) return <div className="p-10">Loading post...</div>;
    if (error) return <div className="p-10 text-red-500">Error: {error.message}</div>;
    if (!post) return <div className="p-10">Post not found</div>;

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            {/* 2. Inject SEO Head */}
            <SEOHead data={seoData} />

            <article className="prose lg:prose-xl">
                {/* 3. Render Post Content */}
                <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />

                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </article>

            {/* Debug Data View */}
            <div className="mt-12 p-4 bg-gray-100 rounded text-sm font-mono">
                <h3 className="font-bold border-b border-gray-300 mb-2">Debug: SEO Data</h3>
                <pre>{JSON.stringify(seoData, null, 2)}</pre>
            </div>
        </div>
    );
};
