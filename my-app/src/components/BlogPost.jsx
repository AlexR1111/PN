import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadBlogPosts } from "./loadBlogPosts";


export default function BlogPost() {
    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        async function fetchPost() {
            const posts = await loadBlogPosts();
            const found = posts.find(p => p.id === id);
            setPost(found);
        }
        fetchPost();
    }, [id]);

    if (!post) return <p>Beitrag nicht gefunden</p>;

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
                    className="content"
                    dangerouslySetInnerHTML={{__html: post.content}
                    }></div>
            </div>
        </div>
    );
}