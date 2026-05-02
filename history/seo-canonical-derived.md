# SEO: canonical / og:url (site index only)

## Goal

Align with Search Console: **canonical and `og:url` must be a URL Google can fetch with HTTP 200**. On GitHub Pages + HashRouter, only the site index (`…/porto-ai/`) is a real file; `/about` etc. 404 unless SPA `404.html` exists.

## Steps done

1. `SEOHead.jsx`: `siteIndexUrl()` = `origin` + Vite `base` + `/`. No per-route path. Optional `url` override.
2. Default `og:image`: `origin` + `base` + `/og-image.jpg`.
3. Removed per-page `url` props from pages (obsolete).

## Notes

- Inner routes still get unique `<title>` / description via Helmet (good for JS-aware crawlers / tabs).
- If you add `404.html` + `BrowserRouter`, you can revisit per-route canonical + multi-URL sitemap.
