const GIST_ID_PATTERN = /^[a-f0-9]{7,40}$/i;

/**
 * Accepts a full gist URL, an embed `.js` URL, or a raw gist id.
 */
export function parseGistId(input: string): string | null {
  const value = input.trim();
  if (!value) {
    return null;
  }

  if (GIST_ID_PATTERN.test(value)) {
    return value;
  }

  try {
    const url = new URL(value);
    const segments = url.pathname.split("/").filter(Boolean);
    const last = segments.at(-1)?.replace(/\.js$/i, "");
    if (last && GIST_ID_PATTERN.test(last)) {
      return last;
    }
  } catch {
    return null;
  }

  return null;
}
