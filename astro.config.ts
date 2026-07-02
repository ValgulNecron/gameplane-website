// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { BASE, SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      // Dark theme with warm orange accents, close to the site's palette;
      // the block background is overridden to --terminal in global.css.
      theme: "vesper",
    },
  },
});
