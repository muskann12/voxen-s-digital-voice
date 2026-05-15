import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  vite: {
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            "vendor-react": ["react", "react-dom"],
            "vendor-tanstack": [
              "@tanstack/react-router",
              "@tanstack/react-query",
              "@tanstack/react-start",
            ],
          },
        },
      },
    },
  },
  tanstackStart: {
    server: { entry: "server" },
    // Render as a static SPA so Vercel can serve it without a Node/Worker runtime
    spa: { enabled: true },
    pages: [{ path: "/", prerender: { enabled: true } }],
    sitemap: { enabled: false },
  },
});
