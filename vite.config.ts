import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  vite: {
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
    pages: [{ path: "/", prerender: { enabled: true } }],
    sitemap: { enabled: false },
  },
});
