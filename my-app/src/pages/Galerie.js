import React, {useState} from 'react';
import './PageStyles.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const Galerie= () => {
    const[open, setOpen]= useState(false);
    const[index, setIndex]= useState(0);

const slides = [
  {src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/visitencarte_back_ggzo4f'},
  {src: 'https://res.cloudinary.com/dzlpy6osa/image/upload/visitencarte_front_w2uxyg'},
];

    const handleClick = (i) => {
        setIndex(i);
        setOpen(true);
    };

    return (
    <div className="page">
        <h1>Galerie</h1>
        <p>Road work ahead? I sure hope it does</p>
        

        <div className="gallery-grid">
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className="gallery-item"
                    onClick={() => handleClick(i)}
                    style={{ backgroundImage: `url(${slide.src})`}}
                />
            ))}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slides}
                index={index}
            />
    </div>
    );
};

export default Galerie;