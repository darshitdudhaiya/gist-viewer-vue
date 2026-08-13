# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2026-08-13

### Added

- Named `GistViewer` export plus `useGistLoader`, `detectLanguage`, and `parseGistId`.
- Optional `file`, `token`, `theme`, `showLineNumbers`, `showFooter`, and `showAttribution` props.
- Self-contained CSS shipped as `gist-viewer-vue/style.css` (Tailwind is no longer required by consumers).
- Light, dark, and system theme support.
- Reloads when `gistUrl`, `file`, or `token` change.
- Truncated gist files are fetched from their raw URL.
- Clearer GitHub API errors, including rate-limit guidance.
- Vitest coverage for gist parsing, language detection, and the loader.
- GitHub Actions CI (Node 20/22), npm release workflow, and Dependabot.
- Live demo on GitHub Pages and a simpler README.

### Changed

- Vue is now a peer dependency only.
- Package exports now include TypeScript types and a CSS entry.
- Language detection covers more filenames, including `Dockerfile` and `Makefile`.

### Removed

- Unused `@nuxt/icon` dependency.
- Bundling Vue inside the published package.

### Fixed

- Local registration now imports the component instead of the plugin object.
- Invalid gist URLs no longer hit the GitHub API.

## [1.1.0] - 2025-01-08

- Published Vue 3 gist viewer with Prism highlighting and copy button.
