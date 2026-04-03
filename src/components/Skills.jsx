import { useState } from 'react';
import { skills } from '../data';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="skills" className="section skills">
      <div className="skills__orb" />
      <div className="container">
        <div className="skills__header">
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Technical Stack</span>
          </h2>
          <p className="section-subtitle">
            A curated toolkit built for shipping intelligent, production-grade Python applications.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className={`skills__card glass-card ${activeCategory === skill.category ? 'skills__card--active' : ''}`}
              onMouseEnter={() => setActiveCategory(skill.category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{skill.icon}</span>
                <h3 className="skills__card-title">{skill.category}</h3>
              </div>
              <div className="skills__tags">
                {skill.items.map(item => (
                  <span key={item} className="skills__tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating tech logos strip */}
        <div className="skills__strip">
          <div className="skills__strip-track">
            {['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'Docker', 'Streamlit', 'OpenAI', 'Twilio', 'SQLAlchemy', 'Pydantic', 'NumPy', 'Pandas', 'Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'Docker', 'Streamlit', 'OpenAI', 'Twilio', 'SQLAlchemy', 'Pydantic', 'NumPy', 'Pandas'].map((t, i) => (
              <span key={i} className="skills__strip-item">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
