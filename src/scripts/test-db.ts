import { prisma } from '../lib/prisma';

async function testDatabase() {
    try {
        console.log('🔍 Testing database connection...');

        // Test connection
        await prisma.$connect();
        console.log('✅ Connected to database successfully!');

        // Try to count posts
        const postCount = await prisma.post.count();
        console.log(`📊 Current number of posts: ${postCount}`);

        // Try to create a test post
        const testPost = await prisma.post.create({
            data: {
                title: 'Test Post',
                slug: 'test-post-' + Date.now(),
                content: 'This is a test post to verify the database connection.',
                excerpt: 'Test post excerpt'
            }
        });
        console.log('✅ Created test post:', testPost.title);

        // Fetch all posts
        const allPosts = await prisma.post.findMany();
        console.log(`📝 Total posts: ${allPosts.length}`);
        allPosts.forEach(post => {
            console.log(`  - ${post.title} (${post.slug})`);
        });

        // Delete the test post
        await prisma.post.delete({
            where: { id: testPost.id }
        });
        console.log('🗑️  Deleted test post');

        console.log('\\n✨ Database test completed successfully!');

    } catch (error) {
        console.error('❌ Database test failed:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

testDatabase();
