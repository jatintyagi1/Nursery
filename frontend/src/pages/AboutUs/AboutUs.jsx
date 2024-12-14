import "./AboutUs.css";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutUs() {
    return (
        <>
            <Navbar />
            <div className="about-us">
                <section className="aboutUs-section">
                    <div className="hero-content">
                        <h1>About Us</h1>
                        <p>
                            Welcome to our Nursery! We are dedicated to bringing nature closer to your home with our wide range of plants, gardening tools, and expert advice.
                        </p>
                    </div>
                </section>

                <section className="mission-section">
                    <div className="container">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to make greenery accessible to everyone by providing high-quality plants and gardening solutions. We believe that nurturing plants not only beautifies your space but also promotes mental well-being.
                        </p>
                    </div>
                </section>

                <section className="why-choose-us">
                    <div className="container">
                        <h2>Why Choose Us?</h2>
                        <ul>
                            <li>🌱 A wide variety of plants for every need and space</li>
                            <li>🌼 Expert gardening tips and advice</li>
                            <li>🌳 High-quality soil, pots, and fertilizers</li>
                            <li>🌿 Personalized care for your gardening journey</li>
                            <li>🌍 Environmentally sustainable practices</li>
                        </ul>
                    </div>
                </section>

                <section className="team-section">
                    <div className="container">
                        <h2>Meet Our Team</h2>
                        <p>
                            Our team of gardening enthusiasts and experts is passionate about helping you create your dream garden. With years of experience, we provide guidance on plant care, landscaping, and eco-friendly gardening techniques.
                        </p>
                    </div>
                </section>

                <section className="visit-us">
                    <div className="container">
                        <h2>Visit Us</h2>
                        <p>
                            Explore our nursery in person to experience the joy of plants. Our friendly team will assist you in finding the perfect plants for your space.
                        </p>
                        <p>📍 Location: Noida</p>
                        <p>📞 Contact: 123 456 7890</p>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="container">
                        <h2>What Our Customers Say</h2>
                        <blockquote>
                            &quot;The plants I bought from this nursery have transformed my living room. Their team is so helpful and knowledgeable!&quot; - Happy Customer
                        </blockquote>
                        <blockquote>
                            &quot;Amazing variety of plants! I found everything I needed for my garden here.&quot; - Gardening Enthusiast
                        </blockquote>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
