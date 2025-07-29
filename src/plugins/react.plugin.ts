import type { TypedFlatConfigItem } from "@antfu/eslint-config";

import pluginReact from "@eslint-react/eslint-plugin";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

import { isPackageExists } from "local-pkg";
import { GLOB_ASTRO_TS, GLOB_MARKDOWN, GLOB_SRC, GLOB_TS, GLOB_TSX } from "../globs.ts";

const PLUGINS = pluginReact.configs.all.plugins;
const ALLOW_CONSTANT_EXPORT = isPackageExists("vite");
const USING_REACT_ROUTER_FW_MODE = isPackageExists("@react-router/dev");
const FILES = [GLOB_SRC];
const TYPE_AWARE_CONFIG: TypedFlatConfigItem = {
    name: "withsprinkles/react/type-aware",
    files: [GLOB_TS, GLOB_TSX],
    ignores: [`${GLOB_MARKDOWN}/**`, GLOB_ASTRO_TS],
    rules: {
        "react/no-leaked-conditional-rendering": "warn",
    },
};

export interface ReactPluginConfig {
    tsconfigPath?: string;
    useReactCompiler?: boolean;
}

export function react({
    tsconfigPath,
    useReactCompiler = true,
}: ReactPluginConfig = {}): TypedFlatConfigItem[] {
    const typeAware = Boolean(tsconfigPath);

    return [
        {
            name: "withsprinkles/react",
            files: FILES,
            languageOptions: {
                parserOptions: {
                    ecmaFeatures: {
                        jsx: true,
                    },
                },
                sourceType: "module",
            },
            plugins: {
                react: PLUGINS["@eslint-react"],
                "react-dom": PLUGINS["@eslint-react/dom"],
                "react-hooks": pluginReactHooks,
                "react-hooks-extra": PLUGINS["@eslint-react/hooks-extra"],
                "react-naming-convention": PLUGINS["@eslint-react/naming-convention"],
                "react-refresh": pluginReactRefresh,
                "react-web-api": PLUGINS["@eslint-react/web-api"],
                perfectionist: pluginPerfectionist,
            },
            rules: {
                // React Compiler: https://react.dev/blog/2025/04/21/react-compiler-rc
                "react-hooks/react-compiler": useReactCompiler ? "error" : "off",

                // recommended rules from eslint-plugin-react-x https://eslint-react.xyz/docs/rules/overview#core-rules
                "react/jsx-no-duplicate-props": "warn",
                "react/jsx-uses-vars": "warn",
                "react/no-access-state-in-setstate": "error",
                "react/no-array-index-key": "warn",
                "react/no-children-count": "warn",
                "react/no-children-for-each": "warn",
                "react/no-children-map": "warn",
                "react/no-children-only": "warn",
                "react/no-children-to-array": "warn",
                "react/no-clone-element": "warn",
                "react/no-comment-textnodes": "warn",
                "react/no-component-will-mount": "error",
                "react/no-component-will-receive-props": "error",
                "react/no-component-will-update": "error",
                "react/no-context-provider": "warn",
                "react/no-create-ref": "error",
                "react/no-default-props": "error",
                "react/no-direct-mutation-state": "error",
                "react/no-duplicate-key": "warn",
                "react/no-forward-ref": "warn",
                "react/no-implicit-key": "warn",
                "react/no-missing-key": "error",
                "react/no-nested-component-definitions": "error",
                "react/no-prop-types": "error",
                "react/no-redundant-should-component-update": "error",
                "react/no-set-state-in-component-did-mount": "warn",
                "react/no-set-state-in-component-did-update": "warn",
                "react/no-set-state-in-component-will-update": "warn",
                "react/no-string-refs": "error",
                "react/no-unsafe-component-will-mount": "warn",
                "react/no-unsafe-component-will-receive-props": "warn",
                "react/no-unsafe-component-will-update": "warn",
                "react/no-unstable-context-value": "warn",
                "react/no-unstable-default-props": "warn",
                "react/no-unused-class-component-members": "warn",
                "react/no-unused-state": "warn",
                "react/no-use-context": "warn",
                "react/no-useless-forward-ref": "warn",

                // recommended rules from eslint-plugin-react-dom https://eslint-react.xyz/docs/rules/overview#dom-rules
                "react-dom/no-dangerously-set-innerhtml": "warn",
                "react-dom/no-dangerously-set-innerhtml-with-children": "error",
                "react-dom/no-find-dom-node": "error",
                "react-dom/no-flush-sync": "error",
                "react-dom/no-hydrate": "error",
                "react-dom/no-missing-button-type": "warn",
                "react-dom/no-missing-iframe-sandbox": "warn",
                "react-dom/no-namespace": "error",
                "react-dom/no-render": "error",
                "react-dom/no-render-return-value": "error",
                "react-dom/no-script-url": "warn",
                "react-dom/no-unsafe-iframe-sandbox": "warn",
                "react-dom/no-unsafe-target-blank": "warn",
                "react-dom/no-use-form-state": "error",
                "react-dom/no-void-elements-with-children": "error",

                // recommended rules eslint-plugin-react-hooks https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks/src/rules
                "react-hooks/exhaustive-deps": "warn",
                "react-hooks/rules-of-hooks": "error",

                // recommended rules from eslint-plugin-react-hooks-extra https://eslint-react.xyz/docs/rules/overview#hooks-extra-rules
                "react-hooks-extra/no-direct-set-state-in-use-effect": "warn",
                "react-hooks-extra/no-unnecessary-use-prefix": "warn",
                "react-hooks-extra/prefer-use-state-lazy-initialization": "warn",

                // recommended rules from eslint-plugin-react-web-api https://eslint-react.xyz/docs/rules/overview#web-api-rules
                "react-web-api/no-leaked-event-listener": "warn",
                "react-web-api/no-leaked-interval": "warn",
                "react-web-api/no-leaked-resize-observer": "warn",
                "react-web-api/no-leaked-timeout": "warn",

                // preconfigured rules from eslint-plugin-react-refresh https://github.com/ArnaudBarre/eslint-plugin-react-refresh/tree/main/src
                "react-refresh/only-export-components": [
                    "warn",
                    {
                        allowConstantExport: ALLOW_CONSTANT_EXPORT,
                        allowExportNames: [
                            ...(USING_REACT_ROUTER_FW_MODE
                                ? [
                                      "loader",
                                      "clientLoader",
                                      "action",
                                      "clientAction",
                                      "ErrorBoundary",
                                      "HydrateFallback",
                                      "headers",
                                      "handle",
                                      "links",
                                      "meta",
                                      "shouldRevalidate",
                                  ]
                                : []),
                        ],
                    },
                ],

                // Don't let the React plugin sort JSX props, do it with Perfectionist instead
                "react/jsx-sort-props": "off",
                "perfectionist/sort-jsx-props": [
                    "error",
                    {
                        type: "natural",
                        order: "asc",
                        groups: [
                            "react-special-props",
                            "shorthand-prop",
                            "link-target",
                            "form-attrs",
                            "unknown",
                            "data-attr",
                            "react-event-handler",
                        ],
                        customGroups: [
                            {
                                groupName: "react-special-props",
                                anyOf: [
                                    { elementNamePattern: "^key$" },
                                    { elementNamePattern: "^ref$" },
                                ],
                            },
                            {
                                groupName: "form-attrs",
                                anyOf: [
                                    { elementNamePattern: "^name$" },
                                    { elementNamePattern: "^value$" },
                                ],
                            },
                            {
                                groupName: "link-target",
                                anyOf: [
                                    { elementNamePattern: "^href$" },
                                    { elementNamePattern: "^to$" },
                                ],
                            },
                            {
                                groupName: "data-attr",
                                elementNamePattern: "^data-.*",
                            },
                            {
                                groupName: "react-event-handler",
                                elementNamePattern: "^on[A-Z].+",
                            },
                        ],
                    },
                ],
            },
        },
        ...(typeAware ? [TYPE_AWARE_CONFIG] : []),
    ];
}
