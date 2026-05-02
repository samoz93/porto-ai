import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SEOHead } from "../components/SEOHead";
import { innerBreadcrumbs, pageIndexUrl, webPageJsonLd } from "../lib/seoJsonLd";
import "../contact.css";

const CONTACT_DESCRIPTION =
  "Get in touch with Sameh Zoaa for software consulting or healthcare technology inquiries. Based in Istanbul, offering precision-driven solutions for digital health projects.";

const contactItems = [
  { label: "Email", value: "samozayncom@gmail.com", icon: "✉" },
  { label: "Location", value: "İstanbul", icon: "📍" },
  { label: "LinkedIn", value: "linkedin.com/in/samoz93", icon: "◉" },
];

export function Contact() {
  return (
    <div className="contact-page">
      <SEOHead
        title="Contact"
        description={CONTACT_DESCRIPTION}
        keywords="contact, software consultant, healthcare consultant, consultation request, get in touch, Istanbul"
        openGraph={{ locale: "en_US" }}
        jsonLd={[
          webPageJsonLd({
            title: "Contact | Sameh Zoaa",
            description: CONTACT_DESCRIPTION,
            pageUrl: pageIndexUrl(),
          }),
          innerBreadcrumbs(window.location.origin, "contact", "Contact"),
        ]}
      />
      <Navbar />

      <main className="contact-section contact-layout">
        <section>
          <p className="contact-eyebrow">Inquiry & Consultation</p>
          <p className="page-name-line">Sameh Zoaa</p>
          <h1 className="contact-title">
            Let&apos;s bridge the
            <br />
            <em>clinical gap.</em>
          </h1>
          <p className="contact-intro">
            Whether you are seeking software consultancy or general practice
            insights, I offer a precision-driven approach to every project.
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

          <div
            className="contact-map-card"
            role="img"
            aria-label="Map showing current base at Istanbul"
          >
            <span>Current Base: Istanbul</span>
          </div>
        </section>

        <section className="contact-form-panel">
          <form
            className="contact-form"
            onSubmit={(event) => event.preventDefault()}
          >
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
              <textarea
                rows={6}
                placeholder="Please describe your clinical or technical requirements..."
              />
            </label>

            <button type="submit" className="contact-send-btn">
              Send Message <span aria-hidden="true">→</span>
            </button>

            <p className="contact-consent-note">
              By submitting this form, you acknowledge that communications
              regarding clinical cases must remain anonymized in compliance with
              medical data standards.
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
