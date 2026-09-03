import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Award, Shield, Sparkles, HeartHandshake, Compass } from 'lucide-react';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { animateCounter } from '../../animations/gsapAnimations';
import './About.css';

export const About: React.FC = () => {
  const statRef1 = useRef<HTMLDivElement>(null);
  const statRef2 = useRef<HTMLDivElement>(null);
  const statRef3 = useRef<HTMLDivElement>(null);
  const statRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (statRef1.current && statRef2.current && statRef3.current && statRef4.current) {
      animateCounter(statRef1.current, 15, '', '+ Years', 2);
      animateCounter(statRef2.current, 14000, '₹ ', ' Cr+', 2.5);
      animateCounter(statRef3.current, 1800, '', '+ Patrons', 2.2);
      animateCounter(statRef4.current, 98, '', '% Satisfaction', 2);
    }
  }, []);

  const leadershipTeam = [
    {
      name: 'Aditya Singhania',
      role: 'Managing Partner & Co-Founder',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85',
      bio: '22+ years structuring landmark ultra-prime residential trades across South Mumbai and London.',
    },
    {
      name: 'Rohit Mathur',
      role: 'Director — Heritage & Diplomatic Enclaves',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=85',
      bio: 'Former architectural preservation consultant overseeing Lutyens Delhi and civil restoration projects.',
    },
    {
      name: 'Nandita Rao',
      role: 'Head of Architectural Advisory & South India',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=85',
      bio: 'Pioneering biophilic spatial design and green luxury developments in Bangalore and Hyderabad.',
    },
    {
      name: 'Kavita Reddy',
      role: 'Partner — Private Client Acquisitions',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=85',
      bio: 'Counseling family offices, tech founders, and industrial dynasties on blue-chip property wealth.',
    },
  ];

  const values = [
    {
      num: '01',
      title: 'Integrity',
      desc: 'Absolute confidentiality and unwavering ethical transparency in every transaction, appraisal, and advisory session.',
    },
    {
      num: '02',
      title: 'Quality',
      desc: 'We decline 92% of properties presented to us, admitting only homes with impeccable architectural merit.',
    },
    {
      num: '03',
      title: 'Innovation',
      desc: 'Harnessing generative spatial modeling, biometric walkthroughs, and bespoke private digital portfolios.',
    },
    {
      num: '04',
      title: 'Trust',
      desc: 'Serving multiple generations of India’s foremost industrial families, artists, and global citizens.',
    },
    {
      num: '05',
      title: 'Design',
      desc: 'A conviction that living spaces must nourish the soul, honor their native ecology, and stand the test of centuries.',
    },
  ];

  const milestones = [
    {
      year: '2011',
      title: 'The Foundation in South Mumbai',
      desc: 'Founded as a boutique advisory for South Mumbai’s historic Art Deco and sea-facing heritage apartments.',
    },
    {
      year: '2016',
      title: 'Expansion into Delhi’s Lutyens Zone',
      desc: 'Established our capital presence on Prithviraj Road, brokering landmark diplomatic compound trades.',
    },
    {
      year: '2020',
      title: 'Pioneering Biophilic Luxury',
      desc: 'Launched the South India practice in Bangalore, curating green vertical villas with net-zero certifications.',
    },
    {
      year: '2024',
      title: 'Cross-Capital Private Wealth Desk',
      desc: 'Exceeded ₹ 14,000 Cr in lifetime advisory volume across Mumbai, Delhi, Bangalore, Hyderabad, Pune, and Patna.',
    },
    {
      year: '2026',
      title: 'The Modern Era of MAISON',
      desc: 'Setting the benchmark for bespoke private representations and limited edition architectural monographs.',
    },
  ];

  return (
    <div className="about-page" id="about-us-page">
      {/* 1. HERO */}
      <section className="about-hero-section">
        <span className="about-hero-tag">The Philosophy of MAISON</span>
        <h1 className="about-hero-headline">
          WE CREATE<br />
          SPACES WORTH<br />
          COMING HOME TO.
        </h1>
        <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
          Founded on an obsession with architectural craftsmanship, privacy, and geographic rarity.
        </p>
      </section>

      {/* 2. OUR STORY */}
      <section className="about-story-section">
        <div className="story-media-wrap">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
            alt="MAISON Architectural Heritage"
            className="story-img-large"
          />
          <div className="story-floating-badge">
            <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
              Established 2011
            </span>
            <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem' }}>
              15 Years of Quiet Luxury
            </span>
          </div>
        </div>

        <div className="story-text-col">
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.25em', color: 'var(--accent-gold)', fontWeight: 600 }}>
            Our Provenance
          </span>
          <h2 className="story-lead">
            We began with a singular premise: that true luxury is not defined by excess, but by intention, proportion, and permanence.
          </h2>
          <p className="story-paragraph">
            Over the past fifteen years, MAISON has evolved from an intimate South Mumbai private advisory into India’s most revered architectural real estate house. We operate not as mass transactional brokers, but as custodians of extraordinary dwellings.
          </p>
          <p className="story-paragraph">
            Every estate in our catalog undergoes rigorous architectural vetting, legal title forensics, and environmental assessment. Whether representing a 60-year-old banyan courtyard in Sadashivanagar or a cantilevered sky villa in Worli, we honor the soul of every property we steward.
          </p>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="mission-vision-section">
        <div className="mission-vision-container">
          <div className="mv-card">
            <span className="mv-tag">Our Mission</span>
            <h3 className="mv-title">Elevating the Art of Living</h3>
            <p className="mv-desc">
              To connect discerning families with residences that embody architectural genius, environmental stewardship, and generational emotional permanence. We protect our clients’ privacy with rigorous discretion and intellectual honesty.
            </p>
          </div>

          <div className="mv-card">
            <span className="mv-tag">Our Vision</span>
            <h3 className="mv-title">Curating Future Heritage</h3>
            <p className="mv-desc">
              To redefine luxury living across South Asia by championing architects and patrons who build with sustainable stone, local craft, and timeless geometries that outlast trends and inspire generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE STATS */}
      <section className="home-stats-section" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number" ref={statRef1}>
              15+
            </div>
            <div className="stat-label">Years of Heritage</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={statRef2}>
              ₹ 14,000 Cr+
            </div>
            <div className="stat-label">Advisory Portfolio</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={statRef3}>
              1,800+
            </div>
            <div className="stat-label">Private Patrons</div>
          </div>
          <div className="stat-item">
            <div className="stat-number" ref={statRef4}>
              98%
            </div>
            <div className="stat-label">Client Retention</div>
          </div>
        </div>
      </section>

      {/* 5. VALUES */}
      <section className="about-values-section">
        <SectionTitle
          tag="Core Principles"
          title="The Tenets We Honor"
          subtitle="Our decisions are guided by five fundamental pillars that define every relationship and property we touch."
          align="center"
        />

        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <span className="value-number">{v.num}</span>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. LEADERSHIP */}
      <section className="about-leadership-section">
        <div className="leadership-container">
          <SectionTitle
            tag="Guiding Partners"
            title="Executive Leadership"
            subtitle="Meet the partners steering private acquisitions, legal provenance, and spatial architecture."
            theme="dark"
          />

          <div className="leadership-grid">
            {leadershipTeam.map((leader, i) => (
              <div key={i} className="leader-card">
                <div className="leader-media">
                  <img src={leader.image} alt={leader.name} className="leader-img" loading="lazy" />
                </div>
                <h3 className="leader-name">{leader.name}</h3>
                <div className="leader-role">{leader.role}</div>
                <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem', lineHeight: '1.6' }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TIMELINE JOURNEY */}
      <section className="about-timeline-section">
        <SectionTitle
          tag="Our Evolution"
          title="The Milestones"
          subtitle="A chronicle of fifteen years establishing architectural benchmarks across India."
          align="center"
        />

        <div className="timeline-track">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className={`timeline-node ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-year">{m.year}</div>
                <h3 className="timeline-heading">{m.title}</h3>
                <p className="timeline-desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="home-final-cta">
        <div className="final-cta-container">
          <span className="final-cta-tag">Begin the Conversation</span>
          <h2 className="final-cta-heading">
            LET US CURATE YOUR NEXT HORIZON.
          </h2>
          <p className="final-cta-subtitle">
            Speak directly with our senior managing partners to explore confidential, off-market opportunities.
          </p>
          <div className="hero-cta-group">
            <Link to="/contact" className="luxury-btn-gold" style={{ textDecoration: 'none' }}>
              <span>Contact Advisory</span>
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
