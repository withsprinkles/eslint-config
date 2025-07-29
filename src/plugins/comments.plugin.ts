import type { TypedFlatConfigItem } from "@antfu/eslint-config";
// @ts-expect-error no types exist for this module
import pluginComments from "@eslint-community/eslint-plugin-eslint-comments";

export function comments(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/comments",
        plugins: {
            "eslint-comments": pluginComments,
        },
        rules: {
            "eslint-comments/no-aggregating-enable": "error",
            "eslint-comments/no-duplicate-disable": "error",
            "eslint-comments/no-unlimited-disable": "error",
            "eslint-comments/no-unused-enable": "error",
        },
    };
}
