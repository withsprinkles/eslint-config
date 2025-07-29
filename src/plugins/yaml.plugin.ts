import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import pluginYaml from "eslint-plugin-yml";
import parserYaml from "yaml-eslint-parser";
import { GLOB_YAML } from "../globs.ts";

export function yaml(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/yaml",
        files: [GLOB_YAML],
        plugins: {
            yaml: pluginYaml,
        },
        languageOptions: {
            parser: parserYaml,
        },
        rules: {
            "style/spaced-comment": "off",

            "yaml/block-mapping": "error",
            "yaml/block-sequence": "error",
            "yaml/no-empty-key": "error",
            "yaml/no-empty-sequence-entry": "error",
            "yaml/no-irregular-whitespace": "error",
            "yaml/plain-scalar": "error",
        },
    };
}
