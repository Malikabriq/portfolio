import { useState } from 'react';
import { profile } from '../data';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const contactLinks = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      ),
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: '#6366f1',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
      ),
      label: 'WhatsApp',
      value: profile.whatsapp,
      href: `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}`,
      color: '#25d366',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
      ),
      label: 'GitHub',
      value: '@Malikabriq',
      href: profile.github,
      color: '#8b9cf8',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      ),
      label: 'LinkedIn',
      value: 'muhammad-abriq',
      href: profile.linkedin,
      color: '#06b6d4',
    },
  ];

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailClick = (e) => {
    // If it's a mobile device or the user doesn't have a mail client, 
    // copying to clipboard is a great fallback.
    copyEmail();
    // The default behavior of the mailto link will still trigger.
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__orb contact__orb--1" />
      <div className="contact__orb contact__orb--2" />
      <div className="container">
        <div className="contact__inner">
          <div className="contact__left">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">
              Let's <span className="gradient-text">work together</span>
            </h2>
            <p className="contact__text">
              Whether you have a project in mind, need a Python/AI engineer, or just want to say hello — my inbox is always open. I'll get back to you as fast as possible.
            </p>

            <div className="contact__links">
              {contactLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === 'WhatsApp' || link.label === 'GitHub' || link.label === 'LinkedIn' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="contact__link glass-card"
                  style={{ '--link-color': link.color }}
                  onClick={link.label === 'Email' ? handleEmailClick : undefined}
                >
                  <span className="contact__link-icon" style={{ color: link.color }}>
                    {link.icon}
                  </span>
                  <div className="contact__link-info">
                    <span className="contact__link-label">{link.label}</span>
                    <span className="contact__link-value">{link.value}</span>
                  </div>
                  <svg className="contact__link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact__right">
            <div className="contact__card glass-card">
              <div className="contact__card-header">
                <span className="contact__card-dot contact__card-dot--red" />
                <span className="contact__card-dot contact__card-dot--yellow" />
                <span className="contact__card-dot contact__card-dot--green" />
                <span className="contact__card-label">quick_contact.py</span>
              </div>
              <div className="contact__card-body">
                <pre className="contact__code">{`# Reach out directly:
email = "${profile.email}"
whatsapp = "${profile.whatsapp}"

linkedin = (
  "linkedin.com/in/"
  "muhammad-abriq-b119023b7"
)

github = "github.com/Malikabriq"

# Response time:
# Usually within 24 hours ⚡`}</pre>
              </div>
              <div className="contact__card-footer">
                <button className={`btn ${copied ? 'btn-primary' : 'btn-primary'}`} onClick={copyEmail}>
                  {copied ? (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                      Copy Email
                    </>
                  )}
                </button>
                <a 
                  href={`mailto:${profile.email}`} 
                  className="btn btn-outline"
                  onClick={handleEmailClick}
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
