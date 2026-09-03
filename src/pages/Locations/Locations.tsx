import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, MapPin, Building, Compass } from 'lucide-react';
import { LOCATIONS } from '../../data/locations';
import { PROPERTIES } from '../../data/properties';
import './Locations.css';

export const Locations: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="locations-page" id="locations-explorer-page">
      {/* 1. HERO */}
      <section className="locations-hero-section">
        <h1 className="locations-hero-title">Metropolitan Territories</h1>
        <p className="locations-hero-sub">
          An editorial examination of India’s most storied luxury micro-markets, capital corridors, and architectural enclaves.
        </p>
      </section>

      {/* 2. LOCATIONS EDITORIAL BLOCKS */}
      <section className="locations-container">
        {LOCATIONS.map((loc, index) => {
          const isReversed = index % 2 === 1;
          const cityProperties = PROPERTIES.filter((p) => p.city === loc.name);

          return (
            <div
              key={loc.id}
              id={loc.slug}
              className={`city-editorial-block ${isReversed ? 'reversed' : ''}`}
            >
              {/* Media Col */}
              <div
                className="city-media-wrap"
                style={{ order: isReversed ? 2 : 1 }}
              >
                <img src={loc.image} alt={loc.name} className="city-media-img" loading="lazy" />
                <div className="city-property-pill">
                  {loc.propertyCount} Active Private Portfolios
                </div>
              </div>

              {/* Info Col */}
              <div
                className="city-info-col"
                style={{ order: isReversed ? 1 : 2 }}
              >
                <span className="city-tagline">{loc.tagline}</span>
                <h2 className="city-name-title">{loc.name}</h2>
                <p className="city-desc-text">{loc.description}</p>

                {/* Key Metrics */}
                <div className="city-stats-row">
                  {loc.stats.map((stat, i) => (
                    <div key={i} className="city-stat-item">
                      <span className="city-stat-label">{stat.label}</span>
                      <span className="city-stat-value">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Micro Markets */}
                <div style={{ marginBottom: '0.75rem', fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)' }}>
                  Signature Enclaves
                </div>
                <div className="city-enclaves-list">
                  {loc.keyAreas.map((area, i) => (
                    <span key={i} className="enclave-tag">
                      {area}
                    </span>
                  ))}
                </div>

                {/* Explore Action */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Link
                    to={`/properties?location=${loc.name}`}
                    className="luxury-btn-primary"
                    style={{ textDecoration: 'none' }}
                  >
                    <span>Explore {loc.name} Residences</span>
                    <ArrowRight size={14} />
                  </Link>
                  {cityProperties.length > 0 && (
                    <Link
                      to={`/properties/${cityProperties[0].slug}`}
                      className="hover-reveal-link"
                      style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, color: 'var(--dark-primary)' }}
                    >
                      Featured: {cityProperties[0].title} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
