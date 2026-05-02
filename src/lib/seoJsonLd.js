import { deployBasePath, siteIndexUrl, sitePageUrl } from "./siteUrl";

/**
 * WebPage + WebSite (`isPartOf.url` always site root, not `${pageUrl}` path).
 */
export function webPageJsonLd({
  title,
  description,
  pageUrl,
  siteName = "Sameh Zoaa Portfolio",
  origin = typeof window !== "undefined" ? window.location.origin : "",
}) {
  const siteRoot = siteIndexUrl(deployBasePath(), origin);
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteRoot,
    },
  };
}

/** BreadcrumbList — `item.href` absolute URLs matching history routes. */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  };
}

export function innerBreadcrumbs(origin, segment, label) {
  return breadcrumbJsonLd([
    { name: "Home", href: sitePageUrl("/", origin) },
    { name: label, href: sitePageUrl(`/${segment}`, origin) },
  ]);
}

/** Site root URL — Home canonical / WebPage.url. */
export function pageIndexUrl() {
  return siteIndexUrl(deployBasePath());
}

/** Full page URL for a route path (`/projects`). */
export function pageUrlForRoute(path) {
  return sitePageUrl(path);
}
