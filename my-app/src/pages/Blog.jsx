import React from 'react';
import './PageStyles.css';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../components/blogData';

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
            {blogPosts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p className='date-blog'>{post.date}</p>
                    <Link to={`/blog/${post.id}`}>Beitrag lesen</Link>
                </div>
            ))}
        </div>
    </motion.div>
);

export default Blog;