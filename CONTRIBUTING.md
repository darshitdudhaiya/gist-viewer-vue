# Contributing

Thanks for helping improve `gist-viewer-vue`.

## Local setup

Requirements: Node.js 18+ (20 LTS is recommended).

```bash
git clone https://github.com/darshitdudhaiya/gist-viewer-vue.git
cd gist-viewer-vue
npm install
npm run dev
```

## Checks to run before a PR

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

- `npm run dev` starts the playground used to visually check the component.
- `npm test` runs unit tests with Vitest.
- `npm run build` produces the published `dist/` files.
- Public TypeScript types live in `types/index.d.ts`. Update that file when the API changes.

## Pull requests

1. Fork the repo and create a branch from `main`.
2. Keep the change focused. Open separate PRs for unrelated work.
3. Add or update tests when behavior changes.
4. Update `README.md` and `CHANGELOG.md` when the public API changes.
5. Open a pull request against `main`. CI must pass before merge.

## Commit style

Use a short, imperative subject:

- `Add token support for GitHub API rate limits`
- `Fix gist id parsing for embed URLs`

## Publishing a release

1. Add an `NPM_TOKEN` repository secret (npm access token with publish rights).
2. Bump the version in `package.json` and `CHANGELOG.md`.
3. Create a GitHub Release (or run the **Release** workflow). The workflow runs checks, builds, and publishes with provenance.

## Reporting issues

Use the GitHub issue templates. Include the package version, Vue version, and a gist URL that reproduces the problem.
