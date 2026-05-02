/** Deploy path from Vite `base` (e.g. `/porto-ai/` → `/porto-ai`). */
export function deployBasePath() {
  return (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
}

/**
 * Canonical / og:url: single index URL that returns 200 on GitHub Pages + HashRouter.
 * Optional full override for staging / mirrors.
 */
export function siteIndexUrl(base, origin = typeof window !== "undefined" ? window.location.origin : "") {
  return `${origin}${base}/`;
}

/** Hash route URL for breadcrumbs and user-facing links (e.g. `/#/about`). */
export function siteHashUrl(path, origin = typeof window !== "undefined" ? window.location.origin : "") {
  const base = deployBasePath();
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${base}/#${p}`;
}
