<script setup lang="ts">
import { GistViewer } from "./index";
</script>

<template>
  <main class="demo">
    <h1>gist-viewer-vue</h1>
    <p>Playground for the Vue 3 GitHub Gist component.</p>
    <GistViewer
      gist-url="https://gist.github.com/darshitdudhaiya/daaa3154393f72d5b11a943538fd4684"
    />
  </main>
</template>

<style scoped>
.demo {
  width: min(960px, 100%);
  margin: 0 auto;
  text-align: left;
}

h1 {
  margin: 0 0 0.35rem;
}

p {
  margin: 0 0 1.5rem;
  color: #8b949e;
}
</style>
