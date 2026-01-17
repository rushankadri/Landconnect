import { MapPin, Maximize, ArrowRight } from 'lucide-react';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
    return (
        <div className="property-card">
            <div className="card-image">
                <img src={property.image} alt={property.title} />
                <span className="card-tag">{property.type}</span>
                <span className="card-price">{property.price}</span>
            </div>

            <div className="card-content">
                <h3 className="card-title">{property.title}</h3>
                <div className="card-location">
                    <MapPin size={16} />
                    <span>{property.location}</span>
                </div>

                <div className="card-details">
                    <div className="detail-item">
                        <Maximize size={16} />
                        <span>{property.size}</span>
                    </div>
                    <div className="detail-item">
                        <span>Zoning: {property.zoning}</span>
                    </div>
                </div>

                <button className="card-btn">
                    View Details <ArrowRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default PropertyCard;
