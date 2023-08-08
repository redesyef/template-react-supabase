import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  workbox: {
    navigateFallback: "/",
    globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallbackAllowlist: [/^\/$/],
    type: "module",
  },
  manifest: {
    lang: "en",
    name: "template",
    short_name: "template",
    description: "template",
    icons: [
      {
        src: "/maskable_icon_x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/maskable_icon_x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "apple touch icon",
      },
      {
        src: "/masked-icon.svg",
        sizes: "225x225",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    theme_color: "#000000",
    background_color: "#ffffff",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "natural",
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
