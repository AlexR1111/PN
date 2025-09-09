import React from "react";
import {motion} from 'framer-motion';

const Danke = () => (
    <motion.div
    className="page"
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -30}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        >
        <h1>Vielen Dank</h1>
        <p>Deine Nachricht wurde versendet, ich melde mich sobald sie angekommen ist.</p>
    </motion.div>
);

export default Danke;