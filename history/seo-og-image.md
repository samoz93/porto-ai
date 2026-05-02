# SEO: Open Graph / Twitter share image

## Goal

Absolute `og:image` / `twitter:image` URL for rich link previews (path B, hash SPA on GitHub Pages).

## Steps done

1. Add `public/og-image.jpg` (banner: name + Physician · Software Engineer), crop to **1200×630** for OG spec.
2. Mirror tags in `index.html` for crawlers that read static HTML first.
3. Extend `SEOHead.jsx` with `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:image:alt`.

## Deploy note

After `npm run build`, confirm `dist/og-image.jpg` exists and URL `https://samoz93.github.io/porto-ai/og-image.jpg` returns 200.

## Optional follow-up

- Replace `public/og-image.jpg` with a photo or custom design; keep filename or update both `index.html` and `SEOHead` default.
