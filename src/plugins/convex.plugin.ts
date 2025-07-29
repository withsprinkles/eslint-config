import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import pluginConvex from "@convex-dev/eslint-plugin";

export function convex(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/convex",
        ...pluginConvex.configs.recommended,
    };
}
