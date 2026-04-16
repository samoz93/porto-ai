# Project: The Precision Curator (Porto-AI)

## 1. Vision & Identity
- **User:** Sameh Zoaa (GP & Software Consultant).
- **Core Concept:** Bridging the gap between **Clinical Precision** and **Software Architectural Logic**.
- **Tone:** Professional, sophisticated, minimal, and high-trust.
- **Visual Style:** Monochromatic base (greys/whites) with deep teal accents (`#044b54`). Uses high-contrast typography and generous whitespace.

## 2. Technical Stack
- **Framework:** React 18+ (Vite).
- **Routing:** `react-router-dom` (Single Page Application).
- **Styling:** Vanilla CSS with a centralized `base.css` utilizing CSS Variables for the design system.
- **Typography:** 
  - Serif: `Cormorant Garamond` (Hero titles, brand identity).
  - Sans-Serif: `Inter` (Body, navigation, technical details).

## 3. Project Structure
```text
src/
├── components/       # Shared UI (Navbar, Footer)
├── pages/            # Page-level components
│   ├── Home.jsx      # Trajectory and professional impact
│   ├── About.jsx     # Journey from MD to SWE
│   ├── Projects.jsx  # Portfolio of Intentional Systems
│   └── Contact.jsx   # Consultation inquiry
├── base.css          # Design system (variables, resets, globals)
├── styles.css        # Home-specific styles
├── about.css         # About-specific styles
├── projects.css      # Projects-specific styles
├── contact.css       # Contact-specific styles
├── App.jsx           # Router configuration
└── main.jsx          # Entry point
```

## 4. Key Design Specifications (from `base.css`)
- **Container Max-Width:** 1400px.
- Padding around the content of the main page 
- **Unified Font Sizes:**
  - Hero: 82px.
  - Title: 54px.
  - Subtitle: 32px.
  - Lead: 24px.
  - Body: 18px.
  - Nav/Small: 12px.
- **Colors:**
  - Background: `#e8eaec`.
  - Surface: `#f2f3f4`.
  - Teal (Accent): `#044b54`.
  - Deep Teal: `#024c55`.
  - Text Primary: `#102936`.

## 5. Content Highlights
- **Home:** Focuses on the "ER to IDE" narrative.
- **Projects:** Includes "Saferni" (Travel UX), "Guard" (Health/IoT), "Catgo" (Gaming/API), "Apex Tracker" (Gaming/Analytics), and "Azkar" (Lifestyle/Religious).
- **Clinical Logic:** A recurring theme where software architecture is treated with the meticulousness of a medical diagnosis.

## 6. Development Workflow
- **Single Root:** `createRoot` is used only in `main.jsx`.
- **Component-Driven:** Page logic is encapsulated in `src/pages/`, while recurring elements (Nav/Footer) are in `src/components/`.
- **CSS best practices:** Using variables for consistent scaling and coloring across different page-specific sheets.
