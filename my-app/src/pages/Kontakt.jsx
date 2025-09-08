import React, { useState } from 'react';
import './PageStyles.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    email:''
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://pn-d89f.onrender.com/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success('✅ Nachricht erfolgreich gesendet!');
        setFormData({ name: '', message: '', email: '' });

        setTimeout(() => {
          navigate('/danke');
        }, 1500);
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
    <motion.div
      className="page kontakt-page"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
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
        <input
          type="email"
          name="email"
          placeholder='Email'
          value={formData.email}
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
      <ToastContainer position="bottom-right" autoClose={3000} />
    </motion.div>
  );
};

export default Kontakt;
