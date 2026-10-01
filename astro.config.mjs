import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://jpxco.dev",
  // Astro 5 folded "hybrid" into the default: pages prerender unless they opt
  // out with `export const prerender = false` (only /api/contact does).
  output: "static",
  adapter: vercel(),
  // /about folded into the Principal section on the homepage
  redirects: {
    "/about": "/#principal",
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
