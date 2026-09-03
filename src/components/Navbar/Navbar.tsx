import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowUpRight,
  Calendar,
  Heart,
  Instagram,
  Facebook,
  Linkedin,
} from 'lucide-react';
import { gsap } from 'gsap';
import { getLenis } from '../../animations/scrollAnimations';
import { prefersReducedMotion } from '../../animations/gsapAnimations';
import './Navbar.css';

interface NavbarProps {
  favoritesCount?: number;
}

const MOBILE_NAV_ITEMS = [
  { number: '01', label: 'Home', to: '/' },
  { number: '02', label: 'Properties', to: '/properties' },
  { number: '03', label: 'Projects', to: '/projects' },
  { number: '04', label: 'Locations', to: '/locations' },
  { number: '05', label: 'About Us', to: '/about' },
  { number: '06', label: 'Contact', to: '/contact' },
  { number: '07', label: 'Schedule a Visit', to: '/schedule-visit' },
];

export const Navbar: React.FC<NavbarProps> = ({ favoritesCount = 0 }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const drawerRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const footerRef = useRef<HTMLDivElement>(null);

  // Certain pages like Home or PropertyDetail have dark full-bleed hero banners
  const isDarkHeroPage = location.pathname === '/' || location.pathname.startsWith('/properties/');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Keep navbar visible across scroll positions
      setIsHidden(false);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock background scroll when mobile menu is open, pause Lenis
  useEffect(() => {
    const lenis = getLenis();
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = '';
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = '';
      lenis?.start();
    };
  }, [mobileMenuOpen]);

  // GSAP Menu Animation on Open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    // Reset internal scroll position to top
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
      scrollContainerRef.current.style.overflowY = 'auto';
      scrollContainerRef.current.style.touchAction = 'pan-y';
    }

    if (prefersReducedMotion() || !drawerRef.current) {
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Guarantee that GSAP clears clipPath and does not leave the scroll container constrained
        if (drawerRef.current) {
          drawerRef.current.style.clipPath = '';
        }
        if (scrollContainerRef.current) {
          scrollContainerRef.current.style.overflowY = 'auto';
          scrollContainerRef.current.style.touchAction = 'pan-y';
        }
      },
    });

    tl.fromTo(
      drawerRef.current,
      { opacity: 0, clipPath: 'inset(0% 0% 100% 0%)' },
      { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.42, ease: 'power3.inOut' }
    );

    const validItems = navItemsRef.current.filter(Boolean);
    if (validItems.length > 0) {
      tl.fromTo(
        validItems,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.04, ease: 'power3.out' },
        '-=0.18'
      );
    }

    if (footerRef.current) {
      tl.fromTo(
        footerRef.current,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
        '-=0.15'
      );
    }

    return () => {
      tl.kill();
    };
  }, [mobileMenuOpen]);

  const handleCloseMenu = useCallback(() => {
    if (prefersReducedMotion() || !drawerRef.current) {
      setMobileMenuOpen(false);
      return;
    }

    gsap.to(drawerRef.current, {
      opacity: 0,
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 0.28,
      ease: 'power3.in',
      onComplete: () => {
        setMobileMenuOpen(false);
        if (drawerRef.current) {
          drawerRef.current.style.clipPath = '';
        }
      },
    });
  }, []);

  return (
    <>
      <header
        className={`site-navbar mobile-navbar ${isScrolled ? 'navbar-scrolled' : ''} ${
          !isDarkHeroPage && !isScrolled ? 'navbar-light-bg' : ''
        } ${isHidden ? 'navbar-hidden' : ''}`}
        id="main-navigation-bar"
      >
        <div className="navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="navbar-brand" aria-label="MAISON Luxury Real Estate">
            <span className="brand-title">MAISON</span>
            <span className="brand-subtitle">Private Estates</span>
          </Link>

          {/* Desktop Navigation (6 links) */}
          <nav className="navbar-nav" aria-label="Main Navigation">
            <ul className="navbar-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? 'is-active' : ''}`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/properties"
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? 'is-active' : ''}`
                  }
                >
                  Properties
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? 'is-active' : ''}`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/locations"
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? 'is-active' : ''}`
                  }
                >
                  Locations
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? 'is-active' : ''}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `nav-item-link ${isActive ? 'is-active' : ''}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Desktop Actions & CTA */}
          <div className="navbar-actions">
            {favoritesCount > 0 && (
              <Link
                to="/properties?favorites=true"
                className="navbar-favorites-link"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: isDarkHeroPage || isScrolled ? '#FAF6EC' : '#171717',
                  textDecoration: 'none',
                }}
                title="View saved residences"
              >
                <Heart size={16} fill="#DC2626" color="#DC2626" />
                <span>({favoritesCount})</span>
              </Link>
            )}

            <Link to="/schedule-visit" className="navbar-cta-btn">
              <Calendar size={14} />
              <span>Schedule a Visit</span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <div
        ref={drawerRef}
        className={`mobile-nav-drawer mobile-menu ${mobileMenuOpen ? 'is-open' : ''}`}
        id="mobile-navigation-drawer"
        aria-hidden={!mobileMenuOpen}
        data-lenis-prevent
        style={{ pointerEvents: mobileMenuOpen ? 'auto' : 'none' }}
      >
        <div className="mobile-drawer-header mobile-menu-header">
          <Link to="/" className="navbar-brand" onClick={handleCloseMenu}>
            <span className="brand-title">MAISON</span>
            <span className="brand-subtitle">Private Estates</span>
          </Link>
          <button
            type="button"
            className="mobile-menu-close-btn"
            onClick={handleCloseMenu}
            aria-label="Close Navigation Menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Dedicated Internal Scroll Wrapper */}
        <div
          className="mobile-menu-scroll"
          ref={scrollContainerRef}
          data-lenis-prevent
        >
          <nav className="mobile-menu-nav" aria-label="Mobile Menu Navigation">
            <ul className="mobile-nav-links">
              {MOBILE_NAV_ITEMS.map((item, idx) => (
                <li
                  key={item.to}
                  className="mobile-nav-item"
                  ref={(el) => (navItemsRef.current[idx] = el)}
                >
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => (isActive ? 'is-active' : '')}
                    onClick={handleCloseMenu}
                    end={item.to === '/'}
                  >
                    <div className="mobile-nav-item-left">
                      <span className="mobile-nav-num">{item.number}</span>
                      <span className="mobile-nav-title">{item.label}</span>
                    </div>
                    <ArrowUpRight size={20} className="mobile-nav-arrow" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Luxury Drawer Footer */}
          <div className="mobile-drawer-footer mobile-menu-footer" ref={footerRef}>
            <Link
              to="/schedule-visit"
              className="luxury-btn-gold mobile-schedule-btn"
              onClick={handleCloseMenu}
            >
              <Calendar size={15} />
              <span>Schedule a Visit</span>
            </Link>

            <div className="mobile-menu-badge">
              <span className="mobile-menu-est">EST. 2009 &bull; LUXURY REAL ESTATE</span>
              <span className="mobile-menu-cities">Mumbai &middot; Delhi &middot; Bangalore &middot; Pune</span>
            </div>

            <div className="mobile-contact-info">
              <p>Private Advisory: +91 98201 44882</p>
              <p>concierge@maison-estates.com</p>
              <p>Worli Sea Face, Mumbai &bull; Golf Links, New Delhi</p>
            </div>

            <div className="mobile-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="mobile-social-link"
                aria-label="Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="mobile-social-link"
                aria-label="Facebook"
              >
                <Facebook size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="mobile-social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
