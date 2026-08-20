import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// If deploying to https://<user>.github.io/<repo>, set `site` and `base` accordingly.
// For a custom domain or user/organization site at the root, just set `site`.
export default defineConfig({
  site: "https://dalkasystems.com",
  // base: "/dalka",
  i18n: {
    defaultLocale: "sl",
    locales: ["ba", "de", "sl"],
    routing: {
      prefixDefaultLocale: true,
      // Astro's built-in redirect injects a 2s meta-refresh page at "/".
      // We handle the "/" -> "/<lang>/" redirect ourselves in
      // src/pages/index.astro for an instant, flash-free redirect instead.
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
