import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEOHead } from "../components/SEOHead";
import me from "../img/me.jpeg";
const features = [
  {
    title: "Clinical Logic",
    text: "Applying diagnostic frameworks to software architecture. Every line of code is treated with the same meticulous care as a patient diagnosis.",
  },
  {
    title: "Technical Depth",
    text: "Full-stack expertise tailored for health-tech environments. Scalable, secure, and compliant software solutions for modern medicine.",
  },
  {
    title: "Consultant Mindset",
    text: "Bridging stakeholders from both medical registries and dev teams to create unified, high-performance digital tools.",
  },
];

export function Home() {
  return (
    <div className="page">
      <SEOHead
        title="Home"
        description="Sameh Zoaa - Full-stack software engineer combining clinical precision with cutting-edge technology. Specializing in health-tech, system design, and digital transformation."
        keywords="full-stack developer, health-tech, clinical software, software engineer, system design, digital health"
      />
      <Navbar />

      <section className="hero section">
        <div className="hero-content">
          <p className="eyebrow">Precision Engineering & Medicine</p>
          <h1>
            Merging Clinical Precision
            <br />
            with <em>Software Innovation.</em>
          </h1>
          <p className="lead">
            A Pratisyen Hekim and Software Consultant bridging the gap between
            medicine and technology. Delivering robust digital solutions for
            complex healthcare ecosystems.
          </p>
          <div className="cta-row">
            <button className="btn btn-primary">View Portfolio →</button>
            <button className="btn btn-link">Request Consultation</button>
          </div>
        </div>
        <div className="hero-card">
          <img src={me} alt="Consultant portrait" />
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
            From the ER to the IDE, my work is defined by a commitment to system
            excellence and operational reliability.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card light">
            <span className="chip">Current Role</span>
            <h3>Ersoy Hospital</h3>
            <p>
              Practitioner physician integrating software workflows to optimize
              patient care and data management within a fast-paced clinical
              setting.
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
              Spearheaded the digital transformation of local health registries,
              implementing secure software architectures for critical data
              handling.
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
        <p>
          Available for software consulting engagements and medical-technical
          integrations.
        </p>
        <div className="cta-row">
          <button className="btn btn-primary">Book Consultation</button>
          <button className="btn btn-secondary">View Projects</button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
