# SEO alignment with Search Console / URL Inspection practices

Reference: [URL Inspection tool](https://support.google.com/webmasters/answer/9012289) (indexing, canonical, enhancements, structured data, sitemaps).

## Decisions

1. **Sitemap lists only URLs that HTTP 200** — GitHub Pages project sites do not serve `/about`, `/projects`, `/contact` as real paths without an SPA `404.html` fallback. Listing them invited crawl of non-existent paths. Sitemap now one `loc`: homepage.
2. **`SEOHead` canonical + `og:url`** — Always the deployed index URL (`…/porto-ai/`), not router path, so user-declared canonical matches a fetchable page (per [URL Inspection](https://support.google.com/webmasters/answer/9012289) indexing expectations).
3. **index.html** — `canonical`, `og:url`, Person `url` use trailing slash on site root for consistency.
4. **robots.txt** — Removed non-standard `Crawl-delay` (Google ignores it; [Google robots docs](https://developers.google.com/search/docs/crawling-indexing/robots/robots_txt)).
5. **Docs** — `project.md` notes GSC checklist.

## Optional later (not done in this pass)

- **Profile page / Person JSON-LD** — Validate with [Rich Results Test](https://search.google.com/test/rich-results); fix warnings so “Enhancements” in URL Inspection stays clean.
- **SPA fallback** — Duplicate `index.html` to `404.html` in deploy + `BrowserRouter` → then restore multi-URL sitemap and per-route canonicals.

## Update (2026-05-02)

- **BreadcrumbList** — Implemented on **About** and **Contact** (hash URLs in `item`), plus **WebPage** JSON-LD on Home / About / Contact. See `history/vite-helmet-seo.md`.
