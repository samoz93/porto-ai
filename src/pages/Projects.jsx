import React from 'react';
import '../projects.css';
import { Navbar } from '../components/Navbar';

const projectsList = [
  {
    id: 'saferni',
    title: 'Saferni',
    category: 'TRAVEL / UX',
    description: 'A sophisticated travel orchestration platform designed for the Turkish landscape, allowing users to architect personalized itineraries through algorithmic discovery and regional curation.',
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80',
    className: 'saferni'
  },
  {
    id: 'guard',
    title: 'Guard',
    category: 'HEALTH / IOT',
    description: 'Mobile app to track children\'s location and health via wearable vitals tracking, designed for real-time safety.',
    image: 'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80',
    className: 'guard'
  },
  {
    id: 'catgo',
    title: 'Catgo',
    category: 'GAMING / API',
    description: 'A streamlined news and asset intelligence hub for Fortnite players, delivering real-time item shop analysis and competitive updates with a focus on data clarity.',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    className: 'catgo'
  },
  {
    id: 'apex-tracker',
    title: 'Apex Tracker',
    category: 'GAMING / ANALYTICS',
    description: 'A performance-driven telemetry dashboard for Apex Legends, offering deep-tier statistical analysis and legend mastery tracking to optimize competitive play.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    className: 'apex-tracker'
  }
];

export function Projects() {
  return (
    <div className="projects-container">
      <Navbar />

      <main>
        <section className="hero">
          <h1>
            Portfolio of
            <br />
            <em>Intentional Systems.</em>
          </h1>
          <p className="hero-description">
            A curated selection of cross-disciplinary works bridging medical precision with software architectural logic. Exploring the intersection of human health and digital efficiency.
          </p>
        </section>

        <section className="projects-grid">
          {projectsList.slice(0, 2).map((project) => (
            <article key={project.id} className={`project-card ${project.className}`}>
              <div className="project-image-wrapper">
                <span className="category-tag">{project.category}</span>
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="secondary-grid">
          {projectsList.slice(2, 4).map((project) => (
            <article key={project.id} className={`project-card ${project.className}`}>
              <div className="project-image-wrapper">
                <span className="category-tag">{project.category}</span>
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="azkar-section">
          <div className="azkar-info">
            <p className="eyebrow">RELIGIOUS / LIFESTYLE</p>
            <h2>Azkar</h2>
            <p>
              A comprehensive digital sanctuary for daily devotion, integrating spiritual practices with a refined, distraction-free architectural layout for religious mindfulness.
            </p>
            <a href="#" className="explore-link">
              EXPLORE SYSTEM <span>↗</span>
            </a>
          </div>
          <div className="azkar-image">
             <img 
               src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
               alt="Azkar Project" 
               style={{ width: '100%', borderRadius: '4px' }}
             />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>© 2024 THE PRECISION CURATOR. MD/SWE</div>
        <div className="footer-links">
          <a href="#">PRIVACY POLICY</a>
          <a href="#">TERMS OF SERVICE</a>
          <a href="#">GITHUB</a>
          <a href="#">ORCID</a>
        </div>
      </footer>
    </div>
  );
}
