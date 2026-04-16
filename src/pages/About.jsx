import "../about.css";
import { Navbar } from "../components/Navbar";
import { SEOHead } from "../components/SEOHead";
import me from "../img/me.jpeg";

const timeline = [
  {
    period: "Oct 2025 - Present",
    role: "Ersoy Hospital",
    detail:
      "General Practitioner providing acute care and clinical consultation.",
  },
  {
    period: "Aug 2024 - Aug 2025",
    role: "Yalova State Hospital",
    detail:
      "Served as a dedicated medical professional in public health emergency services.",
  },
  {
    period: "Oct 2021 - July 2024",
    role: "Health Center",
    detail:
      "Software Consultant bridging technical architecture and medical requirements.",
  },
  {
    period: "Oct 2020 - Oct 2021",
    role: "Fatih İlçe Sağlık Müdürlüğü",
    detail:
      "Public health officer and general practitioner during critical healthcare periods.",
  },
  {
    period: "Pre-2020",
    role: "Freelance Software Developer",
    detail:
      "Early career focus on building digital solutions and mastering system logic.",
  },
];

const expertise = [
  {
    title: "Software Consulting",
    text: "At Health Center, I bridge technical teams and medical practitioners to deliver clinically viable, user-centric software solutions.",
    tags: ["System Architecture", "Healthtech", "Data Precision"],
    featured: false,
  },
  {
    title: "The Precision Protocol",
    text: "Developing standardized workflows for health information systems using diagnostic methodologies.",
    featured: true,
  },
  {
    title: "Analysis",
    text: "Translating medical documentation into scalable database structures and logic trees.",
    featured: false,
  },
  {
    title: "Interdisciplinary Logic",
    text: "Where diagnosis meets debugging. A unique perspective on failure analysis and systemic optimization.",
    featured: false,
  },
];

export function About() {
  return (
    <div className="about-page">
      <SEOHead
        title="About"
        description="Learn about Sameh Zoaa's journey as a full-stack engineer, general practitioner, and healthcare technology consultant. Combining medical expertise with software innovation."
        keywords="software consultant, general practitioner, health-tech expert, clinical software, system architect, career trajectory"
        url="https://samoz93.github.io/porto-ai/about"
      />
      <Navbar />

      <main>
        <section className="about-section about-hero">
          <p className="about-eyebrow">Precision Curator</p>
          <h1>
            Bridging the gap between
            <br />
            <em>Clinical Precision</em> and <em>Logic Systems.</em>
          </h1>
          <div className="about-divider" />
        </section>

        <section className="about-section about-journey-grid">
          <div className="about-portrait-card">
            <img src={me} alt="Portrait of Sameh" />
            <blockquote>
              <em>“Medicine is an algorithm of life.”</em>
            </blockquote>
          </div>

          <div>
            <h2>Professional Journey</h2>
            <p className="about-journey-intro">
              My trajectory has always been defined by precision. Starting at
              Düzce University, I immersed myself in medicine where every detail
              can alter an outcome.
            </p>

            <div className="about-timeline">
              {timeline.map((item) => (
                <article key={item.role} className="about-timeline-item">
                  <p className="about-period">{item.period}</p>
                  <h3>{item.role}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section about-expertise">
          <h2>Technical Expertise</h2>
          <p className="about-expertise-intro">
            Applying surgical logic to complex software architectures and health
            technology systems.
          </p>

          <div className="about-expertise-grid">
            {expertise.map((item, index) => (
              <article
                key={item.title}
                className={`about-expertise-card ${item.featured ? "featured" : ""} card-${index + 1}`}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {"tags" in item && item.tags && (
                  <div className="about-tag-row">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="about-section about-balance">
          <div>
            <p className="about-eyebrow">Equilibrium</p>
            <h2>Personal &amp; Balance</h2>
            <p>
              Beyond the stethoscope and keyboard, I find rhythm in motion.
              Dancing brings the fluid transitions that shape both consultation
              and software architecture.
            </p>
            <p className="about-italic">
              I believe that high-performance work requires high-quality rest
              and creative exploration.
            </p>
          </div>

          <div className="about-balance-image">
            <img
              src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=1200&q=80"
              alt="Tango dancers in a fluid embrace"
            />
          </div>
        </section>
      </main>

      <footer className="about-section about-footer">
        <div>
          <strong>Sameh Zoaa</strong>
          <p>
            © 2024 Sameh Zoaa. GP &amp; Software Consultant. Built with clinical
            precision.
          </p>
        </div>
        <div className="about-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Medical Registry</a>
          <a href="#">Consultation</a>
        </div>
      </footer>
    </div>
  );
}
