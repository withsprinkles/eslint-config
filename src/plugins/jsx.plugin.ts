import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import { GLOB_JSX, GLOB_TSX } from "../globs.ts";

export function jsx(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/jsx",
        files: [GLOB_JSX, GLOB_TSX],
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    };
}
