import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

export default defineConfig({
  base: "/gist-viewer-vue/",
  plugins: [vue()],
  resolve: {
    alias: {
      "gist-viewer-vue": resolve(__dirname, "src/index.ts"),
    },
  },
  build: {
    outDir: "demo-dist",
    emptyOutDir: true,
  },
});
