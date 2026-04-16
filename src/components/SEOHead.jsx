import { Helmet } from "react-helmet";

export function SEOHead({
  title,
  description,
  keywords,
  url,
  image,
  type = "website",
  twitterHandle = "@samoz93",
}) {
  const canonicalUrl = url || "https://samoz93.github.io/porto-ai";
  const ogImage = image || "https://samoz93.github.io/porto-ai/og-image.jpg";

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
      <meta property="og:site_name" content="Sameh Zoaa Portfolio" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
}
