# SEO alignment with Search Console / URL Inspection practices

Reference: [URL Inspection tool](https://support.google.com/webmasters/answer/9012289) (indexing, canonical, enhancements, structured data, sitemaps).

## Decisions

1. **Sitemap ↔ HTTP 200** — ~~Homepage-only sitemap~~ → **updated:** SPA `404.html` + path routing; **`sitemap.xml`** lists homepage + `/about`, `/projects`, `/contact`. **Still:** only trust URLs Search Console confirms return **200** (see [`browser-history-github-pages.md`](browser-history-github-pages.md)).
2. **`SEOHead` canonical + `og:url`** — ~~Always the deployed index URL~~ → **updated:** with **BrowserRouter** + SPA **`404.html`**, set per-route to match `window` path (`pageUrlForRoute`). Re-verify [URL Inspection](https://support.google.com/webmasters/answer/9012289) **HTTP status** still 200 for each inner URL after deploy ([decision tracker](browser-history-github-pages.md)).
3. **index.html** — `canonical`, `og:url`, Person `url` use trailing slash on site root for consistency.
4. **robots.txt** — Removed non-standard `Crawl-delay` (Google ignores it; [Google robots docs](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)).
5. **Docs** — `project.md` notes GSC checklist.

## Optional later

- **Profile page / Person JSON-LD** — Validate with [Rich Results Test](https://search.google.com/test/rich-results); fix warnings so “Enhancements” in URL Inspection stays clean.

## Update (2026-05-02)

- **BreadcrumbList** — On **About**, **Contact**, and (later) **Projects**; breadcrumb `item` URLs now **path-based** after BrowserRouter migration (`browser-history-github-pages.md`). **WebPage** JSON-LD on main routes. See `history/vite-helmet-seo.md`.

## Update (routing + SEO alignment)

- **SPA fallback done** — `scripts/copy-spa-fallback.mjs` + `BrowserRouter`; **BreadcrumbList** now uses **path** URLs; multi-URL sitemap + per-route canonicals/`og:url`/`WebPage.url`. Tracker: **`browser-history-github-pages.md`**.
