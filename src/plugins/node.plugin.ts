import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import pluginNode from "eslint-plugin-n";

export function node(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/node",
        plugins: {
            node: pluginNode,
        },
        rules: {
            "node/handle-callback-err": ["error", "^(err|error)$"],
            "node/no-deprecated-api": "error",
            "node/no-exports-assign": "error",
            "node/no-new-require": "error",
            "node/no-path-concat": "error",
            // "node/prefer-global/buffer": ["error", "never"],
            // "node/prefer-global/process": ["error", "never"],
            "node/process-exit-as-throw": "error",
        },
    };
}
