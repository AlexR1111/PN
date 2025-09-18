import { blogPosts } from "./blogData";
import { useNavigate } from "react-router-dom";

export default function BlogPreview() {
    const navigate = useNavigate();

    const latestPosts = blogPosts.slice(0,3);

    return (
        <section className="blog-preview">
            <h2>Neu im Blog</h2>
            <div className="blog-cards">
                {latestPosts.map((post) => (
                    <div className="blog-card" key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.content.slice(0,150)}</p>
                        <button onClick={() => navigate(`#/blog/${post.id}`)}>
                            Weiterlesen
                        </button>
                        </div>
                ))}
            </div>
        </section>
    );
}