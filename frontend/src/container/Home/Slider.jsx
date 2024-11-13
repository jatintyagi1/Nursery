import { useState, useEffect } from 'react';
import './Slider.css';

export default function Slider() {

    const images = [
        'https://media.istockphoto.com/id/1125436449/photo/flower-garden-greenhouse.jpg?s=2048x2048&w=is&k=20&c=vPF1SU7dBupQHWvQUth9Gpdh4R7E_nPLA6d08ui34ic=',
        'https://www.heartyculturenursery.com/cdn/shop/files/2_59458964-93df-41da-8a89-515add00e716_1899x625_crop_center.jpg?v=1691581755',
        'https://source.unsplash.com/1600x900/?garden'
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
