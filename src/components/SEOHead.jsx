import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

/** Deploy path from Vite `base` (e.g. `/porto-ai/` → `/porto-ai`). */
function deployBasePath() {
  return (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
}

/** Canonical + og:url: origin + deploy base + router path. Optional `override` for mirrors / tests. */
function buildCanonicalUrl(pathname, override, base) {
  if (override) return override;
  const pathPart = pathname === "/" ? "/" : pathname;
  return `${window.location.origin}${base}${pathPart}`;
}

export function SEOHead({
  title,
  description,
  keywords,
  /** Optional full URL override (staging, mirrors, tests). */
  url,
  image,
  type = "website",
  twitterHandle = "@samoz93",
}) {
  const { pathname } = useLocation();
  const base = deployBasePath();
  const canonicalUrl = buildCanonicalUrl(pathname, url, base);
  const ogImage = image || `${window.location.origin}${base}/og-image.jpg`;

  return (
    <Helmet>
      <title>{title} | Sameh Zoaa</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Sameh Zoaa — Physician and Software Engineer"
      />
      <meta property="og:site_name" content="Sameh Zoaa Portfolio" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta
        name="twitter:image:alt"
        content="Sameh Zoaa — Physician and Software Engineer"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}
