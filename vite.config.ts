import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [vue()],
  publicDir: false,
  resolve: {
    alias: {
      "gist-viewer-vue": resolve(__dirname, "src/index.ts"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "GistViewerVue",
      formats: ["es", "umd"],
      fileName: (format) =>
        format === "es" ? "gist-viewer-vue.js" : "gist-viewer-vue.umd.cjs",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue",
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "gist-viewer-vue.css";
          }
          return assetInfo.name ?? "asset";
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    cssCodeSplit: true,
  },
});
