import React, { useState } from 'react';
import './PageStyles.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { motion } from 'framer-motion';
import { medievalSlides, upcyclingSlides , customSlides} from '../components/galleryData';

const Galerie = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState('mittelalter');

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
      <h2>
       In meiner Galerie findet ihr eine Auswahl an Bildern meiner bisherigen und aktuellen Projekte. Ob mittelalterliche Gewandungen, kreative Upcycling-Ideen oder individuelle Änderungsarbeiten – jedes Stück erzählt seine eigene Geschichte. Lasst euch inspirieren von handgefertigter Kleidung, liebevoll verarbeiteten Materialien und einzigartigen Designs, die Tradition und Moderne verbinden.
       
      </h2>

      
      <div className="tabs">
        <div className="tab-buttons">
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
          <button
            className={theme === 'custom' ? 'active' : ''}
            onClick={() => setTheme('custom')}
            >
            Änderungen und Sonstiges
            </button>
        </div>

        <div className="tab-content">
          {theme === 'mittelalter' && (
            <div>
              <p className="gallery-text">
                Tauche ein in die Welt vergangener Jahrhunderte: <br /><br />
                Diese Galerie zeigt handgefertigte Gewandungen, inspiriert von mittelalterlicher Kleidung und traditioneller Handwerkskunst. Die verwendeten Stoffe stammen direkt von meinen Kund*innen – so wird jedes Stück zu einem ganz persönlichen Unikat. Besonders hervorzuheben sind die Arbeiten mit echten Fellen, die aus alten Pelzjacken und Mänteln stammen. Durch sorgfältige Aufarbeitung erhalten diese Materialien ein neues Leben in historisch anmutenden Gewändern.
              </p>
              <div className="gallery-grid">
                {medievalSlides.map((slide, i) => (
                  <div
                    key={i}
                    className="gallery-item"
                    onClick={() => handleClick(i)}
                    style={{ backgroundImage: `url(${slide.src})` }}
                  />
                ))}
              </div>
            </div>
          )}

          {theme === 'upcycling' && (
            <div>
              <p className="gallery-text">
                Nachhaltigkeit trifft Kreativität: <br /><br />
                In dieser Rubrik findest du moderne Stücke, die aus alten Materialien neu gestaltet wurden. Ob Stoffreste, ausgediente Kleidung oder besondere Fundstücke – jedes Werk erzählt seine eigene Geschichte. Mit viel Liebe zum Detail entstehen daraus einzigartige Accessoires und Kleidungsstücke, die Umweltbewusstsein und Stil vereinen.
              </p>
              <div className="gallery-grid">
                {upcyclingSlides.map((slide, i) => (
                  <div
                    key={i}
                    className="gallery-item"
                    onClick={() => handleClick(i)}
                    style={{ backgroundImage: `url(${slide.src})` }}
                  />
                ))}
              </div>
            </div>
          )}

          {theme === 'custom' && (
            <div>
              <p className='gallery-text'>
                text text text text text und text.
              </p>
              <div className="gallery-grid">
                {customSlides.map((slide,i) => (
                  <div
                    key={i}
                    className="gallery-item"
                    onClick={() => handleClick(i)}
                    style={{ backgroundImage: `url(${slide.src})` }}
                  />
                ))}
              </div>
            </div>
          )}
      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={theme === 'mittelalter' ? medievalSlides : theme === 'upcycling' ? upcyclingSlides : customSlides}
        index={index}
        render={{
          slide: ({ slide }) => (
            <div className="lightbox-slide">
              <img
                src={slide.src}
                alt={slide.title || 'Bild'}
                className="lightbox-image"
              />
              <div className="lightbox-text">
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ),
        }}
      />
          </div>
        </div>
    </motion.div>
  );
};

export default Galerie;
