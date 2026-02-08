import { prisma } from './prisma';
import { Post } from '@/types';

/**
 * Get all posts from database, sorted by creation date (newest first)
 */
export async function getPosts(): Promise<Post[]> {
    try {
        const posts = await prisma.post.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const post = await prisma.post.findUnique({
            where: { slug }
        });
        return post;
    } catch (error) {
        console.error('Error fetching post by slug:', error);
        return null;
    }
}

/**
 * Save a new post or update an existing one
 */
export async function savePost(post: Post): Promise<Post> {
    try {
        const savedPost = await prisma.post.upsert({
            where: { id: post.id },
            update: {
                title: post.title,
                slug: post.slug,
                content: post.content,
                excerpt: post.excerpt,
            },
            create: {
                id: post.id,
                title: post.title,
                slug: post.slug,
                content: post.content,
                excerpt: post.excerpt,
            }
        });
        return savedPost;
    } catch (error) {
        console.error('Error saving post:', error);
        throw new Error('Failed to save post');
    }
}

/**
 * Delete a post by ID
 */
export async function deletePost(id: string): Promise<void> {
    try {
        await prisma.post.delete({
            where: { id }
        });
    } catch (error) {
        console.error('Error deleting post:', error);
        throw new Error('Failed to delete post');
    }
}