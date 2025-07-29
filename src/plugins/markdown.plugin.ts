import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import { parserPlain } from "@antfu/eslint-config";

import pluginMarkdown from "@eslint/markdown";
import { GLOB_MARKDOWN } from "../globs";

export function markdown(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/markdown",
        files: [GLOB_MARKDOWN],
        languageOptions: {
            parser: parserPlain,
        },
        plugins: {
            markdown: pluginMarkdown,
        },
        rules: {
            "markdown/fenced-code-language": "warn",
            "markdown/heading-increment": "warn",
            "markdown/no-duplicate-headings": "warn",
            "markdown/no-empty-links": "warn",
            "markdown/no-html": "off",
        },
    };
}
