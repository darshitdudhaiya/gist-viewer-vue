<script setup lang="ts">
import { GistViewer } from "./index";

const gistUrl =
  "https://gist.github.com/darshitdudhaiya/daaa3154393f72d5b11a943538fd4684";
</script>

<template>
  <main class="page">
    <header class="hero">
      <p class="eyebrow">Vue 3</p>
      <h1>gist-viewer-vue</h1>
      <p class="lede">
        Drop a GitHub Gist into your Vue app. Syntax highlighting, line numbers, and a
        copy button are included.
      </p>
      <pre class="install">npm install gist-viewer-vue</pre>
    </header>

    <section class="example">
      <div class="example-head">
        <h2>Live example</h2>
        <a :href="gistUrl" target="_blank" rel="noopener noreferrer">Open gist</a>
      </div>
      <GistViewer :gist-url="gistUrl" file="Card.kt" theme="light" />
    </section>
  </main>
</template>

<style scoped>
.page {
  width: min(880px, 100%);
  margin: 0 auto;
}

.hero {
  margin-bottom: 2rem;
}

.eyebrow {
  margin: 0 0 0.4rem;
  color: #656d76;
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 0.6rem;
  font-size: 2rem;
}

.lede {
  margin: 0 0 1rem;
  color: #4b5563;
  max-width: 38rem;
}

.install {
  display: inline-block;
  margin: 0;
  padding: 0.7rem 0.9rem;
  border: 1px solid #d0d7de;
  border-radius: 8px;
  background: #f6f8fa;
  color: #1f2328;
  font-size: 0.9rem;
}

.example-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.85rem;
}

h2 {
  margin: 0;
  font-size: 1.05rem;
}

a {
  color: #0969da;
  text-decoration: none;
  font-size: 0.9rem;
}

a:hover {
  text-decoration: underline;
}
</style>
