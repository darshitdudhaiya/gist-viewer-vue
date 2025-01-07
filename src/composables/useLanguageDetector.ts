interface LanguageInfo {
  displayName: string;
  prismClass: string;
}

export function useLanguageDetector() {
  const detectLanguage = (filename: string): LanguageInfo => {
    const ext = filename.split(".").pop()?.toLowerCase();
    const languageMap: Record<string, LanguageInfo> = {
      js: { displayName: "JavaScript", prismClass: "javascript" },
      ts: { displayName: "TypeScript", prismClass: "typescript" },
      jsx: { displayName: "React JSX", prismClass: "jsx" },
      tsx: { displayName: "React TSX", prismClass: "tsx" },
      html: { displayName: "HTML", prismClass: "html" },
      css: { displayName: "CSS", prismClass: "css" },
      scss: { displayName: "SCSS", prismClass: "scss" },
      less: { displayName: "LESS", prismClass: "less" },
      json: { displayName: "JSON", prismClass: "json" },
      xml: { displayName: "XML", prismClass: "xml" },
      yaml: { displayName: "YAML", prismClass: "yaml" },
      yml: { displayName: "YAML", prismClass: "yaml" },
      md: { displayName: "Markdown", prismClass: "markdown" },
      py: { displayName: "Python", prismClass: "python" },
      java: { displayName: "Java", prismClass: "java" },
      kt: { displayName: "Kotlin", prismClass: "kotlin" },
      dart: { displayName: "Dart", prismClass: "dart" },
      cpp: { displayName: "C++", prismClass: "cpp" },
      c: { displayName: "C", prismClass: "c" },
      cs: { displayName: "C#", prismClass: "csharp" },
      go: { displayName: "Go", prismClass: "go" },
      rs: { displayName: "Rust", prismClass: "rust" },
      php: { displayName: "PHP", prismClass: "php" },
      rb: { displayName: "Ruby", prismClass: "ruby" },
      swift: { displayName: "Swift", prismClass: "swift" },
      pl: { displayName: "Perl", prismClass: "perl" },
      sh: { displayName: "Shell Script", prismClass: "bash" },
      bash: { displayName: "Shell Script", prismClass: "bash" },
      sql: { displayName: "SQL", prismClass: "sql" },
      r: { displayName: "R", prismClass: "r" },
      tex: { displayName: "LaTeX", prismClass: "latex" },
      lua: { displayName: "Lua", prismClass: "lua" },
      vb: { displayName: "Visual Basic", prismClass: "vbnet" },
      scala: { displayName: "Scala", prismClass: "scala" },
      h: { displayName: "C Header", prismClass: "c" },
      tsql: { displayName: "T-SQL", prismClass: "tsql" },
      asp: { displayName: "ASP.NET", prismClass: "aspnet" },
      vue: { displayName: "Vue.js", prismClass: "javascript" },
      log: { displayName: "Log", prismClass: "plaintext" },
      txt: { displayName: "Plain Text", prismClass: "plaintext" },
      ini: { displayName: "INI Config", prismClass: "ini" },
      bat: { displayName: "Batch Script", prismClass: "batch" },
      dockerfile: { displayName: "Dockerfile", prismClass: "docker" },
      makefile: { displayName: "Makefile", prismClass: "makefile" },
      properties: { displayName: "Properties", prismClass: "properties" },
      toml: { displayName: "TOML", prismClass: "toml" },
      config: { displayName: "Configuration", prismClass: "plaintext" },
      cppm: { displayName: "C++ Module", prismClass: "cpp" },
    };

    return (
      languageMap[ext || ""] || {
        displayName: "Unknown File Type",
        prismClass: "plaintext",
      }
    );
  };

  return {
    detectLanguage,
  };
}
