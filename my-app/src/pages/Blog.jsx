import React, { useEffect, useState } from 'react';
import './PageStyles.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { loadBlogPosts } from '../components/loadBlogPosts';

function stripHtml(html) {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
}

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadBlogPosts().then(setPosts);
  }, []);

  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h1>Blog</h1>
      <p>
        Willkommen in meinem Blog! Hier teile ich Gedanken, Projekte und Inspirationen rund ums Nähen.
      </p>

      <div className="blog-preview">
        {posts.length === 0 ? (
          <p>⏳ Lade Beiträge...</p>
        ) : (
          posts.map(post => (
            <div key={post.id} className="blog-card">
              <h2>{post.title}</h2>
              <p className="date-blog">
                {post.date instanceof Date && !isNaN(post.date)
                  ? post.date.toLocaleDateString('de-DE')
                  : 'Kein Datum'}
            </p>

              <p>{stripHtml(post.content).slice(0, 120) || "Kein Inhalt verfügbar."}...</p>
              <Link to={`/blog/${post.id}`}>Beitrag lesen</Link>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

export default Blog;
