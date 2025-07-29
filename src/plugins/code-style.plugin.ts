import type { TypedFlatConfigItem } from "@antfu/eslint-config";

// import pluginStylistic from "@stylistic/eslint-plugin";
import pluginCasePolice from "eslint-plugin-case-police";
// import pluginPerfectionist from "eslint-plugin-perfectionist";

export function codeStyle(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/code-style",
        plugins: {
            // perfectionist: pluginPerfectionist,
            // style: pluginStylistic,
            "case-police": pluginCasePolice,
        },
        rules: {
            "case-police/string-check": "warn",
        },
    };
}
