# SEO: derived canonical / og:url

## Goal

Single source of truth for full page URL: `window.location.origin` + Vite `import.meta.env.BASE_URL` + React Router `pathname`. Optional `url` prop on `SEOHead` for overrides.

## Steps done

1. `SEOHead.jsx`: `useLocation()`, `deployBasePath()` from `BASE_URL`, `buildCanonicalUrl()`.
2. Default `og:image` uses same origin + base + `/og-image.jpg`.
3. Removed `url` from `Home`, `About`, `Projects`, `Contact`.

## Notes

- `SEOHead` must stay under `<Router>` (current `App` layout OK).
- Override `url` if you need a fixed production URL while testing on localhost.
