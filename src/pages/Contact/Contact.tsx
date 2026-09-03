import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<'mumbai' | 'delhi' | 'bangalore'>('mumbai');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const offices = {
    mumbai: {
      title: 'Mumbai Advisory Flagship',
      address: 'Tower One, Level 38, Worli Sea Face, Mumbai 400030',
      phone: '+91 98201 44882',
      hours: 'Mon – Sat: 09:30 AM – 07:30 PM IST',
    },
    delhi: {
      title: 'Delhi Diplomatic Bureau',
      address: '14 Prithviraj Road, Lutyens Bungalow Zone, New Delhi 110011',
      phone: '+91 98110 55432',
      hours: 'Mon – Sat: 10:00 AM – 07:00 PM IST',
    },
    bangalore: {
      title: 'Bangalore Tech & Estates Center',
      address: 'Sankey Chambers, Sadashivanagar, Bangalore 560080',
      phone: '+91 99002 88471',
      hours: 'Mon – Fri: 09:30 AM – 06:30 PM IST',
    },
  };

  return (
    <div className="contact-page" id="contact-advisory-page">
      {/* 1. HERO */}
      <section className="contact-hero-section">
        <h1 className="contact-hero-title">Private Inquiries</h1>
        <p className="contact-hero-sub">
          Connect with our private acquisitions desk for confidential representation, appraisals, and off-market portfolio access.
        </p>
      </section>

      {/* 2. MAIN GRID */}
      <section className="contact-main-grid">
        {/* Contact Form */}
        <div className="contact-form-wrap">
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle size={48} color="var(--accent-gold)" style={{ margin: '0 auto 1.5rem' }} />
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.2rem', marginBottom: '1rem' }}>
                Inquiry Confirmed
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                Thank you, {formData.name}. Your correspondence has been routed to our senior advisory team. You will be contacted confidentially within four business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', city: 'Mumbai', message: '' });
                }}
                className="luxury-btn-primary"
              >
                <span>Submit Another Inquiry</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="form-heading">Initiate Correspondence</h2>
              <p className="form-sub">
                Please complete the form below. All client information is held in strict fiduciary confidence.
              </p>

              <div className="form-grid-fields">
                <div>
                  <label htmlFor="contact-name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Lord / Lady / Dr. / Mr. / Ms."
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="private@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className="form-label">
                    Telephone / WhatsApp
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label htmlFor="contact-city" className="form-label">
                    Territory of Interest
                  </label>
                  <select
                    id="contact-city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="contact-input"
                  >
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Pune">Pune</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Patna">Patna</option>
                    <option value="Global">Cross-Capital / Confidential</option>
                  </select>
                </div>

                <div className="full-field">
                  <label htmlFor="contact-msg" className="form-label">
                    Inquiry Brief / Specific Requirements
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    placeholder="Detail desired locations, spatial requirements, or confidential listing inquiries..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="contact-textarea"
                  />
                </div>
              </div>

              <button type="submit" className="luxury-btn-gold" style={{ width: '100%' }}>
                <span>Transmit Private Inquiry</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Right Info & Map Representation */}
        <div className="contact-info-wrap">
          {/* Office Selector */}
          <div className="office-info-block">
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {(['mumbai', 'delhi', 'bangalore'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedOffice(key)}
                  style={{
                    padding: '0.4rem 0.85rem',
                    fontSize: '0.6875rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    background: selectedOffice === key ? 'var(--dark-primary)' : 'transparent',
                    color: selectedOffice === key ? '#FFFFFF' : 'var(--dark-primary)',
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                  }}
                >
                  {key}
                </button>
              ))}
            </div>

            <h3 className="office-block-title">{offices[selectedOffice].title}</h3>

            <div className="info-item-row">
              <MapPin size={18} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{offices[selectedOffice].address}</span>
            </div>

            <div className="info-item-row">
              <Phone size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <a href={`tel:${offices[selectedOffice].phone}`}>{offices[selectedOffice].phone}</a>
            </div>

            <div className="info-item-row">
              <Mail size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <a href="mailto:concierge@maison-estates.com">concierge@maison-estates.com</a>
            </div>

            <div className="info-item-row">
              <Clock size={18} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
              <span>{offices[selectedOffice].hours}</span>
            </div>
          </div>

          {/* Map View */}
          <div className="interactive-map-card">
            <div className="map-embed-view">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Architectural Map Preview"
                className="map-bg-mock"
              />
              <div className="map-pin-indicator">
                <MapPin size={32} />
                <span style={{ fontSize: '0.75rem', fontWeight: 600, marginTop: '0.25rem', letterSpacing: '0.1em' }}>
                  {offices[selectedOffice].title.split(' ')[0]}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>Valet & Private Porte-Cochère Available</span>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--accent-gold)', textDecoration: 'underline' }}
              >
                Open Navigation
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '0.75rem' }}>
              Digital Presence
            </span>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="luxury-btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
              >
                <Instagram size={14} />
                <span>Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="luxury-btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="luxury-btn-outline"
                style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}
              >
                <Facebook size={14} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
