import { deployBasePath, siteHashUrl, siteIndexUrl } from "./siteUrl";

/**
 * WebPage + WebSite context; `pageUrl` stays the index URL per GHP canonical policy.
 */
export function webPageJsonLd({ title, description, pageUrl, siteName = "Sameh Zoaa Portfolio" }) {
  const base = pageUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: pageUrl,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: `${base}/`,
    },
  };
}

/** BreadcrumbList with hash URLs for inner routes. */
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
    { name: "Home", href: siteHashUrl("/", origin) },
    { name: label, href: siteHashUrl(`/${segment}`, origin) },
  ]);
}

/** Site index URL for JSON-LD (matches canonical). */
export function pageIndexUrl() {
  return siteIndexUrl(deployBasePath());
}
