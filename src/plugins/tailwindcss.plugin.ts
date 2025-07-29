import type { Linter } from "eslint";

import pluginTailwind from "eslint-plugin-readable-tailwind";
import {
    getDefaultAttributes,
    getDefaultCallees,
    getDefaultTags,
    getDefaultVariables,
} from "eslint-plugin-readable-tailwind/api/defaults";

export interface TailwindPluginConfig {
    /**
     * Path to the CSS stylesheet in your Tailwind project (v4+)
     */
    stylesheet?: string;
    /**
     * Sort order for Tailwind classes
     * @default "improved"
     */
    sortOrder?: "official" | "improved";

    /**
     * List of attributes/props that contain sortable Tailwind classes
     * @default ["class", "className"]
     */
    attributes?: string[];
    /**
     * List of functions that contain sortable Tailwind classes
     * @default ["cc", "clb", "clsx", "cn", "cnb", "ctl", "cva", "cx", "dcnb", "objstr", "tv", "twJoin", "twMerge"]
     */
    functions?: string[];
    /**
     * List of tagged templates that contain sortable Tailwind classes
     * @default []
     */
    tags?: string[];
    /**
     * List of variables whose initializers contain sortable Tailwind classes
     * @default ["className", "classNames", "classes", "style", "styles"]
     */
    variables?: string[];
}

export function tailwindcss({
    stylesheet,
    attributes = [],
    functions = [],
    variables = [],
    tags = [],
    sortOrder,
}: TailwindPluginConfig = {}): Linter.Config {
    const config = {
        entryPoint: stylesheet,
        attributes: [...getDefaultAttributes(), ...attributes],
        callees: [...getDefaultCallees(), ...functions],
        variables: [...getDefaultVariables(), ...variables],
        tags: [...getDefaultTags(), ...tags],
    };

    return {
        name: "withsprinkles/tailwindcss",
        plugins: {
            tailwind: pluginTailwind,
        },
        settings: {
            tailwind: config,
        },
        rules: {
            "tailwind/no-duplicate-classes": "error",
            "tailwind/no-unnecessary-whitespace": "warn",
            "tailwind/sort-classes": ["warn", { order: sortOrder, ...config }],
        },
    };
}
