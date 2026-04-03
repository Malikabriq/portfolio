import { useState } from 'react';
import { projects } from '../data';
import './Projects.css';

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="projects__orb" />
      <div className="container">
        <div className="projects__header">
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of real-world AI applications and backend systems — each built to solve genuine problems.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className={`project-card glass-card ${hovered === project.id ? 'project-card--hovered' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--accent': project.accent }}
            >
              {/* Top accent bar */}
              <div className="project-card__bar" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

              <div className="project-card__image-container">
                <img src={`${import.meta.env.BASE_URL || '/'}${project.image}`} alt={project.name} className="project-card__img" />
              </div>

              <div className="project-card__inner">
                <div className="project-card__top">
                  <span className="project-card__emoji">{project.emoji}</span>
                  <div className="project-card__links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__link"
                      aria-label="View on GitHub"
                      onClick={e => e.stopPropagation()}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    {project.stars > 0 && (
                      <span className="project-card__stars">
                        ⭐ {project.stars}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="project-card__title">{project.name}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map(t => (
                    <span key={t} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__cta"
                >
                  View Project
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects__footer">
          <p>Want to see more?</p>
          <a href="https://github.com/Malikabriq?tab=repositories" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            All 17+ Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
