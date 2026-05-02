import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const index = path.join(root, "dist", "index.html");
const fallback = path.join(root, "dist", "404.html");

if (!fs.existsSync(index)) {
  console.error("copy-spa-fallback: missing dist/index.html — run vite build first");
  process.exit(1);
}
fs.copyFileSync(index, fallback);
console.log("copy-spa-fallback: wrote dist/404.html (GitHub Pages SPA shell)");
