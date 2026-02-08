import { NextResponse } from 'next/server';
import { savePost } from '@/lib/posts';
import { Post } from '@/types';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        // Basic validation
        if (!body.title || !body.content) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newPost: Post = {
            id: body.id || crypto.randomUUID(),
            title: body.title,
            slug: body.slug || body.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
            content: body.content,
            excerpt: body.excerpt || body.content.substring(0, 150) + '...',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        // Save post to database (now async)
        const savedPost = await savePost(newPost);
        
        return NextResponse.json({ success: true, post: savedPost });
    } catch (error) {
        console.error('Error in POST /api/admin/posts:', error);
        return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
    }
}