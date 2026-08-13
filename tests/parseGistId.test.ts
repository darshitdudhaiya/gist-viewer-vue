import { describe, expect, it } from "vitest";
import { parseGistId } from "../src/utils/parseGistId";

describe("parseGistId", () => {
  it("accepts a raw gist id", () => {
    expect(parseGistId("daaa3154393f72d5b11a943538fd4684")).toBe(
      "daaa3154393f72d5b11a943538fd4684",
    );
  });

  it("parses a gist.github.com URL", () => {
    expect(
      parseGistId(
        "https://gist.github.com/darshitdudhaiya/daaa3154393f72d5b11a943538fd4684",
      ),
    ).toBe("daaa3154393f72d5b11a943538fd4684");
  });

  it("parses an embed .js URL", () => {
    expect(parseGistId("https://gist.github.com/octocat/abc1234.js")).toBe("abc1234");
  });

  it("returns null for empty or invalid input", () => {
    expect(parseGistId("")).toBeNull();
    expect(parseGistId("not a gist")).toBeNull();
    expect(parseGistId("https://github.com/octocat/Hello-World")).toBeNull();
  });
});
