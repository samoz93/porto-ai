# port23 — portfolio (Vite + React)

## Overview

Personal site for **Sameh Zoaa**: physician + software engineer. Hosted on **GitHub Pages** with `base` `/porto-ai/`, **HashRouter** (single indexed URL for SEO path B).

## SEO stance

- **Name-first** branding; canonical name string **Sameh Zoaa** (no `Dr.` in title/H1/schema name).
- **Tango**: footer only, not in primary meta/title.
- **Social previews:** `og-image.jpg` at repo root of deploy (`/porto-ai/og-image.jpg`), wired in `index.html` + `SEOHead.jsx`.

## Key paths

| Area        | Location                          |
| ----------- | --------------------------------- |
| Static meta | `index.html`                      |
| Per-route   | `src/components/SEOHead.jsx` (canonical + `og:url` derived from router path + Vite `base`; optional `url` override) |
| Visible name (inner pages) | `.page-name-line` in `base.css`; About, Projects, Contact |
| History log | `history/seo-og-image.md`, `history/seo-visible-name-pages.md`, `history/seo-canonical-derived.md` |
