import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, MapPin, Calendar, Building, ArrowRight } from 'lucide-react';
import { PROJECTS, Project } from '../../data/projects';
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';
import './Projects.css';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Ongoing' | 'Upcoming' | 'Completed'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (activeCategory === 'All') return true;
    return proj.status === activeCategory;
  });

  return (
    <div className="projects-page" id="projects-directory-page">
      {/* 1. HERO */}
      <section className="projects-hero-section">
        <h1 className="projects-hero-title">Architectural Developments</h1>
        <p className="projects-hero-sub">
          Iconic high-density sky towers, low-density private compounds, and master-planned waterfront developments in partnership with visionary architects.
        </p>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <div className="projects-filter-bar">
        <div className="projects-tabs">
          {(['All', 'Ongoing', 'Upcoming', 'Completed'] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              className={`project-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat} ({cat === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.status === cat).length})
            </button>
          ))}
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Showing {filteredProjects.length} Master-Planned Developments
        </div>
      </div>

      {/* 3. PROJECTS GRID */}
      <section className="projects-grid-section">
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* 4. MASTERPLAN MODAL */}
      {selectedProject && (
        <div
          className="masterplan-modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="masterplan-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="close-modal-btn"
              onClick={() => setSelectedProject(null)}
              aria-label="Close Project Masterplan"
            >
              <X size={24} />
            </button>

            <img
              src={selectedProject.heroImage}
              alt={selectedProject.name}
              className="modal-img-banner"
            />

            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '0.4rem' }}>
              {selectedProject.developer}
            </div>

            <h2 className="modal-title">{selectedProject.name}</h2>

            <div className="modal-meta-row">
              <div>
                <strong>Location:</strong> {selectedProject.location}
              </div>
              <div>
                <strong>Architect:</strong> {selectedProject.architect}
              </div>
              <div>
                <strong>Possession:</strong> {selectedProject.possession}
              </div>
              <div>
                <strong>From:</strong> <span style={{ color: 'var(--accent-gold)' }}>{selectedProject.startingPrice}</span>
              </div>
            </div>

            <p className="modal-desc">{selectedProject.description}</p>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '1rem' }}>
              Development Highlights
            </h3>

            <div className="modal-highlights-grid">
              {selectedProject.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <Link
                to={`/schedule-visit`}
                className="luxury-btn-gold"
                style={{ textDecoration: 'none' }}
                onClick={() => setSelectedProject(null)}
              >
                <Calendar size={16} />
                <span>Request Private Masterplan Presentation</span>
              </Link>
              <button
                type="button"
                className="luxury-btn-outline"
                onClick={() => setSelectedProject(null)}
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
