import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer-content">
            <p className="footer-text"> ⚜️ 2025 Pia’s Nähstube ⚜️</p>
            <Link to="/impressum">Impressum & Datenschutz</Link>
        </footer>
    );
};

export default Footer;

