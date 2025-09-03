import React from 'react';
import './PageStyles.css';
import {motion} from 'framer-motion';

const Blog = () => (
    <motion.div
        className="page"
        initial={{opacity: 0, y: 30}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -30}}
        transition={{duration: 0.5, ease: "easeInOut"}}
        >
        <h1>Blog</h1>
        <p>Deep thinking with the deep</p>
        <div className="blog-preview">
            <h3>Kennst du Oleg?</h3>
            <p>OlegmirdochdieEier kekw</p>
        </div>
    </motion.div>
);

export default Blog;