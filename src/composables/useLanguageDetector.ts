export interface LanguageInfo {
  displayName: string;
  prismClass: string;
}

const LANGUAGE_MAP: Record<string, LanguageInfo> = {
  js: { displayName: "JavaScript", prismClass: "javascript" },
  mjs: { displayName: "JavaScript", prismClass: "javascript" },
  cjs: { displayName: "JavaScript", prismClass: "javascript" },
  ts: { displayName: "TypeScript", prismClass: "typescript" },
  jsx: { displayName: "React JSX", prismClass: "jsx" },
  tsx: { displayName: "React TSX", prismClass: "tsx" },
  html: { displayName: "HTML", prismClass: "markup" },
  htm: { displayName: "HTML", prismClass: "markup" },
  css: { displayName: "CSS", prismClass: "css" },
  scss: { displayName: "SCSS", prismClass: "scss" },
  less: { displayName: "LESS", prismClass: "less" },
  json: { displayName: "JSON", prismClass: "json" },
  xml: { displayName: "XML", prismClass: "markup" },
  yaml: { displayName: "YAML", prismClass: "yaml" },
  yml: { displayName: "YAML", prismClass: "yaml" },
  md: { displayName: "Markdown", prismClass: "markdown" },
  mdx: { displayName: "MDX", prismClass: "markdown" },
  py: { displayName: "Python", prismClass: "python" },
  java: { displayName: "Java", prismClass: "java" },
  kt: { displayName: "Kotlin", prismClass: "kotlin" },
  dart: { displayName: "Dart", prismClass: "dart" },
  cpp: { displayName: "C++", prismClass: "cpp" },
  cc: { displayName: "C++", prismClass: "cpp" },
  cxx: { displayName: "C++", prismClass: "cpp" },
  c: { displayName: "C", prismClass: "c" },
  h: { displayName: "C Header", prismClass: "c" },
  cs: { displayName: "C#", prismClass: "csharp" },
  go: { displayName: "Go", prismClass: "go" },
  rs: { displayName: "Rust", prismClass: "rust" },
  php: { displayName: "PHP", prismClass: "php" },
  rb: { displayName: "Ruby", prismClass: "ruby" },
  swift: { displayName: "Swift", prismClass: "swift" },
  pl: { displayName: "Perl", prismClass: "perl" },
  sh: { displayName: "Shell Script", prismClass: "bash" },
  bash: { displayName: "Shell Script", prismClass: "bash" },
  zsh: { displayName: "Shell Script", prismClass: "bash" },
  sql: { displayName: "SQL", prismClass: "sql" },
  r: { displayName: "R", prismClass: "r" },
  lua: { displayName: "Lua", prismClass: "lua" },
  scala: { displayName: "Scala", prismClass: "scala" },
  vue: { displayName: "Vue", prismClass: "markup" },
  svelte: { displayName: "Svelte", prismClass: "markup" },
  txt: { displayName: "Plain Text", prismClass: "plaintext" },
  log: { displayName: "Log", prismClass: "plaintext" },
  ini: { displayName: "INI Config", prismClass: "ini" },
  bat: { displayName: "Batch Script", prismClass: "batch" },
  dockerfile: { displayName: "Dockerfile", prismClass: "docker" },
  makefile: { displayName: "Makefile", prismClass: "makefile" },
  toml: { displayName: "TOML", prismClass: "toml" },
  env: { displayName: "Environment", prismClass: "ini" },
};

function filenameKey(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower === "dockerfile" || lower.endsWith("/dockerfile")) {
    return "dockerfile";
  }
  if (lower === "makefile" || lower.endsWith("/makefile")) {
    return "makefile";
  }
  return lower.split(".").pop() || "";
}

export function detectLanguage(filename: string): LanguageInfo {
  return (
    LANGUAGE_MAP[filenameKey(filename)] || {
      displayName: "Plain Text",
      prismClass: "plaintext",
    }
  );
}

export function useLanguageDetector() {
  return { detectLanguage };
}
