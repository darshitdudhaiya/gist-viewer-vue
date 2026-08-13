import { describe, expect, it } from "vitest";
import { detectLanguage } from "../src/composables/useLanguageDetector";

describe("detectLanguage", () => {
  it("maps common extensions", () => {
    expect(detectLanguage("app.ts")).toEqual({
      displayName: "TypeScript",
      prismClass: "typescript",
    });
    expect(detectLanguage("Main.java")).toEqual({
      displayName: "Java",
      prismClass: "java",
    });
  });

  it("detects Dockerfile and Makefile by name", () => {
    expect(detectLanguage("Dockerfile").prismClass).toBe("docker");
    expect(detectLanguage("Makefile").prismClass).toBe("makefile");
  });

  it("falls back to plaintext", () => {
    expect(detectLanguage("notes.unknown")).toEqual({
      displayName: "Plain Text",
      prismClass: "plaintext",
    });
  });
});
