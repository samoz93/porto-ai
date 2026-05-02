# port23 — portfolio (Vite + React)

## Overview

Personal site for **Sameh Zoaa**: physician + software engineer. Hosted on **GitHub Pages** with `base` `/porto-ai/`, **HashRouter** (single indexed URL for SEO path B).

## SEO stance

- **Name-first** branding; canonical name string **Sameh Zoaa** (no `Dr.` in title/H1/schema name).
- **Tango**: footer only, not in primary meta/title.
- **Social previews:** `og-image.jpg` at repo root of deploy (`/porto-ai/og-image.jpg`), wired in `index.html` + `SEOHead.jsx`.
- **Search Console / URL Inspection:** [Google’s URL Inspection doc](https://support.google.com/webmasters/answer/9012289) — care about **successful page fetch**, **user-declared canonical**, **valid structured data** (Enhancements), **sitemap only for URLs that return 200**. This deploy: **sitemap = homepage only** until SPA `404.html` + clean paths exist; `robots.txt` has no `Crawl-delay` (Google ignores it).

## Key paths

| Area        | Location                          |
| ----------- | --------------------------------- |
| Static meta | `index.html`                      |
| Per-route   | `src/components/SEOHead.jsx` (per-route title/description; **canonical + `og:url` = site index only** on GHP + hash; optional `url` override) |
| Visible name (inner pages) | `.page-name-line` in `base.css`; About, Projects, Contact |
| History log | `history/seo-og-image.md`, `history/seo-visible-name-pages.md`, `history/seo-canonical-derived.md`, `history/seo-search-console-alignment.md` |
