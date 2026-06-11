# Vercel deploy — base path fix

## Problem

MIME error: `Failed to load module script … server responded with MIME type "text/html"`.

Build used Vite `base: "/porto-ai/"` (GitHub Pages). On Vercel the app is served from domain root, so the browser requested `/porto-ai/assets/*.js`, got `index.html` (404/SPA fallback), and failed strict module MIME checks.

## Fix

1. **`vite.config.js`** — `base: process.env.VERCEL ? "/" : "/porto-ai/"` (Vercel sets `VERCEL=1` at build time).
2. **`vercel.json`** — SPA rewrite so `/about`, `/projects`, etc. serve `index.html`.
3. **`index.html`** — favicon links use `%BASE_URL%` so they work on both hosts.

## Deploy

Push and redeploy on Vercel. GitHub Pages deploy unchanged (`npm run deploy` still uses `/porto-ai/`).

## Follow-up (optional)

- Point `public/sitemap.xml` and `robots.txt` at the Vercel domain if that becomes primary.
- Replace hardcoded `samoz93.github.io` meta in `index.html` with env-driven URLs if needed for crawlers before JS.
