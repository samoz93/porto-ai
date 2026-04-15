import React from 'react';
import { createRoot } from 'react-dom/client';
import './contact.css';

const contactItems = [
  { label: 'Email', value: 'samehzooaa@gmail.com', icon: '✉' },
  { label: 'Location', value: 'İstanbul, Pendik', icon: '📍' },
  { label: 'LinkedIn', value: 'linkedin.com/in/samoz93', icon: '◉' },
];

function ContactApp() {
  return (
    <div className="contact-page">
      <header className="contact-header contact-section">
        <div className="contact-brand">Sameh Zoaa</div>
        <nav className="contact-nav">
          {['Home', 'About', 'Projects', 'Contact'].map((item) => (
            <a key={item} className={item === 'Contact' ? 'active' : ''} href={item === 'Home' ? '/' : item === 'About' ? '/about.html' : item === 'Contact' ? '/contact.html' : '#'}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main className="contact-section contact-layout">
        <section>
          <p className="contact-eyebrow">Inquiry & Consultation</p>
          <h1 className="contact-title">
            Let&apos;s bridge the
            <br />
            <em>clinical gap.</em>
          </h1>
          <p className="contact-intro">
            Whether you are seeking software consultancy or general practice insights, I offer a precision-driven
            approach to every project.
          </p>

          <div className="contact-details-list">
            {contactItems.map((item) => (
              <article className="contact-detail-item" key={item.label}>
                <div className="contact-icon-box" aria-hidden="true">
                  {item.icon}
                </div>
                <div>
                  <p className="contact-detail-label">{item.label}</p>
                  <p className="contact-detail-value">{item.value}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="contact-map-card" role="img" aria-label="Map showing current base at Pendik">
            <span>Current Base: Pendik</span>
          </div>
        </section>

        <section className="contact-form-panel">
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label>
              Full Name
              <input type="text" placeholder="Dr. John Doe / Eng. Jane Smith" />
            </label>

            <label>
              Email Address
              <input type="email" placeholder="name@organization.com" />
            </label>

            <label>
              Subject
              <select defaultValue="Software Consultancy">
                <option>Software Consultancy</option>
                <option>Clinical Workflow Advisory</option>
                <option>Technical Audit</option>
              </select>
            </label>

            <label>
              Message
              <textarea rows={6} placeholder="Please describe your clinical or technical requirements..." />
            </label>

            <button type="submit" className="contact-send-btn">
              Send Message <span aria-hidden="true">→</span>
            </button>

            <p className="contact-consent-note">
              By submitting this form, you acknowledge that communications regarding clinical cases must remain
              anonymized in compliance with medical data standards.
            </p>
          </form>
        </section>
      </main>

      <footer className="contact-section contact-footer">
        <div>
          <strong>Sameh Zoaa</strong>
          <p>© 2024 Sameh Zoaa. GP & Software Consultant. Built with clinical precision.</p>
        </div>
        <div className="contact-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Medical Registry</a>
          <a href="#">Consultation</a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactApp />
  </React.StrictMode>,
);
