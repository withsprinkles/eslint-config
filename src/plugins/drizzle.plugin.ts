import type { TypedFlatConfigItem } from "@antfu/eslint-config";
// @ts-expect-error no types exist for this module
import pluginDrizzle from "eslint-plugin-drizzle";

export function drizzle(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/drizzle",
        ...pluginDrizzle.configs.recommended,
    };
}
