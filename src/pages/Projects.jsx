import { Navbar } from "../components/Navbar";
import { SEOHead } from "../components/SEOHead";
import "../projects.css";

import apexImg from "../img/apex.png";
import azkarImg from "../img/azkar.png";
import catgoImg from "../img/catgo.png";
import guardImg from "../img/guard.png";
import saferniImg from "../img/saferni.png";

const projectsList = [
  {
    id: "saferni",
    title: "Saferni",
    category: "TRAVEL / UX",
    description:
      "A sophisticated travel orchestration platform designed for the Turkish landscape, allowing users to architect personalized itineraries through algorithmic discovery and regional curation.",
    image: saferniImg,
    className: "saferni",
  },
  {
    id: "guard",
    title: "Guard",
    category: "HEALTH / IOT",
    description:
      "Mobile app to track children's location and health via wearable vitals tracking, designed for real-time safety.",
    image: guardImg,
    className: "guard",
  },
  {
    id: "catgo",
    title: "Catgo",
    category: "GAMING / API",
    description:
      "A streamlined news and asset intelligence hub for Fortnite players, delivering real-time item shop analysis and competitive updates with a focus on data clarity.",
    image: catgoImg,
    className: "catgo",
  },
  {
    id: "apex-tracker",
    title: "Apex Tracker",
    category: "GAMING / ANALYTICS",
    description:
      "A performance-driven telemetry dashboard for Apex Legends, offering deep-tier statistical analysis and legend mastery tracking to optimize competitive play.",
    image: apexImg,
    className: "apex-tracker",
  },
];

export function Projects() {
  return (
    <div className="page">
      <SEOHead
        title="Projects"
        description="Portfolio of software projects showcasing cross-disciplinary work in health-tech, travel platforms, gaming analytics, and system architecture. Bridging medical precision with digital innovation."
        keywords="software projects, health-tech solutions, portfolio, system design, API development, gaming analytics, travel app, IoT mobile app"
        url="https://samoz93.github.io/porto-ai/projects"
      />
      <Navbar />

      <main>
        <section className="hero projects-hero section">
          <h1>
            Portfolio of
            <br />
            <em>Intentional Systems.</em>
          </h1>
          <p className="lead">
            A curated selection of cross-disciplinary works bridging medical
            precision with software architectural logic. Exploring the
            intersection of human health and digital efficiency.
          </p>
        </section>

        <section className="section projects-grid-container">
          <div className="projects-grid">
            {projectsList.slice(0, 2).map((project) => (
              <article
                key={project.id}
                className={`project-card ${project.className}`}
              >
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
          </div>
        </section>

        <section className="section secondary-grid-container">
          <div className="secondary-grid">
            {projectsList.slice(2, 4).map((project) => (
              <article
                key={project.id}
                className={`project-card ${project.className}`}
              >
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
          </div>
        </section>

        <section className="section azkar-section-container">
          <div className="azkar-section">
            <div className="azkar-info">
              <p className="eyebrow">RELIGIOUS / LIFESTYLE</p>
              <h2>Azkar</h2>
              <p>
                A comprehensive digital sanctuary for daily devotion,
                integrating spiritual practices with a refined, distraction-free
                architectural layout for religious mindfulness.
              </p>
              <a href="#" className="explore-link">
                EXPLORE SYSTEM <span>↗</span>
              </a>
            </div>
            <div className="azkar-image">
              <img
                src={azkarImg}
                alt="Azkar Project"
                style={{ width: "100%", borderRadius: "4px" }}
              />
            </div>
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
