import type { TypedFlatConfigItem } from "@antfu/eslint-config";

import * as pluginImportX from "eslint-plugin-import-x";
import pluginPerfectionist from "eslint-plugin-perfectionist";

export function imports(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/imports",
        plugins: {
            import: pluginImportX,
            perfectionist: pluginPerfectionist,
        },
        rules: {
            "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
            "import/first": "error",
            "import/no-duplicates": "error",
            "import/no-mutable-exports": "error",
            "import/no-named-default": "warn",
            "import/no-self-import": "error",
            "import/no-webpack-loader-syntax": "error",
            // "import/newline-after-import": ["warn", { count: 1, exactCount: true }],

            "perfectionist/sort-exports": ["warn", { order: "asc", type: "natural" }],
            "perfectionist/sort-imports": [
                "warn",
                {
                    groups: [
                        "type",
                        ["parent-type", "sibling-type", "index-type", "internal-type"],

                        "builtin",
                        "external",
                        "internal",
                        ["parent", "sibling", "index"],
                        "side-effect",
                        "object",
                        "unknown",
                    ],
                    newlinesBetween: "ignore",
                    order: "asc",
                    type: "natural",
                },
            ],
            "perfectionist/sort-named-exports": ["warn", { order: "asc", type: "natural" }],
            "perfectionist/sort-named-imports": ["warn", { order: "asc", type: "natural" }],
        },
    };
}
