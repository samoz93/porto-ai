import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const features = [
  {
    title: 'Clinical Logic',
    text: 'Applying diagnostic frameworks to software architecture. Every line of code is treated with the same meticulous care as a patient diagnosis.',
  },
  {
    title: 'Technical Depth',
    text: 'Full-stack expertise tailored for health-tech environments. Scalable, secure, and compliant software solutions for modern medicine.',
  },
  {
    title: 'Consultant Mindset',
    text: 'Bridging stakeholders from both medical registries and dev teams to create unified, high-performance digital tools.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="header section">
        <div className="brand">Sameh Zoca</div>
        <nav className="nav">
          {['Home', 'About', 'Projects', 'Contact'].map((item, idx) => (
            <a key={item} className={idx === 0 ? 'active' : ''} href="#">
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero section">
        <div className="hero-content">
          <p className="eyebrow">Precision Engineering & Medicine</p>
          <h1>
            Merging Clinical Precision
            <br />
            with <em>Software Innovation.</em>
          </h1>
          <p className="lead">
            A Pratisyen Hekim and Software Consultant bridging the gap between medicine and technology. Delivering robust digital solutions for complex healthcare ecosystems.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary">View Portfolio →</button>
            <button className="btn btn-link">Request Consultation</button>
          </div>
        </div>
        <div className="hero-card">
          <img
            src="https://images.unsplash.com/photo-1612531385446-f7b6b8f3b7c2?auto=format&fit=crop&w=700&q=80"
            alt="Consultant portrait"
          />
        </div>
      </section>

      <section className="section features">
        {features.map((feature) => (
          <article key={feature.title} className="feature-card">
            <div className="line" />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </article>
        ))}
      </section>

      <section className="section impact">
        <div className="impact-head">
          <div>
            <p className="eyebrow">Professional Trajectory</p>
            <h2>
              Operational impact at the
              <br />
              intersection of life and
              <br />
              logic.
            </h2>
          </div>
          <p>
            From the ER to the IDE, my work is defined by a commitment to system excellence and operational reliability.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card light">
            <span className="chip">Current Role</span>
            <h3>Ersoy Hospital</h3>
            <p>
              Practitioner physician integrating software workflows to optimize patient care and data management within a fast-paced clinical setting.
            </p>
            <footer>
              <span>Clinical Operations</span>
              <span>↗</span>
            </footer>
          </article>

          <article className="project-card dark">
            <span className="chip">Software Consultant</span>
            <h3>Health Center</h3>
            <p>
              Spearheaded the digital transformation of local health registries, implementing secure software architectures for critical data handling.
            </p>
            <footer>
              <span>Tech Consulting</span>
              <span>↗</span>
            </footer>
          </article>

          <article className="project-card small">
            <h4>Technical Registry</h4>
            <div className="tag-row">
              <span>Consultant</span>
              <span>Health-tech</span>
              <span>Full stack</span>
            </div>
          </article>

          <article className="project-card banner">
            <h3>
              Software Consultant
              <br />
              <em>Systems Optimization</em>
            </h3>
            <div className="icon">⧉</div>
          </article>
        </div>
      </section>

      <section className="section final-cta">
        <h2>
          Ready to synchronize your
          <br />
          healthcare infrastructure?
        </h2>
        <p>Available for software consulting engagements and medical-technical integrations.</p>
        <div className="cta-row">
          <button className="btn btn-primary">Book Consultation</button>
          <button className="btn btn-secondary">View Projects</button>
        </div>
      </section>

      <footer className="section footer">
        <div>
          <strong>Sameh Zoca</strong>
          <p>© 2024 Sameh Zoca. GP & Software Consultant, built with clinical precision.</p>
        </div>
        <div className="links">
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
    <App />
  </React.StrictMode>,
);
