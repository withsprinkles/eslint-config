import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import pluginToml from "eslint-plugin-toml";
import parserToml from "toml-eslint-parser";
import { GLOB_TOML } from "../globs.ts";

export function toml(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/toml",
        files: [GLOB_TOML],
        plugins: {
            toml: pluginToml,
        },
        languageOptions: {
            parser: parserToml,
        },
        rules: {
            "style/spaced-comment": "off",

            "toml/comma-style": "warn",
            "toml/keys-order": "warn",
            "toml/no-space-dots": "error",
            "toml/no-unreadable-number-separator": "error",
            "toml/precision-of-fractional-seconds": "error",
            "toml/precision-of-integer": "error",
            "toml/tables-order": "warn",
        },
    };
}
