import React from "react";
import { useNavigate } from "react-router-dom";
import { medievalSlides, upcyclingSlides } from "./galleryData";

export default function GallerySidebarPreview() {
  const navigate = useNavigate();
  const previewImages = [...medievalSlides.slice(0, 3), ...upcyclingSlides.slice(0, 3)];

  return (
    <section
      className="blog-preview"
      onClick={() => navigate('/galerie')}
      style={{ cursor: 'pointer' }}
    >
      <h3>Neu in der Galerie</h3>
      <div className="gallery-thumbs">
        {previewImages.map((img, index) => (
          <div key={index} className="thumb">
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
      <p className="gallery-link">Zur Galerie</p>
    </section>
  );
}
