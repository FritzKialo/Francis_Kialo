export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    createdAt: Date | string;
    updatedAt: Date | string;
}
