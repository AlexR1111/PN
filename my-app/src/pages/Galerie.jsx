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
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Wappenrock_kurz_repugn',
      title: 'Ein Kurzer Wappenrock',
      description: 'Ein kurz geschnittener Wappenrock aus Leinen.'
     },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Zeltreparatur_rstocn' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Prunkgewandungen_mit_Nerz_ahoqjk' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Lieblingsgugel_vbucdk' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Tom_Hansen_Häs_bvrc77' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Klappenrock_für_Baby_ono6wo' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Pillbox_passend_zum_Kleid_js3qj2' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/2_Schamkapsel-Hosen_ppiunq' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Gewandung_für_Puppen_1_qdmgws' },
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/Gewandung_für_Puppe_2_c9a8qx' },
  ];

  const upcyclingSlides = [
    { src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/maxi-cosy_-_Sack_rhfftp' },
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
      <h1>🖼️Galerie</h1>
      <div className="theme-toggle">
  <button
    className={theme === 'mittelalter' ? 'active' : ''}
    onClick={() => setTheme('mittelalter')}
  >
    Mittelalter
  </button>

  <button
    className={theme === 'upcycling' ? 'active' : ''}
    onClick={() => setTheme('upcycling')}
  >
    Upcycling
  </button>
</div>

      <p>Komm doch herein, und schau dir meine Werke an.</p>

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
        render={{
          slide: ({slide}) => (
            <div className="lightbox-slide">
              <img
                src={slide.src}
                alt={slide.titel || 'Bild'}
                className="lightbox-image"
                />
              <div className='lightbox-text'>
                <h2>{slide.titel}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          )  
      }}
      />
    </motion.div>
  );
};

export default Galerie;
