import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, User, Search } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    Land<span>Connect</span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links desktop-only">
                    <Link to="/buy">Buy Land</Link>
                    <Link to="/sell">Sell Land</Link>
                    <Link to="/agents">Find Agents</Link>
                </div>

                {/* Desktop Actions */}
                <div className="nav-actions desktop-only">
                    <button className="icon-btn" aria-label="Language">
                        <Globe size={20} />
                    </button>
                    <button className="icon-btn" aria-label="Account">
                        <User size={20} />
                    </button>
                    <button className="btn btn-primary">
                        Get Started
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
                    <div className="mobile-links">
                        <Link to="/buy" onClick={() => setIsOpen(false)}>Buy Land</Link>
                        <Link to="/sell" onClick={() => setIsOpen(false)}>Sell Land</Link>
                        <Link to="/agents" onClick={() => setIsOpen(false)}>Find Agents</Link>
                        <hr />
                        <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
                        <Link to="/signup" className="highlight" onClick={() => setIsOpen(false)}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
