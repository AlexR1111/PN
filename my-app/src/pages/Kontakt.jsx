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
    email:'',
    message: ''
    
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
      const response = await fetch('https://pn-j3rm.onrender.com/api/sendMail', {
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
      <div className='contactPage'>
      <h1>📯Kontakt</h1>
      <p>Du hast Fragen,Ideen oder möchtest ein individuelles Nähprojekt in Auftrag geben?<br/>
      Ich freue mich über deine Nachricht - ob es um Stoffe, Schnitte oder Sonderwünsche geht.<br/> 
      Nutze gerne das Formular, um mir zu schreiben oder einen Auftrag anzufragen. </p>
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
        <p className='wait'>Dies kann einen Moment dauern.</p>
      </form>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <br/>
      <p>Hinweis: Wenn du einen Auftrag erteilen möchtest, beschreibe bitte möglichst genau,<br/>
       was du dir vorstellst - z.B. Art des Kleidungsstücks, Maße, Stoffwünsche oder Anlass.<br/> 
       Ich melde mich schnellstmöglich mit einem Angebot zurück!</p>
       </div>
      
    </motion.div>
  );
};



export default Kontakt;
