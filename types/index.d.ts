import type { App, Plugin, Ref } from "vue";

export interface GistFile {
  filename: string;
  language: string;
  languageClass: string;
  content: string;
  highlightedContent: string;
  rawUrl: string;
}

export interface GithubGistFile {
  filename: string;
  language: string | null;
  content: string | null;
  raw_url: string;
  truncated: boolean;
}

export interface LoadGistOptions {
  token?: string;
  file?: string;
}

export interface LanguageInfo {
  displayName: string;
  prismClass: string;
}

export type GistTheme = "light" | "dark" | "auto";

export interface GistViewerProps {
  gistUrl: string;
  file?: string;
  token?: string;
  theme?: GistTheme;
  showLineNumbers?: boolean;
  showFooter?: boolean;
  showAttribution?: boolean;
}

export declare const GistViewer: new () => {
  $props: GistViewerProps;
};

export declare function useGistLoader(): {
  files: Ref<Record<string, GistFile>>;
  isLoading: Ref<boolean>;
  error: Ref<string | null>;
  loadGist: (gistUrl: string, options?: LoadGistOptions) => Promise<void>;
};

export declare function detectLanguage(filename: string): LanguageInfo;

export declare function useLanguageDetector(): {
  detectLanguage: (filename: string) => LanguageInfo;
};

export declare function parseGistId(input: string): string | null;

export declare const plugin: Plugin & {
  install(app: App): void;
};

export default plugin;
