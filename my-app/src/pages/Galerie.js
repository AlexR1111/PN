import React from 'react';
import './PageStyles.css';

const Galerie= () => (
    <div className="page">
        <h1>Galerie</h1>
        <p>Road work ahead? I sure hope it does</p>
        <div className="gallery-grid">
            <div className="gallery-item">Bild1</div>
            <div className="gallery-item">Bild2</div>
            <div className="gallery-item">Bild3</div>
        </div>
    </div>
);

export default Galerie;