# Browser history routing on GitHub Pages

## Goal

Replace `HashRouter` with **`BrowserRouter`** so URLs look like `/porto-ai/about` instead of `/#/about`, aligned with SPA `404.html` + richer sitemap / per-route canonicals.

## Steps (done)

1. [x] **`App.jsx`** — `BrowserRouter` with `basename={deployBasePath()}` (matches Vite `base`, no trailing slash).
2. [x] **`scripts/copy-spa-fallback.mjs`** — after `vite build`, copy `dist/index.html` → `dist/404.html` so GH Pages serves the app shell on unknown paths under the project.
3. [x] **`package.json`** — `"build"` runs copy script after Vite build (`predeploy` → deploy unchanged).
4. [x] **`src/lib/siteUrl.js`** — `sitePageUrl(routePath)` for absolute path URLs; remove hash helpers.
5. [x] **`src/lib/seoJsonLd.js`** — breadcrumbs use path URLs; `webPageJsonLd` keeps **`WebSite`** root via `siteIndexUrl`/`deployBasePath` (not inferred from inner `pageUrl`).
6. [x] **Pages + `SEOHead`** — pass `url={pageUrlForRoute("/about")}` (etc.) for canonical + `og:url`; `webPageJsonLd.pageUrl` matches that route. **Projects** adds WebPage + BreadcrumbList (parity with About/Contact).
7. [x] **`public/sitemap.xml`** — `loc` entries use path URLs (`…/about`, `…/projects`, `…/contact`).
8. [x] **Docs** — `project.md`, `history/seo-search-console-alignment.md`, `history/app-summary.md`, `history/works.md`.

## Verification

- [ ] After deploy: **Search Console URL Inspection** on each inner URL — confirm **HTTP 200** (or acceptable soft handling) before relying on indexing.
- Local: `npm run build && vite preview`; open `/porto-ai/about` in a cold tab (should be **200** in recent Vite preview).

## Risks / notes

Some GitHub Pages discussions report **404 status** alongside custom `404.html` content for SPA fallbacks — treat GSC fetched status as ground truth vs `vite preview`.
