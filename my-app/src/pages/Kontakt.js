import React from 'react';
import './PageStyles.css';

const Kontakt = () => (
    <div className="page">
        <h1>Kontakt</h1>
        <p>Hier meine Kontakte</p>
        <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Nachricht" required />
            <button type="submit">Senden</button>
        </form>
    </div>
);

export default Kontakt;