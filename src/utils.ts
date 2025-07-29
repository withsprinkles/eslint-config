import type { Linter } from "eslint";
import { existsSync as fileExistsSync } from "node:fs";
import { join } from "node:path";
import { isInEditorEnv } from "@antfu/eslint-config";
import { isPackageExists as packageExistsSync } from "local-pkg";
const configFileExistsSync = (file: string) => fileExistsSync(join(process.cwd(), file));

/**
 * Rename plugin prefixes in a rule object.
 * Accepts a map of prefixes to rename.
 *
 * @example
 * ```ts
 * import { renameRules } from '@antfu/eslint-config'
 *
 * export default [{
 *   rules: renameRules(
 *     {
 *       '@typescript-eslint/indent': 'error'
 *     },
 *     { '@typescript-eslint': 'ts' }
 *   )
 * }]
 * ```
 */
export function renameRules(
    rules: Record<string, any>,
    map: Record<string, string>,
): Record<string, any> {
    return Object.fromEntries(
        Object.entries(rules).map(([key, value]) => {
            for (const [from, to] of Object.entries(map)) {
                if (key.startsWith(`${from}/`)) return [to + key.slice(from.length), value];
            }
            return [key, value];
        }),
    );
}

export interface Config {
    plugins?: (Linter.Config | Linter.Config[])[];
    overrides?: Linter.Config[];
}

export function defineConfig(config: Config = { plugins: [], overrides: [] }): Linter.Config[] {
    const configs: Linter.Config[] = [];

    // Process plugins
    if (config.plugins && config.plugins.length > 0) {
        for (const plugin of config.plugins) {
            if (Array.isArray(plugin)) {
                configs.push(...plugin);
            } else {
                configs.push(plugin);
            }
        }
    }

    // Add overrides if they exist
    if (config.overrides && config.overrides.length > 0) {
        configs.push(...config.overrides);
    }

    return configs;
}

// TODO: Automatically create a recommended config based on project heuristics
function createRecommendedConfig(): Linter.Config[] {
    const HAS_ASTRO = packageExistsSync("astro")
        && (configFileExistsSync("astro.config.js")
            || configFileExistsSync("astro.config.mjs")
            || configFileExistsSync("astro.config.ts")
            || configFileExistsSync("astro.config.mts"));
    const HAS_SVELTE = packageExistsSync("svelte") && configFileExistsSync("svelte.config.js");
    const HAS_REACT = packageExistsSync("react") && packageExistsSync("react-dom");
    const HAS_SOLID = packageExistsSync("solid-js");
    const HAS_TAILWIND = packageExistsSync("tailwindcss");
    const JSX_LIKE = HAS_REACT || HAS_SOLID || HAS_ASTRO;
    const IN_EDITOR = isInEditorEnv();

    return [];
}
