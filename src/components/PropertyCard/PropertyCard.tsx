import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Heart, ArrowRight, Bed, Bath, Maximize } from 'lucide-react';
import { Property } from '../../data/properties';
import './PropertyCard.css';

interface PropertyCardProps {
  property: Property;
  isFavorited?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  isFavorited = false,
  onToggleFavorite,
}) => {
  const handleFavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(property.id);
    }
  };

  return (
    <article className="property-card" id={`property-card-${property.id}`}>
      <div className="property-card-image-wrap">
        <img
          src={property.image}
          alt={property.title}
          className="property-card-image"
          loading="lazy"
        />

        <div className="property-card-badges">
          <span className="property-badge-status">{property.status}</span>
          <span className="property-badge-type">{property.type}</span>
        </div>

        <button
          type="button"
          className={`property-card-fav-btn ${isFavorited ? 'is-favorited' : ''}`}
          onClick={handleFavClick}
          aria-label={isFavorited ? 'Remove from saved residences' : 'Save residence'}
          title={isFavorited ? 'Remove from saved' : 'Save residence'}
        >
          <Heart size={18} fill={isFavorited ? '#DC2626' : 'none'} />
        </button>

        <div className="property-card-price-overlay">
          <span className="property-card-price">{property.price}</span>
          <span className="property-card-city-tag">{property.city}</span>
        </div>
      </div>

      <div className="property-card-content">
        <Link to={`/properties/${property.slug}`} style={{ textDecoration: 'none' }}>
          <h3 className="property-card-title">{property.title}</h3>
        </Link>

        <div className="property-card-location">
          <MapPin size={14} color="var(--accent-gold)" />
          <span>{property.location}</span>
        </div>

        <div className="property-card-specs">
          <div className="spec-item">
            <span className="spec-label">Bedrooms</span>
            <span className="spec-value">{property.bhk} BHK</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Baths</span>
            <span className="spec-value">{property.bathrooms} Baths</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Area</span>
            <span className="spec-value">{property.area}</span>
          </div>
        </div>

        <div className="property-card-footer">
          <Link to={`/properties/${property.slug}`} className="property-view-btn">
            <span>View Details</span>
            <ArrowRight size={14} className="arrow-icon" />
          </Link>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {property.neighborhood}
          </span>
        </div>
      </div>
    </article>
  );
};
