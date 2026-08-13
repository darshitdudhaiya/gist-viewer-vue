import { ref } from "vue";
import { detectLanguage } from "./useLanguageDetector";
import { parseGistId } from "../utils/parseGistId";
import { Prism } from "../utils/Prism";

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

function highlightCode(content: string, languageClass: string): string {
  const grammar = Prism.languages[languageClass] || Prism.languages.plaintext;
  return Prism.highlight(content, grammar, languageClass);
}

function statusMessage(status: number): string {
  if (status === 404) {
    return "Gist not found. Check the URL or id.";
  }
  if (status === 403) {
    return "GitHub API rate limit reached. Pass a personal access token via the `token` prop.";
  }
  if (status === 401) {
    return "GitHub rejected the provided token.";
  }
  return `Failed to fetch gist (${status})`;
}

async function readFileContent(
  file: GithubGistFile,
  headers: HeadersInit,
  signal: AbortSignal,
): Promise<string> {
  if (file.truncated && file.raw_url) {
    const rawResponse = await fetch(file.raw_url, { headers, signal });
    if (!rawResponse.ok) {
      throw new Error("Failed to fetch truncated gist file");
    }
    return rawResponse.text();
  }

  return file.content ?? "";
}

export function useGistLoader() {
  const files = ref<Record<string, GistFile>>({});
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  let abortController: AbortController | null = null;

  const loadGist = async (gistUrl: string, options: LoadGistOptions = {}) => {
    abortController?.abort();
    abortController = new AbortController();
    const { signal } = abortController;

    isLoading.value = true;
    error.value = null;
    files.value = {};

    try {
      const gistId = parseGistId(gistUrl);
      if (!gistId) {
        throw new Error("Invalid gist URL or id");
      }

      const headers: Record<string, string> = {
        Accept: "application/vnd.github+json",
      };
      if (options.token) {
        headers.Authorization = `Bearer ${options.token}`;
      }

      const response = await fetch(`https://api.github.com/gists/${gistId}`, {
        headers,
        signal,
      });

      if (!response.ok) {
        throw new Error(statusMessage(response.status));
      }

      const data = (await response.json()) as {
        files?: Record<string, GithubGistFile>;
      };
      const gistFiles = data.files ?? {};
      const entries = Object.entries(gistFiles);

      if (entries.length === 0) {
        throw new Error("This gist has no files");
      }

      const selected = options.file
        ? entries.filter(([filename]) => filename === options.file)
        : entries;

      if (options.file && selected.length === 0) {
        throw new Error(`File "${options.file}" was not found in this gist`);
      }

      const nextFiles: Record<string, GistFile> = {};

      for (const [filename, file] of selected) {
        const { displayName: language, prismClass: languageClass } =
          detectLanguage(filename);
        const content = await readFileContent(file, headers, signal);

        nextFiles[filename] = {
          filename,
          language,
          languageClass,
          content,
          highlightedContent: highlightCode(content, languageClass),
          rawUrl: file.raw_url,
        };
      }

      files.value = nextFiles;
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        return;
      }
      error.value = err instanceof Error ? err.message : "Failed to load gist";
    } finally {
      if (!signal.aborted) {
        isLoading.value = false;
      }
    }
  };

  return {
    files,
    isLoading,
    error,
    loadGist,
  };
}
