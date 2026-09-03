import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Calendar,
  MapPin,
  ChevronDown,
  Star,
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { PROPERTIES } from '../../data/properties';
import { PROJECTS } from '../../data/projects';
import { LOCATIONS } from '../../data/locations';
import { TESTIMONIALS } from '../../data/testimonials';

import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { PropertyCard } from '../../components/PropertyCard/PropertyCard';
import { textReveal, fadeUp, animateCounter } from '../../animations/gsapAnimations';

import './Home.css';

interface HomeProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const Home: React.FC<HomeProps> = ({ favorites, onToggleFavorite }) => {
  const navigate = useNavigate();

  // Search State
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchStatus, setSearchStatus] = useState('For Sale');
  const [searchBedrooms, setSearchBedrooms] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  // Refs for GSAP
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsSectionRef = useRef<HTMLDivElement>(null);

  // Counter Refs
  const countRef1 = useRef<HTMLDivElement>(null);
  const countRef2 = useRef<HTMLDivElement>(null);
  const countRef3 = useRef<HTMLDivElement>(null);
  const countRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero entrance animations
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.3, ease: 'power3.out', delay: 0.2 }
      );
    }
    if (subtextRef.current) {
      gsap.fromTo(
        subtextRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', delay: 0.5 }
      );
    }
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.7 }
      );
    }

    // Stats counter trigger
    if (countRef1.current && countRef2.current && countRef3.current && countRef4.current) {
      animateCounter(countRef1.current, 15, '', '+', 2);
      animateCounter(countRef2.current, 2500, '', '+', 2.2);
      animateCounter(countRef3.current, 1800, '', '+', 2.2);
      animateCounter(countRef4.current, 25, '', '+', 2);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchLocation) params.append('location', searchLocation);
    if (searchType) params.append('type', searchType);
    if (searchStatus) params.append('status', searchStatus);
    if (searchBedrooms) params.append('bhk', searchBedrooms);
    if (searchPrice) params.append('price', searchPrice);

    navigate(`/properties?${params.toString()}`);
  };

  const scrollToSearch = () => {
    const el = document.getElementById('home-search-container');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredProperties = PROPERTIES.filter((p) => p.featured);
  const featuredProject = PROJECTS[0]; // The Grand Residence

  return (
    <div className="home-page" id="home-page-container">
      {/* 1. CINEMATIC HERO */}
      <section className="home-hero" ref={heroRef} id="home-hero-section">
        <div className="home-hero-bg-wrap">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Cinematic Modern Architectural Residence"
            className="home-hero-bg-img"
          />
        </div>
        <div className="home-hero-overlay" />

        <div className="home-hero-content">
          <span className="hero-super-tag">Architectural Masterworks & Private Estates</span>

          <h1 className="hero-main-headline" ref={headlineRef}>
            WHERE<br />
            LIFE<br />
            BELONGS.
          </h1>

          <p className="hero-supporting-text" ref={subtextRef}>
            Exceptional spaces. Thoughtfully designed for modern living.
          </p>

          <div className="hero-cta-group" ref={ctaRef}>
            <Link to="/properties" className="luxury-btn-gold" style={{ textDecoration: 'none' }}>
              <span>Explore Properties</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/schedule-visit"
              className="luxury-btn-outline"
              style={{
                color: '#FAF6EC',
                borderColor: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
              }}
            >
              <Calendar size={16} />
              <span>Schedule a Visit</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="hero-scroll-indicator"
          onClick={scrollToSearch}
          role="button"
          tabIndex={0}
          aria-label="Scroll to search properties"
        >
          <span>Explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* 2. COMPACT SEARCH INTERFACE */}
      <section
        className="home-search-section"
        id="home-search-container"
        aria-label="Property Search Interface"
      >
        <form className="luxury-search-bar" onSubmit={handleSearchSubmit}>
          {/* Location */}
          <div className="search-field">
            <label htmlFor="search-loc" className="search-label">
              Location
            </label>
            <select
              id="search-loc"
              className="search-select"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
            >
              <option value="">All Metropolises</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Pune">Pune</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Patna">Patna</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="search-field">
            <label htmlFor="search-type" className="search-label">
              Property Type
            </label>
            <select
              id="search-type"
              className="search-select"
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="">All Typologies</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Villa">Villa</option>
              <option value="Sky Residence">Sky Residence</option>
              <option value="Estate">Estate</option>
              <option value="Duplex">Duplex</option>
              <option value="Mansion">Mansion</option>
            </select>
          </div>

          {/* Buy / Rent */}
          <div className="search-field">
            <label htmlFor="search-status" className="search-label">
              Buy / Rent
            </label>
            <select
              id="search-status"
              className="search-select"
              value={searchStatus}
              onChange={(e) => setSearchStatus(e.target.value)}
            >
              <option value="For Sale">Buy (For Sale)</option>
              <option value="For Rent">Rent (Lease)</option>
            </select>
          </div>

          {/* Price */}
          <div className="search-field">
            <label htmlFor="search-price" className="search-label">
              Price Range
            </label>
            <select
              id="search-price"
              className="search-select"
              value={searchPrice}
              onChange={(e) => setSearchPrice(e.target.value)}
            >
              <option value="">Any Budget</option>
              <option value="under-15">Under ₹ 15 Cr</option>
              <option value="15-25">₹ 15 Cr – ₹ 25 Cr</option>
              <option value="25-40">₹ 25 Cr – ₹ 40 Cr</option>
              <option value="above-40">₹ 40 Cr +</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div className="search-field">
            <label htmlFor="search-bhk" className="search-label">
              Bedrooms
            </label>
            <select
              id="search-bhk"
              className="search-select"
              value={searchBedrooms}
              onChange={(e) => setSearchBedrooms(e.target.value)}
            >
              <option value="">Any Bedrooms</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
              <option value="5">5 BHK</option>
              <option value="6">6+ BHK</option>
            </select>
          </div>

          {/* CTA Submit */}
          <button type="submit" className="luxury-btn-primary search-submit-btn">
            <Search size={16} />
            <span>Search Properties</span>
          </button>
        </form>
      </section>

      {/* 3. FEATURED PROPERTIES (SWIPER) */}
      <section className="home-featured-properties" id="featured-residences">
        <div className="carousel-header-row">
          <SectionTitle
            tag="Curated Portfolio"
            title="Featured Residences"
            subtitle="Explore our handpicked collection of architectural sky villas, heritage estates, and waterfront sanctums."
          />
          <Link
            to="/properties"
            className="hover-reveal-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.8125rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
              color: 'var(--dark-primary)',
            }}
          >
            <span>View All ({PROPERTIES.length})</span>
            <ArrowRight size={14} color="var(--accent-gold)" />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 28,
            },
          }}
          style={{ paddingBottom: '3.5rem' }}
        >
          {featuredProperties.map((property) => (
            <SwiperSlide key={property.id} style={{ height: 'auto' }}>
              <PropertyCard
                property={property}
                isFavorited={favorites.includes(property.id)}
                onToggleFavorite={onToggleFavorite}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 4. IMMERSIVE FULL-WIDTH FEATURED PROJECT */}
      <section className="home-featured-project" id="home-featured-project-scroll">
        <img
          src={featuredProject.heroImage}
          alt={featuredProject.name}
          className="featured-project-bg"
        />
        <div className="featured-project-overlay" />

        <div className="featured-project-content">
          <span className="project-tag">Featured Project</span>
          <h2 className="project-headline">{featuredProject.name}</h2>
          <div className="project-meta-loc">
            <MapPin size={18} color="var(--accent-gold)" />
            <span>{featuredProject.location}</span>
            <span style={{ margin: '0 0.5rem' }}>•</span>
            <span style={{ color: 'var(--accent-gold-light)' }}>
              Architect: {featuredProject.architect}
            </span>
          </div>
          <div className="project-price-callout">
            Starting from {featuredProject.startingPrice}
          </div>
          <Link
            to="/projects"
            className="luxury-btn-gold"
            style={{ textDecoration: 'none' }}
          >
            <span>Explore Project</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 5. LOCATIONS PREVIEW */}
      <section className="home-locations-section" id="home-locations-preview">
        <div className="carousel-header-row">
          <SectionTitle
            tag="Prime Territories"
            title="Curated Metropolises"
            subtitle="Discover extraordinary residences located within India's most prestigious postal codes."
          />
          <Link
            to="/locations"
            className="luxury-btn-outline"
            style={{ textDecoration: 'none' }}
          >
            <span>View All Locations</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="locations-preview-grid">
          {LOCATIONS.map((loc) => (
            <Link
              key={loc.id}
              to={`/locations#${loc.slug}`}
              className="location-preview-card"
              id={`location-card-${loc.slug}`}
            >
              <img src={loc.image} alt={loc.name} className="location-card-bg" />
              <div className="location-card-gradient" />
              <div className="location-card-content">
                <h3 className="location-card-name">{loc.name}</h3>
                <p className="location-card-count">{loc.propertyCount} Prime Residences</p>
                <div className="location-card-action">
                  <span>Explore City</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. STATS WITH ANIMATED COUNTERS */}
      <section
        className="home-stats-section"
        ref={statsSectionRef}
        id="home-stats-counter-section"
      >
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number" ref={countRef1}>
              15+
            </div>
            <div className="stat-label">Years of Heritage</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={countRef2}>
              2,500+
            </div>
            <div className="stat-label">Architectural Residences</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={countRef3}>
              1,800+
            </div>
            <div className="stat-label">Discerning Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={countRef4}>
              25+
            </div>
            <div className="stat-label">Prime Capital Locations</div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS PREVIEW (SWIPER) */}
      <section className="home-testimonials-section" id="home-testimonials-preview">
        <SectionTitle
          tag="Reputation & Trust"
          title="Client Reflections"
          subtitle="Experiences of patrons who acquired their signature homes through our private advisory."
          align="center"
        />

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: '3.5rem' }}
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card-editorial">
                <div className="testimonial-quote-icon">“</div>
                <p className="testimonial-quote-text">“{t.quote}”</p>
                <div className="testimonial-author-row">
                  <div className="testimonial-author-info">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="testimonial-avatar"
                    />
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">
                        {t.role} — {t.city} ({t.property})
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '2px', color: 'var(--accent-gold)' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="var(--accent-gold)" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 8. FINAL CTA */}
      <section className="home-final-cta" id="home-final-cta-section">
        <div className="final-cta-container">
          <span className="final-cta-tag">Private Acquisitions</span>
          <h2 className="final-cta-heading">
            YOUR NEXT ADDRESS<br />
            STARTS HERE.
          </h2>
          <p className="final-cta-subtitle">
            Let's find a space that feels right. Connect with our senior private estates director for bespoke representation.
          </p>
          <div className="hero-cta-group">
            <Link to="/properties" className="luxury-btn-gold" style={{ textDecoration: 'none' }}>
              <span>Explore Properties</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/schedule-visit"
              className="luxury-btn-outline"
              style={{
                color: '#FAF6EC',
                borderColor: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
              }}
            >
              <Calendar size={16} />
              <span>Schedule a Visit</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
