import { useState, useEffect } from 'react';
import '../../styles/Home/Slider.css';

export default function Slider() {

    const images = [
        'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/67015119de9a9f002b73c9bc/6-2000x600.png',
        'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/6701514484061f0024d4b4c6/7-2000x600.png',
        'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/670150f7e822b00032d15703/5-2000x600.png',
        'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/6735a0b09789e20024e50d7b/banners-2000x600.png',
        'https://www.urvann.com/s/6176774ef575bbd2b3331c8a/6701578cabac2e00b35e07e2/festive-banners-2000x600.png'
    ];
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };


    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, [currentImage]);

    return (
        <section className="hero-section">
            <div className="slider-container">
                <img src={images[currentImage]} alt="Slider" className="slider-image" />
                <button className="prev-button" onClick={prevImage}>❮</button>
                <button className="next-button" onClick={nextImage}>❯</button>
            </div>
        </section>
    );
}



