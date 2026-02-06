'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        slug: '',
        content: '',
        excerpt: '',
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const res = await fetch('/api/admin/posts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setMessage('Post created successfully!');
                setFormData({ title: '', slug: '', content: '', excerpt: '' });
            } else {
                setMessage('Error creating post.');
            }
        } catch (error) {
            setMessage('Error creating post.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-24 px-6 pb-12">
            <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
                <h1 className="text-3xl font-bold text-white mb-6 font-display">Create New Post</h1>

                {message && (
                    <div className={`p-4 mb-6 rounded-lg ${message.includes('Error') ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-green-500/10 text-green-500 border border-green-500/20'}`}>
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-slate-400 mb-2 font-medium">Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="Enter post title"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-slate-400 mb-2 font-medium">Slug (optional)</label>
                        <input
                            type="text"
                            value={formData.slug}
                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors"
                            placeholder="custom-url-slug"
                        />
                    </div>

                    <div>
                        <label className="block text-slate-400 mb-2 font-medium">Excerpt</label>
                        <textarea
                            value={formData.excerpt}
                            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white h-24 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                            placeholder="Brief summary..."
                        />
                    </div>

                    <div>
                        <label className="block text-slate-400 mb-2 font-medium">Content (Markdown)</label>
                        <textarea
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white h-96 focus:outline-none focus:border-cyan-500 transition-colors font-mono text-sm leading-relaxed"
                            placeholder="# Introduction..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-900/20 hover:shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Publishing...' : 'Publish Post'}
                    </button>
                </form>
            </div>
        </div>
    );
}
