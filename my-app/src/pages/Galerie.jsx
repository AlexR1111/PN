import React, { useState } from 'react';
import './PageStyles.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';


const Galerie = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const [theme, setTheme] = useState('mittelalter');
 

  const medievalSlides = [
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/visitencarte_back_ggzo4f' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/visitencarte_front_w2uxyg' },
  ];

  const upcyclingSlides = [
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/visitencarte_back_ggzo4f' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/visitencarte_front_w2uxyg' },
  ];

   const slides = theme ==='mittelalter' ? medievalSlides : upcyclingSlides;

  const handleClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const pageTransition = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -40 },
    transition: { duration: 0.6, ease: 'easeInOut' },
  };

  return (
    <motion.div
      className="page galerie-page"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      <h1>Galerie</h1>
      <div className="theme-toggle">
  <button
    className={theme === 'mittelalter' ? 'active' : ''}
    onClick={() => setTheme('mittelalter')}
  >
    ⚔️ Mittelalter
  </button>

  <button
    className={theme === 'upcycling' ? 'active' : ''}
    onClick={() => setTheme('upcycling')}
  >
    ♻️ Upcycling
  </button>
</div>

      <p>Road work ahead? I sure hope it does</p>

      <div className="gallery-grid">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => handleClick(i)}
            style={{ backgroundImage: `url(${slide.src})` }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={index}
      />
    </motion.div>
  );
};

export default Galerie;
