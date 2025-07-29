import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import { GLOB_EXCLUDE } from "../globs.ts";

export function ignores(ignorePatterns: string[] = []): TypedFlatConfigItem {
    return {
        name: "withsprinkles/ignores",
        ignores: [...GLOB_EXCLUDE, ...ignorePatterns],
    };
}
