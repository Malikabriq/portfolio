import { experience } from '../data';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="experience__orb" />
      <div className="container">
        <div className="experience__header">
          <span className="section-tag">Trajectory</span>
          <h2 className="section-title">
            My <span className="gradient-text">Professional Journey</span>
          </h2>
          <p className="section-subtitle">
            A timeline of my growth and contributions to the Python and AI ecosystem.
          </p>
        </div>

        <div className="experience__timeline">
          {experience.map((exp, index) => (
            <div key={index} className="experience__item">
              <div className="experience__marker" />
              <div className="experience__card glass-card">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">{exp.company}</p>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <p className="experience__description">{exp.description}</p>
                <ul className="experience__highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
