# port23 — portfolio (Vite + React)

## Overview

Personal site for **Sameh Zoaa**: physician + software engineer. Hosted on **GitHub Pages** with `base` `/porto-ai/`, **`BrowserRouter`** + post-build **`404.html`** (SPA shell copy of `index.html`) so path URLs resolve.

**Structured app overview (stack, routes, deploy):** [history/app-summary.md](history/app-summary.md).

## Tracking

- Added **history/app-summary.md** (May 2026) — condensed walkthrough of app purpose, routes, SEO surface, deploy.
- **history/browser-history-github-pages.md** — switched from HashRouter → BrowserRouter, `scripts/copy-spa-fallback.mjs`, path-based canonicals / sitemap / breadcrumbs.

## SEO stance

- **Stack:** Vite + **react-helmet** (not `next-seo`; that targets Next.js). Per-route meta + JSON-LD via `SEOHead` and `src/lib/seoJsonLd.js`.
- **Name-first** branding; canonical name string **Sameh Zoaa** (no `Dr.` in title/H1/schema name).
- **Tango**: footer only, not in primary meta/title.
- **Social previews:** `og-image.jpg` at repo root of deploy (`/porto-ai/og-image.jpg`), wired in `index.html` + `SEOHead.jsx`. Route-level **`og:title`** matches full tab title (`… | Sameh Zoaa`); **`og:locale`** `en_US` on Home / About / Projects / Contact.
- **Structured data:** `index.html` has baseline **Person** JSON-LD. Main routes add **WebPage** + **WebSite** (`isPartOf` uses site root); **BreadcrumbList** on About / Projects / Contact with **path** URLs (`…/about` etc.). **`link rel=canonical`** + **`og:url`** + WebPage **`url`** match each route URL (via `SEOHead` `url` prop).
- **Search Console / URL Inspection:** [Google’s URL Inspection doc](https://support.google.com/webmasters/answer/9012289) — care about **successful page fetch**, **user-declared canonical**, **valid structured data** (Enhancements), **sitemap only for URLs that return 200**. Sitemap lists **homepage + `/about`, `/projects`, `/contact`** after SPA fallback deploy; verify each **returns 200** in URL Inspection (`robots.txt` has no `Crawl-delay`).

## Key paths

| Area        | Location                          |
| ----------- | --------------------------------- |
| Static meta | `index.html`                      |
| Per-route   | `src/components/SEOHead.jsx` + `src/lib/seoJsonLd.js` (title/description/OG/Twitter; **canonical + `og:url`** = route URL via `url` prop; **JSON-LD** WebPage/BreadcrumbList) |
| Visible name (inner pages) | `.page-name-line` in `base.css`; About, Projects, Contact |
| History log | `history/browser-history-github-pages.md`, `app-summary.md`, `vite-helmet-seo.md`, `seo-og-image.md`, `seo-visible-name-pages.md`, `seo-canonical-derived.md`, `seo-search-console-alignment.md`, `works.md` |
