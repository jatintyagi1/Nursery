import { Link } from 'react-router-dom';
import '../../styles/Home/Header.css';

const Headers = () => {
    const headerImg = "https://res.cloudinary.com/dcd6y2awx/image/upload/f_auto,q_auto/v1/PlantSeller/UI%20Images/header-images";

    return (
        <div className="home-header">
            <div className="flex-container">
                <div className="image-container">
                    <img src={headerImg} alt="nursery garden" className="header-image" />
                </div>
                <div className="text-container">
                    <div className="text-wrapper">
                        <p className="greeting-text"><i className='fas fa-minus'></i> Welcome back!</p>
                        <h1 className="header-text">Nursery</h1>
                        <p className="highlight-desc">Welcome to Plant Seller: Where Green Dreams Come True!</p>
                        <p className="description">Explore our lush collection of plants to elevate your living space. From vibrant succulents to elegant ferns, find the perfect green companions to breathe life into your home.</p>
                        <p className="highlight-desc">Let&apos;s grow together!</p>
                        <Link to="/products" className="button">Go To Products <span className="arrow-icon">→</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Headers;
