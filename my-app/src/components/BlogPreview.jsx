import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { loadBlogPosts } from '../components/loadBlogPosts';

export default function BlogPreview() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  loadBlogPosts().then(loadedPosts => {
    const formatted = loadedPosts.map(post => ({
      ...post,
      date: post.date instanceof Date && !isNaN(post.date)
        ? post.date.toLocaleDateString('de-DE')
        : 'Kein Datum'
    }));
    setPosts(formatted);
  });
}, []);


  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  const latestPosts = posts.slice(0, 3);

  return (
    <section className="blog-preview">
      <h2>Neu im Blog</h2>
      <div className="blog-cards">
        {latestPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{stripHtml(post.content).slice(0, 150)}...</p>
            <button onClick={() => navigate(`#/blog/${post.id}`)}>
              Weiterlesen
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
