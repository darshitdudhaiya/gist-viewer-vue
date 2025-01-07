import { ref } from "vue";
import { useLanguageDetector } from "./useLanguageDetector";
import { Prism } from "../utils/Prism";

interface GistFile {
  filename: string;
  language: string;
  languageClass: string;
  content: string;
  highlightedContent: string;
  rawUrl: string; // Added rawUrl property
}

export function useGistLoader() {
  const files = ref<Record<string, GistFile>>({});
  const isLoading = ref(true);
  const error = ref<string | null>(null);
  const { detectLanguage } = useLanguageDetector();

  const loadGist = async (gistUrl: string) => {
    isLoading.value = true;
    error.value = null;
    files.value = {};

    try {
      const gistId = gistUrl.split("/").pop();
      if (!gistId) {
        throw new Error("Invalid Gist URL");
      }

      const response = await fetch(`https://api.github.com/gists/${gistId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch Gist");
      }

      const data = await response.json();

      // Process each file in the gist
      for (const [filename, file] of Object.entries(data.files)) {
        const fileData = file as any;
        const { displayName: language, prismClass: languageClass } =
          detectLanguage(filename);

        // Ensure Prism.languages[languageClass] exists
        const highlightedContent = Prism.languages[languageClass]
          ? Prism.highlight(
              fileData.content,
              Prism.languages[languageClass],
              languageClass
            )
          : Prism.highlight(
              fileData.content,
              Prism.languages.plaintext,
              "plaintext"
            );

        files.value[filename] = {
          filename,
          language,
          languageClass,
          content: fileData.content,
          highlightedContent,
          rawUrl: fileData.raw_url, // Assign the raw_url from the API response
        };
      }
    } catch (err) {
      console.error("Error loading gist:", err);
      error.value = err instanceof Error ? err.message : "Failed to load gist";
    } finally {
      isLoading.value = false;
    }
  };

  return {
    files,
    isLoading,
    error,
    loadGist,
  };
}
