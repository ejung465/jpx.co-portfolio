import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://jpxco.dev",
  output: "hybrid",
  adapter: vercel(),
  // /about folded into the Principal section on the homepage
  redirects: {
    "/about": "/#principal",
  },
  integrations: [tailwind({ applyBaseStyles: false })],
});
