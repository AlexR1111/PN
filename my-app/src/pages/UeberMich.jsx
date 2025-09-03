import React from 'react';
import './PageStyles.css';
import { motion } from 'framer-motion';

const pageTransition = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
  transition: { duration: 0.6, ease: 'easeInOut' },
};

const UeberMich = () => (
  <motion.div
    className="page uebermich-page"
    initial={pageTransition.initial}
    animate={pageTransition.animate}
    exit={pageTransition.exit}
    transition={pageTransition.transition}
  >
    <h1>Über Mich</h1>
    <p>Ich bin hier, du bist hier, Schnabeltier</p>
  </motion.div>
);

export default UeberMich;
