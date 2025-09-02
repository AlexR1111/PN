import React, { useState } from 'react';
import './PageStyles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Kontakt = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:5000/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                toast.success('✅ Nachricht erfolgreich gesendet!');
                setFormData({ name: '', email: '', message: '' });

                setTimeout(() => {
                    navigate('/danke');
                }, 1500)
                
            } else {
                toast.error('❗Fehler beim Senden.');
            }
        } catch (error) {
            console.error('Fehler:', error);
            toast.error('🚫Serverfehler.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="page">
            <h1>Kontakt</h1>
            <p>Hier meine Kontakte</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Nachricht"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Senden...' : 'Senden'}    
                </button>
            </form>
            <ToastContainer position="bottom-right" autoclose={3000} />
        </div>
    );
};

export default Kontakt;
