# Works — rolling summary of `history/` SEO work

This file aggregates the intent of the per-topic history notes for quick reference.

## Themes

1. **Canonical / GHP + BrowserRouter** — Path URLs (`/porto-ai/about`, etc.) with SPA `404.html` copy; `canonical`, `og:url`, and WebPage `url` match each route. **Verify HTTP 200 in URL Inspection** after deploy (GitHub behavior may differ from `vite preview`). Source: `browser-history-github-pages.md`, `seo-search-console-alignment.md`.

2. **Social previews** — Shared `og-image.jpg` (1200×630), width/height/alt, mirrored in `index.html` and `SEOHead`. Source: `seo-og-image.md`.

3. **Visible entity name** — `.page-name-line` with **Sameh Zoaa** on inner pages. Source: `seo-visible-name-pages.md`.

4. **Helmet-style enhancements (2026-05-02)** — `next-seo` removed; `SEOHead` + `seoJsonLd` helpers add `og:locale`, full-title OG/Twitter, WebPage + BreadcrumbList JSON-LD. Source: `vite-helmet-seo.md`.

## Day rollup (2026-05-02)

- Implemented Vite + react-helmet SEO layer (`siteUrl`, `seoJsonLd`, extended `SEOHead`, Home/About/Contact wiring).
- Removed `next-seo` dependency; documented in `project.md`.
- **BrowserRouter + `404.html`:** build copies `index.html` → `404.html`; path-based canonicals, sitemap, breadcrumbs; Projects gets WebPage + BreadcrumbList. See `browser-history-github-pages.md`.
