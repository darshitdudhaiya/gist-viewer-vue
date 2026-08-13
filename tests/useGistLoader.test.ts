import { afterEach, describe, expect, it, vi } from "vitest";
import { useGistLoader } from "../src/composables/useGistLoader";

const gistPayload = {
  files: {
    "hello.ts": {
      filename: "hello.ts",
      language: "TypeScript",
      content: "const n = 1;\n",
      raw_url: "https://gist.githubusercontent.com/hello.ts",
      truncated: false,
    },
    "readme.md": {
      filename: "readme.md",
      language: "Markdown",
      content: "# Hello",
      raw_url: "https://gist.githubusercontent.com/readme.md",
      truncated: false,
    },
  },
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("useGistLoader", () => {
  it("loads gist files from the GitHub API", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => gistPayload,
    });
    vi.stubGlobal("fetch", fetchMock);

    const { files, isLoading, error, loadGist } = useGistLoader();
    await loadGist("https://gist.github.com/user/daaa3154393f72d5b11a943538fd4684");

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.github.com/gists/daaa3154393f72d5b11a943538fd4684",
      expect.objectContaining({
        headers: expect.objectContaining({
          Accept: "application/vnd.github+json",
        }),
      }),
    );
    expect(Object.keys(files.value)).toEqual(["hello.ts", "readme.md"]);
    expect(files.value["hello.ts"].language).toBe("TypeScript");
    expect(files.value["hello.ts"].highlightedContent).toContain("const");
    expect(isLoading.value).toBe(false);
    expect(error.value).toBeNull();
  });

  it("filters a single file and sends a token", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => gistPayload,
    });
    vi.stubGlobal("fetch", fetchMock);

    const { files, loadGist } = useGistLoader();
    await loadGist("daaa3154393f72d5b11a943538fd4684", {
      file: "readme.md",
      token: "ghp_test",
    });

    expect(fetchMock.mock.calls[0][1].headers.Authorization).toBe("Bearer ghp_test");
    expect(Object.keys(files.value)).toEqual(["readme.md"]);
  });

  it("surfaces GitHub rate-limit errors", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 403,
      }),
    );

    const { error, loadGist } = useGistLoader();
    await loadGist("daaa3154393f72d5b11a943538fd4684");

    expect(error.value).toMatch(/rate limit/i);
  });

  it("rejects an invalid gist id", async () => {
    const fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);

    const { error, loadGist } = useGistLoader();
    await loadGist("not-a-gist");

    expect(fetchMock).not.toHaveBeenCalled();
    expect(error.value).toBe("Invalid gist URL or id");
  });
});
