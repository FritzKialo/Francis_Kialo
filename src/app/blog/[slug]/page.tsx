import { getPostBySlug } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-slate-950 pt-32 px-6 pb-24">
            <div className="container mx-auto max-w-3xl">
                <Link href="/blog" className="text-cyan-500 hover:text-cyan-400 mb-8 inline-flex items-center gap-2 transition-colors font-medium">
                    &larr; Back to articles
                </Link>

                <header className="mb-12 border-b border-slate-800 pb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display break-words leading-tight">
                        {post.title}
                    </h1>
                    <time className="text-slate-400 font-mono">
                        {new Date(post.createdAt).toLocaleDateString(undefined, {
                            year: 'numeric', month: 'long', day: 'numeric'
                        })}
                    </time>
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                    <div className="whitespace-pre-wrap font-sans leading-relaxed">
                        {post.content}
                    </div>
                </div>
            </div>
        </article>
    );
}
