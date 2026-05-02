# port23 — portfolio (Vite + React)

## Overview

Personal site for **Sameh Zoaa**: physician + software engineer. Hosted on **GitHub Pages** with `base` `/porto-ai/`, **HashRouter** (single indexed URL for SEO path B).

## SEO stance

- **Stack:** Vite + **react-helmet** (not `next-seo`; that targets Next.js). Per-route meta + JSON-LD via `SEOHead` and `src/lib/seoJsonLd.js`.
- **Name-first** branding; canonical name string **Sameh Zoaa** (no `Dr.` in title/H1/schema name).
- **Tango**: footer only, not in primary meta/title.
- **Social previews:** `og-image.jpg` at repo root of deploy (`/porto-ai/og-image.jpg`), wired in `index.html` + `SEOHead.jsx`. Route-level **`og:title`** matches full tab title (`… | Sameh Zoaa`); **`og:locale`** `en_US` on Home / About / Contact.
- **Structured data:** `index.html` has baseline **Person** JSON-LD. Home / About / Contact add **WebPage** + **WebSite** (`isPartOf`); About & Contact add **BreadcrumbList** (hash URLs). Canonical URL in schema stays the **site index** (same as `link[rel=canonical]`).
- **Search Console / URL Inspection:** [Google’s URL Inspection doc](https://support.google.com/webmasters/answer/9012289) — care about **successful page fetch**, **user-declared canonical**, **valid structured data** (Enhancements), **sitemap only for URLs that return 200**. This deploy: **sitemap = homepage only** until SPA `404.html` + clean paths exist; `robots.txt` has no `Crawl-delay` (Google ignores it).

## Key paths

| Area        | Location                          |
| ----------- | --------------------------------- |
| Static meta | `index.html`                      |
| Per-route   | `src/components/SEOHead.jsx` + `src/lib/seoJsonLd.js` (title/description/OG/Twitter; **canonical + `og:url` = site index only** on GHP + hash; optional `url` override; **JSON-LD** per main routes) |
| Visible name (inner pages) | `.page-name-line` in `base.css`; About, Projects, Contact |
| History log | `history/vite-helmet-seo.md`, `history/seo-og-image.md`, `history/seo-visible-name-pages.md`, `history/seo-canonical-derived.md`, `history/seo-search-console-alignment.md`, `history/works.md` |
