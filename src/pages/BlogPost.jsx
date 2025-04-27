import { useParams } from "react-router-dom";

function BlogPost() {
    const { id } = useParams();
    const post = {
        title: `Post ${id}`,
        content: `This is the content of Post ${id}. Lorem ipsum dolor sit amet...`
    };

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="mt-4 text-gray-700">{post.content}</p>
        </div>
    );
}

export default BlogPost;
