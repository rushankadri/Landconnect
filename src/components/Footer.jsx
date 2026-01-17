import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-col">
                    <div className="footer-logo">
                        Land<span>Connect</span>
                    </div>
                    <p className="footer-desc">
                        The premier marketplace for buying and selling land. Connecting people with their perfect piece of earth since 2024.
                    </p>
                    <div className="social-links">
                        <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/buy">Buy Land</a></li>
                        <li><a href="/sell">Sell Land</a></li>
                        <li><a href="/agents">Find Agents</a></li>
                        <li><a href="/about">About Us</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Contact</h3>
                    <ul className="contact-list">
                        <li>
                            <MapPin size={18} />
                            <span>123 Green Valley Rd, Austin, TX</span>
                        </li>
                        <li>
                            <Phone size={18} />
                            <span>(555) 123-4567</span>
                        </li>
                        <li>
                            <Mail size={18} />
                            <span>hello@landconnect.com</span>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Newsletter</h3>
                    <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                        Get the latest land listings and market insights delivered to your inbox.
                    </p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your email address" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2024 LandConnect. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
