# Vite + react-helmet SEO (next-seo-style parity)

## Goal

Improve crawl/social signals without Next.js: keep **single canonical / og:url** (GHP + HashRouter), add **per-route title/description**, **og:locale**, **JSON-LD** (WebPage + BreadcrumbList on inner pages).

## Steps

1. [x] Add `src/lib/siteUrl.js` — shared `deployBasePath`, `siteIndexUrl`, `siteHashUrl`.
2. [x] Add `src/lib/seoJsonLd.js` — `webPageJsonLd`, `breadcrumbJsonLd`, `innerBreadcrumbs`, `pageIndexUrl`.
3. [x] Extend `SEOHead.jsx` — full title on `og:title` / Twitter, optional `openGraph`, `robots`, `jsonLd` script tags; remove duplicate viewport (stays in `index.html`).
4. [x] Wire **Home**, **About**, **Contact** with `jsonLd` + `openGraph.locale`.
5. [x] Remove unused **`next-seo`** (requires Next peer); lockfile updated.
6. [x] Update `project.md` and this history file.

## Notes

- **Breadcrumbs** use hash URLs (`/#/about`) so they match real navigation; canonical remains site index only.
- Static `Person` JSON-LD remains in `index.html`; route scripts add **WebPage** + **BreadcrumbList** for richer context when JS runs.
