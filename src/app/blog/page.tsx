import { getPosts } from '@/lib/posts';
import Link from 'next/link';

export const dynamic = 'force-dynamic'; // Ensure we get fresh data

export default function BlogListing() {
    const posts = getPosts();

    return (
        <div className="min-h-screen bg-slate-950 pt-32 px-6 pb-24">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 font-display text-center md:text-left">
                    Latest Articles
                </h1>

                <div className="grid gap-8">
                    {posts.length === 0 ? (
                        <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800">
                            <p className="text-slate-400 text-lg mb-4">No posts yet.</p>
                            <Link href="/admin" className="text-cyan-500 hover:text-cyan-400 underline">
                                Go to Admin Dashboard to create one.
                            </Link>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <article key={post.id} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-all hover:bg-slate-900 group shadow-lg shadow-black/20">
                                <Link href={`/blog/${post.slug}`} className="block">
                                    <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-display">
                                        {post.title}
                                    </h2>
                                    <div className="text-sm text-slate-500 mb-4 font-mono">
                                        {new Date(post.createdAt).toLocaleDateString(undefined, {
                                            year: 'numeric', month: 'long', day: 'numeric'
                                        })}
                                    </div>
                                    <p className="text-slate-400 line-clamp-3 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <span className="inline-block mt-6 text-cyan-500 font-medium group-hover:translate-x-1 transition-transform">
                                        Read more &rarr;
                                    </span>
                                </Link>
                            </article>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
