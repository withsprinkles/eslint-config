export const GLOB_SRC_EXT = "?([cm])[jt]s?(x)";
export const GLOB_SRC = "**/*.?([cm])[jt]s?(x)";

export const GLOB_JS = "**/*.?([cm])js";
export const GLOB_JSX = "**/*.?([cm])jsx";

export const GLOB_TS = "**/*.?([cm])ts";
export const GLOB_TSX = "**/*.?([cm])tsx";

export const GLOB_STYLE = "**/*.{c,le,sc}ss";
export const GLOB_CSS = "**/*.css";
export const GLOB_POSTCSS = "**/*.{p,post}css";
export const GLOB_LESS = "**/*.less";
export const GLOB_SCSS = "**/*.scss";

export const GLOB_JSON = "**/*.json";
export const GLOB_JSON5 = "**/*.json5";
export const GLOB_JSONC = "**/*.jsonc";

export const GLOB_MARKDOWN = "**/*.md";
export const GLOB_MARKDOWN_IN_MARKDOWN = "**/*.md/*.md";
export const GLOB_SVELTE = "**/*.svelte";
export const GLOB_VUE = "**/*.vue";
export const GLOB_YAML = "**/*.y?(a)ml";
export const GLOB_TOML = "**/*.toml";
export const GLOB_XML = "**/*.xml";
export const GLOB_SVG = "**/*.svg";
export const GLOB_HTML = "**/*.htm?(l)";
export const GLOB_ASTRO = "**/*.astro";
export const GLOB_ASTRO_TS = "**/*.astro/*.ts";
export const GLOB_GRAPHQL = "**/*.{g,graph}ql";

export const GLOB_MARKDOWN_CODE = `${GLOB_MARKDOWN}/${GLOB_SRC}`;

export const GLOB_TESTS = [
    `**/__tests__/**/*.${GLOB_SRC_EXT}`,
    `**/*.spec.${GLOB_SRC_EXT}`,
    `**/*.test.${GLOB_SRC_EXT}`,
    `**/*.bench.${GLOB_SRC_EXT}`,
    `**/*.benchmark.${GLOB_SRC_EXT}`,
];

export const GLOB_ALL_SRC = [
    GLOB_SRC,
    GLOB_STYLE,
    GLOB_JSON,
    GLOB_JSON5,
    GLOB_MARKDOWN,
    GLOB_SVELTE,
    GLOB_VUE,
    GLOB_YAML,
    GLOB_XML,
    GLOB_HTML,
];

export const GLOB_EXCLUDE = [
    "**/node_modules",
    "**/dist",
    "**/package-lock.json",
    "**/yarn.lock",
    "**/pnpm-lock.yaml",
    "**/bun.lockb",
    "**/bun.lock",
    "**/deno.lock",

    "**/build",
    "**/dist",
    "**/output",
    "**/.output",
    "**/coverage",
    "**/temp",
    "**/.temp",
    "**/tmp",
    "**/.tmp",
    "**/.history",
    "**/.vitepress/cache",
    "**/.astro",
    "**/.react-router",
    "**/.svelte-kit",
    "**/.vercel",
    "**/.changeset",
    "**/.idea",
    "**/.cache",
    "**/.vite-inspect",
    "**/.yarn",
    "**/vite.config.*.timestamp-*",
    "**/.mf",
    "**/.wrangler",
    "**/.dev.vars*",

    "**/CHANGELOG*.md",
    "**/*.min.*",
    "**/LICENSE*",
    "**/__snapshots__",
    "**/auto-import?(s).d.ts",
    "**/components.d.ts",
    "**/*.tsbuildinfo",
];
