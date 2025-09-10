import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="nav-bar">
           
            <ul>
                <li><NavLink to="/"end>⚜️Home</NavLink></li>
                <li><NavLink to="/galerie">⚜️Galerie</NavLink></li>
                <li><NavLink to="/kontakt">⚜️Kontakt</NavLink></li>
                <li><NavLink to="/ueber-mich">⚜️Über Mich</NavLink></li>
                <li><NavLink to="/blog">⚜️Blog</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;