import React, {useEffect, useState} from "react";
import './SidebarPreview.css';
import Lightbox from "yet-another-react-lightbox";
import {blogPosts} from './blogData';
import { medievalSlides, upcyclingSlides } from "./galleryData";

const SidebarPreview = () => {
    const allImages = [...medievalSlides, ...upcyclingSlides].slice(0,3);
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

    return (
        <aside className="sidebar-preview">
            <section className="blog-section">
                <h2>Neuste Blogposts</h2>
                <ul>
                    {blogPosts.map(post => (
                        <li key={post.id}>
                            <a href={post.url} className="blog-link">
                            <h3>{post.title}</h3>
                            <p>{post.content.slice(0,100)}...</p>
                            <span>{post.date || 'Kein Datum'}</span>
                            </a>
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
                            alt={img.title || 'Bild ${index +1}'}
                            onClick={() => openLightbox(index)}
                            style={{ cursor: 'pointer'}}
                        />
                    ))}
                </div>
            </section>

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