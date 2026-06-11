import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // GitHub Pages uses /porto-ai/; Vercel serves from domain root.
  base: process.env.VERCEL ? "/" : "/porto-ai/",
});
