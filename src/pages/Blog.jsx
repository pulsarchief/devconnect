// src/pages/Blog.jsx
function Blog() {
    const posts = [
        { title: "Post 1", snippet: "Lorem ipsum dolor sit amet..." },
        { title: "Post 2", snippet: "Consectetur adipiscing elit..." }
        // Add more posts here
    ];

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Blog</h1>
            <div className="mt-6 space-y-4">
                {posts.map((post, index) => (
                    <div
                        key={index}
                        className="p-4 border border-gray-300 rounded-md">
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                        <p className="text-gray-600">{post.snippet}</p>
                        <a
                            href={`/blog/${index}`}
                            className="text-blue-600">
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
