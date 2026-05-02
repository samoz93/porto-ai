# port23 (porto-ai) — app summary

## What it is

Single-page portfolio for **Sameh Zoaa** (physician + software engineer). Pure front-end on **GitHub Pages** (`https://samoz93.github.io/porto-ai`). Repo package name `porto-ai`; Vite `base` `/porto-ai/`; **`BrowserRouter`** + build step copies **`index.html`** → **`dist/404.html`** so path URLs (`/about`) load the SPA shell on static hosting.

## Stack

| Layer | Choice |
| --- | --- |
| Build | Vite 5, `@vitejs/plugin-react` |
| UI | React 18 |
| Routing | react-router-dom 7 (`BrowserRouter`, `Routes`, `Route`), `basename` from `deployBasePath()` |
| `<head>` / sharing | react-helmet via `SEOHead` |
| Structured data helpers | `src/lib/seoJsonLd.js`, `src/lib/siteUrl.js` |

## Routes (under `/porto-ai`)

| Path | Page | Role |
| --- | --- | --- |
| `/` | `Home` | Landing |
| `/about` | `About` | Bio |
| `/projects` | `Projects` | Work showcase |
| `/contact` | `Contact` | Contact |

## Layout / UI

Shared chrome: **`Navbar`**, **`Footer`**. Globals: **`base.css`**, **`styles.css`**. Route-scoped styling: **`about.css`**, **`projects.css`**, **`contact.css`**.

Entry: **`main.jsx`** mounts `App` into `#root` under **`React.StrictMode`**.

## SEO (high level)

- Baseline meta + OG/Twitter + Person JSON-LD in **`index.html`**.
- Per-route titles, descriptions, and extra JSON-LD (WebPage, WebSite, BreadcrumbList where relevant) driven by **`SEOHead`** + **`seoJsonLd.js`**.
- Branding stance: primary name **Sameh Zoaa** (details in root **`project.md`**).

## Deploy

- **`npm run build`** → **`dist`**, then **`scripts/copy-spa-fallback.mjs`** writes **`404.html`** (same shell as **`index.html`**) for GitHub Pages.
- **`npm run deploy`** (after **`predeploy`**) uses **gh-pages** to publish **`dist`**.

## File map (core)

```
src/
  App.jsx              # Router + routes
  main.jsx
  base.css, styles.css, *.css per page
  components/          Navbar, Footer, SEOHead
  pages/               Home, About, Projects, Contact
  lib/                 seoJsonLd, siteUrl
index.html             # Shell + baseline SEO
vite.config.js         # React plugin, base path
```

Deeper SEO notes and history tickets: see **`project.md`** and existing files under **`history/`**.
