import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
    const [userType, setUserType] = useState('buyer'); // 'buyer' or 'broker'

    return (
        <div className="hero-section">
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-text">
                    <span className="hero-badge">The #1 Land Marketplace</span>
                    <h1>
                        {userType === 'buyer'
                            ? 'Find Your Perfect Piece of Land'
                            : 'Sell Your Land with Confidence'}
                    </h1>
                    <p>
                        {userType === 'buyer'
                            ? 'Browse thousands of rural plots, farm lands, and investment opportunities.'
                            : 'Connect with serious buyers and close deals faster than ever.'}
                    </p>
                </div>

                <div className="hero-search-container">
                    <div className="user-type-toggle">
                        <button
                            className={userType === 'buyer' ? 'active' : ''}
                            onClick={() => setUserType('buyer')}
                        >
                            For Buyers
                        </button>
                        <button
                            className={userType === 'broker' ? 'active' : ''}
                            onClick={() => setUserType('broker')}
                        >
                            For Brokers
                        </button>
                    </div>

                    <div className="search-box">
                        <div className="input-group">
                            <MapPin size={22} className="input-icon" />
                            <input
                                type="text"
                                placeholder={userType === 'buyer' ? "Enter state, county, or city" : "Property address"}
                                className="main-input"
                            />
                        </div>

                        {userType === 'buyer' && (
                            <>
                                <div className="divider-vertical"></div>
                                <div className="input-group filters-group">
                                    <input type="text" placeholder="Acres" className="filter-input" />
                                    <span className="filter-label">Min</span>
                                </div>
                                <div className="divider-vertical"></div>
                                <div className="input-group filters-group">
                                    <input type="text" placeholder="Price" className="filter-input" />
                                    <span className="filter-label">Max</span>
                                </div>
                            </>
                        )}

                        <button
                            className="search-btn"
                            onClick={() => alert("Search functionality coming soon! This would filter the properties below.")}
                        >
                            <Search size={22} />
                            {userType === 'buyer' ? 'Search' : 'Calculate Value'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
