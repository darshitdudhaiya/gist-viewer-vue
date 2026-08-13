# Security policy

## Supported versions

| Version | Supported |
| ------- | --------- |
| 1.x     | Yes       |

## Reporting a vulnerability

Please do **not** open a public issue for security problems.

Email [darshitdudhaiya201@gmail.com](mailto:darshitdudhaiya201@gmail.com) with:

- a description of the issue
- steps to reproduce
- impact (for example XSS, token leakage, or unexpected network calls)

You should receive a reply within 7 days.

## Notes

- The component fetches public gist data from `https://api.github.com`.
- If you pass a `token`, it is sent only as a `Authorization: Bearer` header to GitHub.
- Highlighted markup is generated locally with Prism from gist file text.
