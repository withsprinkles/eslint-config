import type { TypedFlatConfigItem } from "@antfu/eslint-config";

import { configs } from "eslint-plugin-regexp";

export function regexp(): TypedFlatConfigItem {
    const config = configs["flat/recommended"] as TypedFlatConfigItem;

    const rules = {
        ...config.rules,
    };

    for (const key in rules) {
        if (rules[key] === "error") {
            rules[key] = "warn";
        }
    }

    return {
        ...config,
        name: "withsprinkles/regexp",
        rules,
    };
}
