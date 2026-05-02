import { Helmet } from "react-helmet";
import { deployBasePath, siteIndexUrl } from "../lib/siteUrl";

function fullTitle(title) {
  return title.includes("|") ? title.trim() : `${title} | Sameh Zoaa`;
}

/**
 * Per-route meta (react-helmet). Canonical + og:url stay the site index on GHP + HashRouter.
 * Pass `jsonLd` as one object or an array of schema.org objects (WebPage, BreadcrumbList, etc.).
 */
export function SEOHead({
  title,
  description,
  keywords,
  /** Optional full URL override (staging, mirrors, tests). */
  url,
  image,
  type = "website",
  twitterHandle = "@samoz93",
  /** Optional: extra Open Graph keys (locale, siteName override handled below). */
  openGraph,
  /** Optional: robots content override (default matches index.html). */
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  /** One or more JSON-LD objects (serialized to script tags). */
  jsonLd,
}) {
  const base = deployBasePath();
  const canonicalUrl = url ?? siteIndexUrl(base);
  const defaultOg = image || `${window.location.origin}${base}/og-image.jpg`;
  const primaryOgImage = openGraph?.images?.[0]?.url ?? defaultOg;
  const pageTitle = fullTitle(title);

  const ldNodes = jsonLd == null ? [] : Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  return (
    <Helmet>
      <meta
        name="google-site-verification"
        content="GT6kswjrj6yVW60PR1P-YVWezzvqRp5legY6v1msx44"
      />
      <title>{pageTitle}</title>
      <meta name="author" content="Sameh Zoaa" />
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />

      {/* Open Graph */}
      <meta property="og:type" content={openGraph?.type ?? type} />
      <meta property="og:title" content={openGraph?.title ?? pageTitle} />
      <meta property="og:description" content={openGraph?.description ?? description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={primaryOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={openGraph?.images?.[0]?.alt ?? "Sameh Zoaa — Physician and Software Engineer"}
      />
      <meta property="og:site_name" content={openGraph?.siteName ?? "Sameh Zoaa Portfolio"} />
      {openGraph?.locale ? <meta property="og:locale" content={openGraph.locale} /> : null}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={primaryOgImage} />
      <meta name="twitter:image:alt" content="Sameh Zoaa — Physician and Software Engineer" />

      <link rel="canonical" href={canonicalUrl} />

      {ldNodes.map((node, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(node)}
        </script>
      ))}
    </Helmet>
  );
}
