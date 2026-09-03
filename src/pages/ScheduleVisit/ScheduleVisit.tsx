import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Building,
  Video,
  Eye,
  CheckCircle2,
  ShieldCheck,
  Car,
  FileCheck,
} from 'lucide-react';
import { PROPERTIES } from '../../data/properties';
import './ScheduleVisit.css';

export const ScheduleVisit: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedProp = searchParams.get('property') || '';

  const [selectedPropertyId, setSelectedPropertyId] = useState(preselectedProp);
  const [visitDate, setVisitDate] = useState('');
  const [visitTime, setVisitTime] = useState('11:00 AM');
  const [visitMode, setVisitMode] = useState<'in-person' | 'virtual'>('in-person');
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [chauffeurRequested, setChauffeurRequested] = useState(false);
  const [specialNotes, setSpecialNotes] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (preselectedProp) {
      setSelectedPropertyId(preselectedProp);
    }
  }, [preselectedProp]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientEmail && visitDate) {
      setIsBooked(true);
    }
  };

  const selectedPropData = PROPERTIES.find((p) => p.id === selectedPropertyId);

  return (
    <div className="schedule-page" id="schedule-visit-page">
      {/* 1. HERO */}
      <section className="schedule-hero-section">
        <h1 className="schedule-hero-title">Private Consultation & Walkthrough</h1>
        <p className="schedule-hero-sub">
          Arrange an exclusive viewing accompanied by our senior partners or request an immersive 4K virtual architectural walkthrough.
        </p>
      </section>

      {/* 2. MAIN CONTENT WRAP */}
      <div className="schedule-content-wrap">
        {/* Form Card */}
        <div className="schedule-form-card">
          {isBooked ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <CheckCircle2
                size={52}
                color="var(--accent-gold)"
                style={{ margin: '0 auto 1.5rem' }}
              />
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.25rem',
                  marginBottom: '1rem',
                }}
              >
                Appointment Requested
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>
                Thank you, {clientName}. Your viewing request for{' '}
                <strong>{selectedPropData ? selectedPropData.title : 'Selected Residence'}</strong> on{' '}
                <strong>
                  {visitDate} at {visitTime} ({visitMode === 'in-person' ? 'In-Person Private Tour' : '4K Virtual Tour'})
                </strong>{' '}
                has been received. Our Concierge Desk will confirm gate clearance and security protocols via telephone.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link to="/properties" className="luxury-btn-primary">
                  <span>Explore More Residences</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsBooked(false)}
                  className="luxury-btn-outline"
                >
                  Schedule Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.85rem',
                  marginBottom: '1.5rem',
                }}
              >
                Appointment Specifications
              </h2>

              {/* Visit Mode Toggle */}
              <div className="mode-toggle-group">
                <button
                  type="button"
                  className={`mode-toggle-btn ${visitMode === 'in-person' ? 'active' : ''}`}
                  onClick={() => setVisitMode('in-person')}
                >
                  <Eye size={16} />
                  <span>In-Person Walkthrough</span>
                </button>
                <button
                  type="button"
                  className={`mode-toggle-btn ${visitMode === 'virtual' ? 'active' : ''}`}
                  onClick={() => setVisitMode('virtual')}
                >
                  <Video size={16} />
                  <span>Virtual 4K Live Stream</span>
                </button>
              </div>

              {/* Property Selection */}
              <div style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="prop-select">
                  Select Estate / Residence *
                </label>
                <select
                  id="prop-select"
                  value={selectedPropertyId}
                  onChange={(e) => setSelectedPropertyId(e.target.value)}
                  className="contact-input"
                  required
                >
                  <option value="">Choose an Architectural Estate...</option>
                  {PROPERTIES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} — {p.location} ({p.price})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Grid */}
              <div className="form-grid-fields">
                <div>
                  <label className="form-label" htmlFor="visit-date">
                    Requested Date *
                  </label>
                  <input
                    id="visit-date"
                    type="date"
                    required
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="contact-input"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="visit-time">
                    Preferred Time Slot *
                  </label>
                  <select
                    id="visit-time"
                    value={visitTime}
                    onChange={(e) => setVisitTime(e.target.value)}
                    className="contact-input"
                  >
                    <option value="10:00 AM">10:00 AM (Morning Sunlight)</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:30 PM">02:30 PM</option>
                    <option value="04:30 PM">04:30 PM</option>
                    <option value="05:30 PM">05:30 PM (Golden Hour Sunset)</option>
                  </select>
                </div>
              </div>

              {/* Client Info Grid */}
              <div className="form-grid-fields">
                <div>
                  <label className="form-label" htmlFor="client-name">
                    Full Name *
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    required
                    placeholder="Lord / Lady / Dr. / Mr. / Ms."
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label className="form-label" htmlFor="client-email">
                    Private Email *
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    required
                    placeholder="patron@domain.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="contact-input"
                  />
                </div>

                <div className="full-field">
                  <label className="form-label" htmlFor="client-phone">
                    Direct Phone / WhatsApp *
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    required
                    placeholder="+91 ..."
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="contact-input"
                  />
                </div>

                {visitMode === 'in-person' && (
                  <div className="full-field" style={{ margin: '0.5rem 0' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontSize: '0.85rem' }}>
                      <input
                        type="checkbox"
                        checked={chauffeurRequested}
                        onChange={(e) => setChauffeurRequested(e.target.checked)}
                        style={{ accentColor: 'var(--accent-gold)', width: '16px', height: '16px' }}
                      />
                      <span>Request complimentary private airport or residence chauffeur transfer</span>
                    </label>
                  </div>
                )}

                <div className="full-field">
                  <label className="form-label" htmlFor="client-notes">
                    Security or Architectural Specifications
                  </label>
                  <textarea
                    id="client-notes"
                    rows={3}
                    placeholder="E.g., Number of guests attending, specific orientation questions, NDA requirements..."
                    value={specialNotes}
                    onChange={(e) => setSpecialNotes(e.target.value)}
                    className="contact-textarea"
                  />
                </div>
              </div>

              <button type="submit" className="luxury-btn-gold" style={{ width: '100%', marginTop: '1rem' }}>
                <Calendar size={16} />
                <span>Confirm Appointment Reservation</span>
              </button>
            </form>
          )}
        </div>

        {/* Right Protocol Card */}
        <div className="schedule-protocol-card">
          <div className="protocol-block">
            <h3 className="protocol-title">Private Viewing Protocol</h3>
            <div className="protocol-list">
              <div className="protocol-item">
                <ShieldCheck size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>All estates require prior identity verification and confidentiality agreement signing.</span>
              </div>
              <div className="protocol-item">
                <User size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>You will be escorted exclusively by an executive partner and the property curator.</span>
              </div>
              <div className="protocol-item">
                <Car size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Private secure basement parking and valet access will be provisioned prior to arrival.</span>
              </div>
              <div className="protocol-item">
                <FileCheck size={20} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Comprehensive physical architectural monographs and title diligence binders are provided on-site.</span>
              </div>
            </div>
          </div>

          {selectedPropData && (
            <div className="protocol-block" style={{ backgroundColor: 'var(--color-white)' }}>
              <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent-gold)', fontWeight: 600, display: 'block', marginBottom: '0.5rem' }}>
                Estate Selected
              </span>
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '0.25rem' }}>
                {selectedPropData.title}
              </h4>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                {selectedPropData.location} • {selectedPropData.price}
              </p>
              <img
                src={selectedPropData.image}
                alt={selectedPropData.title}
                style={{ width: '100%', height: '140px', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
