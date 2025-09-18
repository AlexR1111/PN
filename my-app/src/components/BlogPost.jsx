import { useParams } from "react-router-dom";
import { blogPosts } from "./blogData";

export default function BlogPost() {
    const {id} = useParams();
    
    //controll
    console.log("ID aus URL:", id);
    console.log("Verfügbare IDs:", blogPosts.map(p => p.id));

    const post = blogPosts.find(p => p.id === id);

    if (!post) return <p>Beitrag nicht gefunden</p>;

    return (
        <div className="page">
            <div className="blog-frame">
                <h1>{post.title}</h1>
                <p className="date">{post.date}</p>
                {Array.isArray(post.src) && post.src.map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`${post.title} Bild ${index +1}`}
                        className="blog-image"
                        />
                ))}

                <div
                    className="content"
                    dangerouslySetInnerHTML={{__html: post.content}
                    }></div>
            </div>
        </div>
    );
}