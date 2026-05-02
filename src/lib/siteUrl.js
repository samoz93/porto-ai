/** Deploy path from Vite `base` (e.g. `/porto-ai/` → `/porto-ai`). */
export function deployBasePath() {
  return (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
}

/**
 * Canonical / og:url default: deployed site root (slash).
 * Override per route via `SEOHead url` after SPA `404.html` + BrowserRouter.
 */
export function siteIndexUrl(base, origin = typeof window !== "undefined" ? window.location.origin : "") {
  return `${origin}${base}/`;
}

/** Full HTTPS URL for a router path (`/`, `/about`) under deploy base — history routing. */
export function sitePageUrl(routePath = "/", origin = typeof window !== "undefined" ? window.location.origin : "") {
  const base = deployBasePath();
  if (!routePath || routePath === "/") return `${origin}${base}/`;
  const p = routePath.startsWith("/") ? routePath : `/${routePath}`;
  return `${origin}${base}${p}`;
}
