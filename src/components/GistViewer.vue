<template>
  <div class="gvv" :data-theme="theme">
    <div class="gvv-stack">
      <div v-if="isLoading" class="gvv-status" role="status" aria-live="polite">
        <div class="gvv-spinner" aria-hidden="true"></div>
        <span class="gvv-sr-only">Loading gist</span>
      </div>

      <div v-else-if="error" class="gvv-error" role="alert">{{ error }}</div>

      <article v-for="(gistFile, filename) in files" :key="filename" class="gvv-file">
        <header class="gvv-header">
          <span class="gvv-filename">{{ filename }}</span>
          <span class="gvv-language">{{ gistFile.language }}</span>
        </header>

        <div class="gvv-body">
          <div v-if="showLineNumbers" class="gvv-lines" aria-hidden="true">
            <div v-for="(_line, index) in lineCount(gistFile.content)" :key="index">
              {{ index + 1 }}
            </div>
          </div>

          <pre
            class="gvv-code"
          ><code :class="'language-' + gistFile.languageClass" v-html="gistFile.highlightedContent"></code></pre>

          <CopyButton :content="gistFile.content" />
        </div>

        <footer v-if="showFooter" class="gvv-footer">
          <span v-if="showAttribution">Gist viewer for Vue</span>
          <a
            :href="gistFile.rawUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="gvv-link"
          >
            View Raw
          </a>
        </footer>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useGistLoader } from "../composables/useGistLoader";
import type { GistTheme } from "../types";
import CopyButton from "./CopyButton.vue";

const props = withDefaults(
  defineProps<{
    gistUrl: string;
    file?: string;
    token?: string;
    theme?: GistTheme;
    showLineNumbers?: boolean;
    showFooter?: boolean;
    showAttribution?: boolean;
  }>(),
  {
    file: undefined,
    token: undefined,
    theme: "auto",
    showLineNumbers: true,
    showFooter: true,
    showAttribution: false,
  },
);

const { files, isLoading, error, loadGist } = useGistLoader();

const lineCount = (content: string) => content.split("\n");

watch(
  () => [props.gistUrl, props.file, props.token] as const,
  ([gistUrl, file, token]) => {
    void loadGist(gistUrl, { file, token });
  },
  { immediate: true },
);
</script>
