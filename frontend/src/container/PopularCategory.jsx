import '../styles/PopularCategory.css';

import { images } from '../assets/Image/collection'

export default function PopularCategory() {
    return (
        <div className="popular-category">
            <div className="header">
                <h1>Popular Categories</h1>
            </div>
            <main>
                <section>
                    <ul className="image-list">
                        {images.map((image) => (
                            <li key={image.id} className="image-item">
                                <img src={image.src} alt={image.alt} />
                                <p>{image.text}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}
