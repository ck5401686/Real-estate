import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Building } from 'lucide-react';
import { Project } from '../../data/projects';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Ongoing':
        return 'status-ongoing';
      case 'Upcoming':
        return 'status-upcoming';
      case 'Completed':
        return 'status-completed';
      default:
        return 'status-ongoing';
    }
  };

  return (
    <article className="project-card" id={`project-card-${project.id}`}>
      <div className="project-card-media">
        <img
          src={project.heroImage}
          alt={project.name}
          className="project-card-img"
          loading="lazy"
        />

        <div className={`project-card-status-badge ${getStatusClass(project.status)}`}>
          {project.status}
        </div>

        <div className="project-card-possession-pill">
          {project.possession}
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-card-header">
          <div className="project-card-developer">{project.developer}</div>
          <h3 className="project-card-title">{project.name}</h3>
          <div className="project-card-location">
            <MapPin size={14} color="var(--accent-gold)" />
            <span>{project.location}</span>
          </div>
        </div>

        <div className="project-card-meta-grid">
          <div className="project-meta-item">
            <span className="project-meta-label">Starting From</span>
            <span className="project-meta-val" style={{ color: 'var(--accent-gold)' }}>
              {project.startingPrice}
            </span>
          </div>
          <div className="project-meta-item">
            <span className="project-meta-label">Configurations</span>
            <span className="project-meta-val">{project.configuration}</span>
          </div>
        </div>

        <div className="project-card-action">
          {onSelectProject ? (
            <button
              type="button"
              onClick={() => onSelectProject(project)}
              className="luxury-btn-outline"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.75rem', width: '100%' }}
            >
              <span>Explore Masterplan</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <Link
              to={`/projects`}
              className="luxury-btn-outline"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.75rem', width: '100%', textDecoration: 'none' }}
            >
              <span>Explore Masterplan</span>
              <ArrowRight size={14} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};
