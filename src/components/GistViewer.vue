<template>
  <div class="space-y-4">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex items-center justify-center py-8">
      <div class="w-8 h-8 border-4 border-[#9D61FF] border-t-transparent rounded-full animate-spin"></div>
    </div>
    
    <!-- Error State -->
    <div v-else-if="error" class="text-red-400 p-4">{{ error }}</div>
    
    <!-- Files -->
    <template v-else>
      <div v-for="(file, filename) in files" :key="filename" class="border border-gray-300 rounded-lg bg-white shadow">
        <!-- File Header -->
        <div class="border-b border-gray-300 p-3 flex flex-wrap justify-between items-center gap-2">
          <span class="font-mono text-sm text-gray-700 break-all sm:break-normal">{{ filename }}</span>
          <span class="text-xs text-gray-500">{{ file.language }}</span>
        </div>
        
        <!-- File Content -->
        <div class="relative overflow-hidden">
          <div class="flex flex-col sm:flex-row overflow-x-auto">
            <!-- Line Numbers -->
            <div class="hidden sm:block line-numbers select-none text-right pr-4 py-4 border-r border-gray-300 bg-gray-100 shrink-0">
              <div v-for="(line, index) in file.content.split('\n')" :key="index" class="text-gray-500 text-sm font-mono leading-6 px-2">
                {{ index + 1 }}
              </div>
            </div>
            
            <!-- Code Content -->
            <div class="p-4 w-full overflow-x-auto">
              <pre class="text-left text-sm whitespace-pre"><code :class="`language-${file.languageClass}`" v-html="file.highlightedContent"></code></pre>
            </div>
          </div>
          
          <!-- Copy Button -->
          <CopyButton :content="file.content" class="absolute top-2 right-2 z-10" />
        </div>
        
        <!-- Footer -->
        <div class="border-t border-gray-300 p-2 text-xs flex flex-wrap justify-between items-center gap-2 text-gray-500">
          <span>Gist viewer made ♥️ by Darshit Dudhaiya</span>
          <a :href="file.rawUrl" rel="noopener noreferrer" class="text-blue-500 hover:underline">View Raw</a>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useGistLoader } from "../composables/useGistLoader";
import CopyButton from "./CopyButton.vue";

const props = defineProps<{
  gistUrl: string;
}>();

const { files, isLoading, error, loadGist } = useGistLoader();

onMounted(async () => {
  await loadGist(props.gistUrl);
});
</script>

<style>
pre {
  @apply bg-white text-gray-800 rounded-md;
  font-size: 0.875rem;
  line-height: 1.6;
  min-width: min-content;
}

.line-numbers {
  @apply bg-gray-50 text-gray-500 select-none;
  min-width: 3rem;
}

/* Syntax highlighting */
.token.comment { @apply text-gray-500; }
.token.punctuation { @apply text-gray-600; }
.token.property,
.token.tag,
.token.boolean,
.token.number { @apply text-red-600; }
.token.selector,
.token.attr-name,
.token.string { @apply text-green-600; }
.token.operator,
.token.entity,
.token.url { @apply text-blue-600; }
.token.keyword { @apply text-red-600; }
.token.function { @apply text-purple-600; }
.token.class-name { @apply text-blue-600; }
</style>