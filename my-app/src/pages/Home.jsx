import React from "react";
import './PageStyles.css';
import {motion} from 'framer-motion';

const Home = () => (
    <motion.div
        className="page"
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -30}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        >
        <h1>Willkommen auf meiner Seite</h1>
        <p>Hier kommt dann später der inhalt.</p>
    </motion.div>
);

export default Home;