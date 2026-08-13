import { afterEach, describe, expect, it, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import GistViewer from "../src/components/GistViewer.vue";

afterEach(() => {
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("GistViewer", () => {
  it("renders highlighted gist content", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          files: {
            "hello.ts": {
              filename: "hello.ts",
              language: "TypeScript",
              content: "const n = 1;",
              raw_url: "https://example.com/hello.ts",
              truncated: false,
            },
          },
        }),
      }),
    );

    const wrapper = mount(GistViewer, {
      props: { gistUrl: "daaa3154393f72d5b11a943538fd4684" },
    });

    await flushPromises();

    expect(wrapper.find(".gvv-filename").text()).toBe("hello.ts");
    expect(wrapper.find("code").classes()).toContain("language-typescript");
    expect(wrapper.find("code").html()).toContain("const");
  });

  it("shows an error for an invalid gist id", async () => {
    const wrapper = mount(GistViewer, {
      props: { gistUrl: "not-valid" },
    });

    await flushPromises();

    expect(wrapper.find(".gvv-error").text()).toBe("Invalid gist URL or id");
  });
});
