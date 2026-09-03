import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  tag,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
}) => {
  return (
    <div
      className={`section-title-wrap section-title-${align} ${className}`}
      data-theme={theme}
    >
      {tag && <div className="section-tag">{tag}</div>}
      <h2 className={`section-heading ${theme === 'dark' ? 'dark-text' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${theme === 'dark' ? 'dark-text' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
