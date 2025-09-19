import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadBlogPosts } from "./loadBlogPosts";
import DOMPurify from 'dompurify'


export default function BlogPost() {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
  loadBlogPosts().then(posts => {
    const found = posts.find(p => String(p.id) === id);
    setPost(found || null);
    setLoading(false);
  });
    }, [id]);

    if (loading) {
        return <div style={{minHeight:"100vh", background: "Black"}} />
    }
    if (!post) {
        return <p>❌ Beitrag nicht gefunden.</p>;
    }

    return (
        <div className="page">
            <div className="blog-frame">
                <h1>{post.title}</h1>
                <p className="date">{post.date}</p>
                {post.imageUrl && (
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="blog-image"
                        />
                )}
            <div 
                className="blog-content"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(post.content)
                }}/
                >
                
                <Link to="/blog">Zurück zur Übersicht</Link>
            </div>
        </div>
    );
}