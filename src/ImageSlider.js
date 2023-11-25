import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images, interval }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            //setCurrentImage((prevImage) => (prevImage + 1) % images.length);
            //set random image
            setCurrentImage(Math.floor(Math.random() * images.length));
        }, interval * 1000);

        return () => {
            clearInterval(timer);
        };
    }, [images, interval]);

    return (
        <div>
            <img src={images[currentImage]} alt={`Slider img ${currentImage}`} style={{ alignContent: 'center', width: '100%', height: '100vh', objectFit: 'contain' }} />
        </div>
    );
};

export default ImageSlider;