import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    transformer: "postcss",
  },
  base: "/", // 👈 penting untuk routing agar refresh gak error
  build: {
    outDir: "dist", // 👈 pastikan hasil build disimpan di dist
  },
});
