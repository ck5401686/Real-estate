import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import {
  MapPin,
  Bed,
  Bath,
  Maximize2,
  Calendar,
  Phone,
  Mail,
  Heart,
  Share2,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Compass,
  FileText,
} from 'lucide-react';
import { PROPERTIES, Property } from '../../data/properties';
import { PropertyCard } from '../../components/PropertyCard/PropertyCard';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import './PropertyDetail.css';

interface PropertyDetailProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({
  favorites,
  onToggleFavorite,
}) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find property by slug or id
  const property = PROPERTIES.find((p) => p.slug === slug || p.id === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!property) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', marginBottom: '1rem' }}>
          Residence Not Found
        </h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
          The requested private estate may have traded off-market or been archived.
        </p>
        <Link to="/properties" className="luxury-btn-primary">
          <span>Return to Properties</span>
        </Link>
      </div>
    );
  }

  const isFavorited = favorites.includes(property.id);

  // Similar properties: same city or same type
  const similarProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.city === property.city || p.type === property.type)
  ).slice(0, 3);

  return (
    <div className="property-detail-page" id="property-detail-view">
      {/* 1. LARGE GALLERY (SWIPER) */}
      <div className="detail-hero-gallery">
        <div className="gallery-floating-overlay">
          <Link to="/properties" className="back-link-btn">
            <ArrowLeft size={14} />
            <span>All Properties</span>
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, EffectFade]}
          effect="fade"
          navigation
          pagination={{ clickable: true }}
          style={{ width: '100%', height: '100%' }}
        >
          {property.gallery.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${property.title} - View ${index + 1}`}
                className="gallery-slide-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 2. MAIN DETAIL CONTAINER */}
      <div className="property-detail-container">
        {/* Header Row */}
        <div className="detail-header-row">
          <div className="detail-title-col">
            <div className="detail-tagline">{property.tagline}</div>
            <h1 className="detail-main-title">{property.title}</h1>
            <div className="detail-location-row">
              <MapPin size={18} color="var(--accent-gold)" />
              <span>{property.location}</span>
              <span style={{ margin: '0 0.5rem', color: 'var(--border-subtle)' }}>|</span>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>
                {property.type}
              </span>
            </div>
          </div>

          <div className="detail-price-col">
            <div className="detail-price-badge">{property.status}</div>
            <div className="detail-price-num">{property.price}</div>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => onToggleFavorite(property.id)}
                className="luxury-btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
              >
                <Heart size={14} fill={isFavorited ? '#DC2626' : 'none'} color={isFavorited ? '#DC2626' : 'currentColor'} />
                <span>{isFavorited ? 'Saved' : 'Save Residence'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Specs Bar */}
        <div className="detail-specs-bar">
          <div className="spec-box">
            <div className="spec-icon-wrap">
              <Bed size={22} />
            </div>
            <div className="spec-data">
              <span className="spec-data-label">Bedrooms</span>
              <span className="spec-data-val">{property.bhk} BHK Suite</span>
            </div>
          </div>

          <div className="spec-box">
            <div className="spec-icon-wrap">
              <Bath size={22} />
            </div>
            <div className="spec-data">
              <span className="spec-data-label">Bathrooms</span>
              <span className="spec-data-val">{property.bathrooms} Baths</span>
            </div>
          </div>

          <div className="spec-box">
            <div className="spec-icon-wrap">
              <Maximize2 size={22} />
            </div>
            <div className="spec-data">
              <span className="spec-data-label">Super Built-Up Area</span>
              <span className="spec-data-val">{property.area}</span>
            </div>
          </div>

          <div className="spec-box">
            <div className="spec-icon-wrap">
              <Compass size={22} />
            </div>
            <div className="spec-data">
              <span className="spec-data-label">Neighborhood</span>
              <span className="spec-data-val">{property.neighborhood}</span>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="detail-content-grid">
          {/* Main Content Column */}
          <div className="detail-main-info">
            {/* Overview */}
            <div className="content-block">
              <h2 className="block-heading">Architectural Overview</h2>
              <p className="overview-paragraph">{property.description}</p>
            </div>

            {/* Signature Features */}
            <div className="content-block">
              <h2 className="block-heading">Signature Distinctions</h2>
              <div className="features-bullet-grid">
                {property.features.map((feature, idx) => (
                  <div key={idx} className="feature-bullet-item">
                    <CheckCircle2 size={18} className="feature-bullet-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Amenities */}
            <div className="content-block">
              <h2 className="block-heading">Private Estate Amenities</h2>
              <div className="amenities-badges-grid">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="amenity-badge-card">
                    <ShieldCheck size={18} color="var(--accent-gold)" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plans & Schematics */}
            <div className="content-block">
              <h2 className="block-heading">Floor Plan & Spatial Layout</h2>
              <div className="floor-plan-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>
                    {property.floorPlan.levels}
                  </span>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold)' }}>
                    Bespoke Blueprint
                  </span>
                </div>

                {/* Minimal Architectural SVG Blueprint */}
                <div className="floor-plan-svg-mock">
                  <svg width="100%" height="100%" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="560" height="160" stroke="#B08D57" strokeWidth="1.5" strokeDasharray="6 6" />
                    <rect x="40" y="40" width="260" height="120" stroke="#171717" strokeWidth="1.5" />
                    <rect x="320" y="40" width="240" height="60" stroke="#171717" strokeWidth="1.5" />
                    <rect x="320" y="110" width="240" height="50" stroke="#171717" strokeWidth="1.5" />
                    <text x="110" y="105" fill="#171717" fontFamily="sans-serif" fontSize="12" letterSpacing="2">
                      GRAND LIVING SALON
                    </text>
                    <text x="360" y="75" fill="#171717" fontFamily="sans-serif" fontSize="11" letterSpacing="1.5">
                      MASTER SUITE
                    </text>
                    <text x="360" y="140" fill="#B08D57" fontFamily="sans-serif" fontSize="11" letterSpacing="1.5">
                      SUNSET BALCONY / DECK
                    </text>
                  </svg>
                </div>

                <div className="floor-plan-specs-grid">
                  {property.floorPlan.specs.map((s, idx) => (
                    <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{s.label}</span>
                      <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Location & Nearby Enclave */}
            <div className="content-block">
              <h2 className="block-heading">Neighborhood & Landmarks</h2>
              <div className="nearby-list-grid">
                {property.nearby.map((place, idx) => (
                  <div key={idx} className="nearby-item">
                    <div>
                      <div className="nearby-name">{place.place}</div>
                      <div className="nearby-type">{place.type}</div>
                    </div>
                    <div className="nearby-distance">{place.distance}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar: Agent & Schedule Visit */}
          <div className="detail-sidebar-col">
            <div className="sticky-agent-card">
              <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent-gold)', display: 'block', marginBottom: '1.25rem', fontWeight: 600 }}>
                Private Advisory Representation
              </span>

              <div className="agent-header">
                <img
                  src={property.agent.avatar}
                  alt={property.agent.name}
                  className="agent-avatar-img"
                />
                <div>
                  <h3 className="agent-name">{property.agent.name}</h3>
                  <p className="agent-title">{property.agent.title}</p>
                </div>
              </div>

              <div className="agent-direct-actions">
                <a href={`tel:${property.agent.phone}`} className="agent-action-btn">
                  <Phone size={14} color="var(--accent-gold)" />
                  <span>{property.agent.phone}</span>
                </a>
                <a href={`mailto:${property.agent.email}`} className="agent-action-btn">
                  <Mail size={14} color="var(--accent-gold)" />
                  <span>Direct Inquiry</span>
                </a>
              </div>

              {/* Schedule Visit CTA */}
              <Link
                to={`/schedule-visit?property=${property.id}`}
                className="luxury-btn-gold"
                style={{ width: '100%', textDecoration: 'none', textAlign: 'center', marginBottom: '1rem' }}
              >
                <Calendar size={16} />
                <span>Schedule a Private Visit</span>
              </Link>

              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.5' }}>
                Walkthroughs are strictly by prior appointment and subject to client vetting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SIMILAR PROPERTIES */}
      {similarProperties.length > 0 && (
        <section className="similar-properties-section">
          <SectionTitle
            tag="Complementary Estates"
            title="Similar Properties"
            subtitle="Explore comparable luxury residences in the region."
          />
          <div className="properties-listing-grid" style={{ marginTop: '2.5rem' }}>
            {similarProperties.map((similar) => (
              <PropertyCard
                key={similar.id}
                property={similar}
                isFavorited={favorites.includes(similar.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
