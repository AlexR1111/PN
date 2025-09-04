import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";

export default function BlogPost() {
    const {id} = useParams();
    const post = blogPosts.find(p => p.id === id);

    if (!post) return <p>Beitrag nicht gefunden</p>;

    return (
        <div className="page">
            <div className="blog-frame">
                <h1>{post.title}</h1>
                <p class="date">{post.date}</p>
                <p class="content">{post.content}</p>
            </div>
        </div>
    );
}