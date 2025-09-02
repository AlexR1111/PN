import React from 'react';
import './PageStyles.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="page not-found">
            <h1>404</h1>
            <p>Seite nicht gefunden, versuche es später erneut.</p>
            <Link to="/" className="back-home">Zur Startseite</Link>
        </div>
    );
};

export default NotFound;