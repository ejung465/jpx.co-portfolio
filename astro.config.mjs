import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://ethanjung.dev",
  output: "hybrid",
  adapter: vercel(),
  integrations: [tailwind({ applyBaseStyles: false })],
});
