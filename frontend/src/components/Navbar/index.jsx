import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../../styles/Navbar.css';

//import './Navbar.css'

export default function Navbar() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return isDesktop ? <Desktop /> : <Mobile />
}


const Desktop = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <nav className="desktop-navbar">
            <div className="nursery-name">Nursery</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            <div className="nav-buttons">
                {isLoggedIn ? (
                    <>
                        <Link to="/profile" className="btn">Profile</Link>
                        <Link to="/cart" className="btn">🛒</Link>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="btn">Register</Link>
                        <Link to="/cart" className="btn">🛒</Link>
                    </>
                )}
            </div>
        </nav>
    );
};



const Mobile = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="mobile-navbar">
            <div className="nursery-name">🌱 My Nursery</div>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
            <ul className={`mobile-nav-links ${menuOpen ? "open" : ""}`}>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
                <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

                <div className="mobile-nav-buttons">
                    {isLoggedIn ? (
                        <>
                            <Link to="/profile" className="btn" onClick={() => setMenuOpen(false)}>Profile</Link>
                            <Link to="/cart" className="btn" onClick={() => setMenuOpen(false)}>🛒</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="btn" onClick={() => setMenuOpen(false)}>Register</Link>
                            <Link to="/cart" className="btn" onClick={() => setMenuOpen(false)}>🛒</Link>
                        </>
                    )}
                </div>
            </ul>
        </nav>
    );
};






