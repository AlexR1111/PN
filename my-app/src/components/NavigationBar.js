import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="nav-bar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/galerie">Galerie</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
                <li><Link to="/ueber-mich">Über Mich</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;