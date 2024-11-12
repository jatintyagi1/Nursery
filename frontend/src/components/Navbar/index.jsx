import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import '../../styles/Navbar.css';

export default function Navbar() {
    const isDesktop = useMediaQuery({ minWidth: 768 });

    return isDesktop ? <Desktop /> : <Mobile />
}

function Desktop() {
    return (
        <nav className="navbar navbar-desktop">
            <h1 className="navbar-logo">Nursery</h1>
            <ul className='desktop-ul'>
                <Link to='/' className="nav-link" ><li>Home</li></Link>
                <Link to='/about' className="nav-link"><li>About</li></Link>
                <Link to='/products' className="nav-link"><li>Products</li></Link>
                <Link to='/contact' className="nav-link"><li>Contact</li></Link>
            </ul>
        </nav>
    );
}

function Mobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar navbar-mobile">
            <h1 className="navbar-logo">Nursery</h1>
            {!menuOpen && (
                <button className="menu-button" onClick={toggleMenu}>☰</button>
            )}
            <ul className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <li onClick={toggleMenu}>Home</li>
                <li onClick={toggleMenu}>About</li>
                <li onClick={toggleMenu}>Products</li>
                <li onClick={toggleMenu}>Contact</li>
            </ul>
        </nav>
    );
}
