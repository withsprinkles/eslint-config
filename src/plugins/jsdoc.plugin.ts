import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import jsdocPlugin from "eslint-plugin-jsdoc";

export function jsDoc(): TypedFlatConfigItem {
    return {
        name: "withsprinkles/jsdoc",
        plugins: {
            jsdoc: jsdocPlugin,
        },
        rules: {
            "jsdoc/check-access": "warn",
            "jsdoc/check-param-names": "warn",
            "jsdoc/check-property-names": "warn",
            "jsdoc/check-types": "warn",
            "jsdoc/empty-tags": "warn",
            "jsdoc/implements-on-classes": "warn",
            "jsdoc/no-defaults": "warn",
            "jsdoc/no-multi-asterisks": "warn",
            "jsdoc/require-param-name": "warn",
            "jsdoc/require-property": "warn",
            "jsdoc/require-property-description": "warn",
            "jsdoc/require-property-name": "warn",
            "jsdoc/require-returns-check": "warn",
            "jsdoc/require-returns-description": "warn",
            "jsdoc/require-yields-check": "warn",
            "jsdoc/check-alignment": "warn",
            "jsdoc/multiline-blocks": "warn",
        },
    };
}
