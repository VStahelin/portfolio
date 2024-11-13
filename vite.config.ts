import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "tailwindcss";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Vitor's Portfolio",
        short_name: "Portfolio",
        description: "A portfolio website showcasing Vitor's work",
        start_url: ".",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/favicon.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, //  50 MB (adjust as needed)
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\//,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365,
              },
            },
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "src/components/pages"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@components": path.resolve(__dirname, "src/components"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@ui": path.resolve(__dirname, "src/components/common/ui"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@api": path.resolve(__dirname, "src/api"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@context": path.resolve(__dirname, "src/context"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  build: {
    manifest: true,
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // Split React dependencies into a separate chunk
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendors";
            }

            // Split other common dependencies (e.g., Lodash)
            if (id.includes("lodash")) {
              return "lodash-vendors";
            }

            // Split other vendor dependencies (e.g., Bootstrap)
            if (id.includes("bootstrap")) {
              return "bootstrap-vendors";
            }
          }
        },
      },
    },
  },
});
