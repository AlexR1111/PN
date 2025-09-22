import React, { useState, useEffect } from "react";
import './SidebarPreview.css';
import Lightbox from "yet-another-react-lightbox";
import { loadBlogPosts } from "./loadBlogPosts";
import { medievalSlides, upcyclingSlides } from "./galleryData";
import { Link } from "react-router-dom";

const SidebarPreview = () => {
  const isMobile = window.innerWidth >= 768;
  const [collapsed, setCollapsed] = useState(isMobile);
  const [posts, setPosts] = useState([]);

  const allImages = [...medievalSlides, ...upcyclingSlides].reverse().slice(0, 3);
  const slides = allImages.map(img => ({
    src: img.src,
    title: img.title,
    description: img.description
  }));

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  useEffect(() => {
    loadBlogPosts().then(loadedPosts => {
      const sortedPosts = loadedPosts.sort((a, b) => b.date - a.date);
      console.log("Post-Daten:", sortedPosts.map(p => ({title: p.title, date: p.date})));
      setPosts(sortedPosts);
    });
  }, []);

  // HTML entfernen für Vorschau
  function stripHtml(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }

  return (
    <aside className={`sidebar-preview${collapsed ? " collapsed" : ""}`}>
      <button
        className="sidebar-toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? "⏴" : "⏵"}
      </button>

      {!collapsed && (
        <>
          <section className="blog-section">
            <h2>Neuste Blogposts</h2>
            <ul>
              {posts.slice(0, 3).map(post => (
                <li key={post.id}>
                  <Link to={`/blog/${post.id}`} className="blog-link">
                    <h3>{post.title}</h3>
                      <p>{stripHtml(post.content).slice(0, 100)}...</p>
                        <span>
                          {post.date instanceof Date && !isNaN(post.date)
                            ? post.date.toLocaleDateString('de-DE')
                            : 'Kein Datum'}
                          </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="gallery-section">
            <h2>Neueste Galerie-Bilder</h2>
            <div className="gallery-thumbnails">
              {allImages.map((img, index) => (
                <img
                  key={index}
                  src={img.src}
                  alt={img.title || `Bild ${index + 1}`}
                  onClick={() => openLightbox(index)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </div>
          </section>
        </>
      )}

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={slides}
        index={photoIndex}
      />
    </aside>
  );
};

export default SidebarPreview;
