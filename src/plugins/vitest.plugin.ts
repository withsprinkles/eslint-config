import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import { isInEditorEnv } from "@antfu/eslint-config";
import pluginVitest from "@vitest/eslint-plugin";
// @ts-expect-error no types exist for this module
import pluginNoOnlyTests from "eslint-plugin-no-only-tests";
import { GLOB_TESTS } from "../globs";

// Hold the reference so we don't redeclare the plugin on each call
let _pluginTest: any;

export async function vitest(): Promise<TypedFlatConfigItem[]> {
    _pluginTest = _pluginTest || {
        ...pluginVitest,
        rules: {
            ...pluginVitest.rules,
            // extend `test/no-only-tests` rule
            ...pluginNoOnlyTests.rules,
        },
    };

    const IN_EDITOR = isInEditorEnv();

    return [
        {
            files: [GLOB_TESTS],
            name: "withsprinkles/test",
            plugins: {
                test: _pluginTest,
            },
            rules: {
                "test/consistent-test-it": ["error", { fn: "it", withinDescribe: "it" }],
                "test/no-identical-title": "error",
                "test/no-import-node-test": "error",
                "test/no-only-tests": IN_EDITOR ? "warn" : "error",

                "test/prefer-hooks-in-order": "error",
                "test/prefer-lowercase-title": "error",

                // Disables
                ...{
                    "antfu/no-top-level-await": "off",
                    "no-unused-expressions": "off",
                    "node/prefer-global/process": "off",
                    "ts/explicit-function-return-type": "off",
                },
            },
        },
    ];
}
