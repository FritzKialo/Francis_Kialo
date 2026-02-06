import fs from 'fs';
import path from 'path';
import { Post } from '@/types';

const postsDirectory = path.join(process.cwd(), 'src/data');
const postsFile = path.join(postsDirectory, 'posts.json');

function ensureDirectory() {
    if (!fs.existsSync(postsDirectory)) {
        fs.mkdirSync(postsDirectory, { recursive: true });
    }
}

export function getPosts(): Post[] {
    ensureDirectory();
    if (!fs.existsSync(postsFile)) {
        return [];
    }
    const fileContents = fs.readFileSync(postsFile, 'utf8');
    try {
        return JSON.parse(fileContents);
    } catch {
        return [];
    }
}

export function getPostBySlug(slug: string): Post | undefined {
    const posts = getPosts();
    return posts.find(p => p.slug === slug);
}

export function savePost(post: Post) {
    const posts = getPosts();
    const existingIndex = posts.findIndex(p => p.id === post.id);
    if (existingIndex > -1) {
        posts[existingIndex] = post;
    } else {
        posts.unshift(post);
    }
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}

export function deletePost(id: string) {
    let posts = getPosts();
    posts = posts.filter(p => p.id !== id);
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
}
