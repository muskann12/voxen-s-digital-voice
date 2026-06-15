import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  
  vite: {
    build: {
      chunkSizeWarningLimit: 1500,
    },
  },
  tanstackStart: {
    server: { entry: "server", preset: "vercel" },
    spa: { enabled: true, prerender: { outputPath: "/index" } },
    pages: [{ path: "/", prerender: { enabled: true, outputPath: "/index" } }],
    sitemap: { enabled: false },
  },
});