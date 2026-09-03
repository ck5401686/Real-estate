import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Linkedin, Check } from 'lucide-react';
import './Footer.css';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="site-footer" id="site-global-footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="footer-logo">
              <span className="brand-title">MAISON</span>
              <span className="brand-subtitle" style={{ display: 'block' }}>
                Private Estates
              </span>
            </Link>
            <p className="footer-tagline">
              Curating architectural triumphs, private sanctuaries, and heritage estates for discerning individuals across India’s premier capitals.
            </p>
            <div className="footer-social-row">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="Follow MAISON on Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="Follow MAISON on Facebook"
              >
                <Facebook size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon"
                aria-label="Follow MAISON on LinkedIn"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="footer-link">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/locations" className="footer-link">
                  Locations
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Advisory Headquarters</h4>
            <div className="footer-contact-item">
              <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>Tower One, Worli Sea Face, Mumbai 400030</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <a href="tel:+919820144882">+91 98201 44882</a>
            </div>
            <div className="footer-contact-item">
              <Mail size={16} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <a href="mailto:concierge@maison-estates.com">concierge@maison-estates.com</a>
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <Link to="/schedule-visit" className="footer-link" style={{ color: 'var(--accent-gold)' }}>
                Book a Private Consultation →
              </Link>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Private Dispatch</h4>
            <p className="footer-newsletter-text">
              Receive confidential off-market invitations and quarterly prime market intelligence directly to your inbox.
            </p>
            {subscribed ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--accent-gold)',
                  fontSize: '0.85rem',
                  padding: '0.85rem 0',
                }}
              >
                <Check size={16} />
                <span>Thank you. You are added to the Private Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your private email..."
                  required
                  className="footer-newsletter-input"
                  aria-label="Email Address for Newsletter"
                />
                <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 MAISON Luxury Real Estate. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Terms & Conditions</Link>
            <Link to="/contact">Disclaimers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
