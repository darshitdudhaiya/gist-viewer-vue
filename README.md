# gist-viewer-vue

[![npm version](https://img.shields.io/npm/v/gist-viewer-vue.svg)](https://www.npmjs.com/package/gist-viewer-vue)
[![CI](https://github.com/darshitdudhaiya/gist-viewer-vue/actions/workflows/ci.yml/badge.svg)](https://github.com/darshitdudhaiya/gist-viewer-vue/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/gist-viewer-vue.svg)](./LICENSE)
[![downloads](https://img.shields.io/npm/dm/gist-viewer-vue.svg)](https://www.npmjs.com/package/gist-viewer-vue)

Vue 3 component for embedding GitHub Gists. It fetches gist files, highlights them, and ships its own styles so consumers do not need Tailwind.

## Features

- Vue 3 (and Nuxt 3 / VitePress) compatible
- Accepts a gist URL or raw gist id
- Syntax highlighting with line numbers and copy
- Optional single-file filter and GitHub token
- Light, dark, and system themes
- TypeScript types included

## Install

```bash
npm install gist-viewer-vue
```

Peer dependency: `vue` `^3.3.0`.

## Usage

Import the CSS once in your app entry:

```ts
import "gist-viewer-vue/style.css";
```

### Local registration

```vue
<script setup lang="ts">
import { GistViewer } from "gist-viewer-vue";
</script>

<template>
  <GistViewer gist-url="https://gist.github.com/octocat/abc123" />
</template>
```

A raw gist id also works:

```vue
<GistViewer gist-url="abc123" file="hello.ts" theme="dark" />
```

### Plugin registration

```ts
import { createApp } from "vue";
import GistViewer from "gist-viewer-vue";
import "gist-viewer-vue/style.css";
import App from "./App.vue";

createApp(App).use(GistViewer).mount("#app");
```

### Nuxt 3

```ts
// plugins/gist-viewer.ts
import { GistViewer } from "gist-viewer-vue";
import "gist-viewer-vue/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("GistViewer", GistViewer);
});
```

## Props

| Prop              | Type                          | Default  | Description                                                                             |
| ----------------- | ----------------------------- | -------- | --------------------------------------------------------------------------------------- |
| `gistUrl`         | `string`                      | required | Gist URL or gist id                                                                     |
| `file`            | `string`                      | —        | Show only this filename                                                                 |
| `token`           | `string`                      | —        | GitHub token. Use this if you hit the unauthenticated API rate limit (60 requests/hour) |
| `theme`           | `'light' \| 'dark' \| 'auto'` | `'auto'` | Color theme                                                                             |
| `showLineNumbers` | `boolean`                     | `true`   | Render line numbers                                                                     |
| `showFooter`      | `boolean`                     | `true`   | Show the raw-file footer                                                                |
| `showAttribution` | `boolean`                     | `false`  | Show a small package credit in the footer                                               |

## GitHub rate limits

Unauthenticated calls to `api.github.com` are limited. For docs sites or pages that embed many gists, create a fine-grained token with public gist read access and pass it as `token`. Keep tokens on a server when you can; do not commit them.

## Development

```bash
npm install
npm run dev
npm test
npm run build
```

See [CONTRIBUTING.md](./CONTRIBUTING.md) for PR guidelines.

## License

[MIT](./LICENSE)
