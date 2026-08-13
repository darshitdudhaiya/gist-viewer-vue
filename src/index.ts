import type { App, Plugin } from "vue";
import GistViewer from "./components/GistViewer.vue";
import "./styles/gist-viewer.css";

export { GistViewer };
export { useGistLoader } from "./composables/useGistLoader";
export { useLanguageDetector, detectLanguage } from "./composables/useLanguageDetector";
export { parseGistId } from "./utils/parseGistId";
export type {
  GistFile,
  GithubGistFile,
  LoadGistOptions,
} from "./composables/useGistLoader";
export type { LanguageInfo } from "./composables/useLanguageDetector";
export type { GistTheme } from "./types";

export const plugin: Plugin = {
  install(app: App) {
    app.component("GistViewer", GistViewer);
  },
};

export default plugin;
