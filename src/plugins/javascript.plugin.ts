import type { TypedFlatConfigItem } from "@antfu/eslint-config";
import { isInEditorEnv } from "@antfu/eslint-config";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";

export function javaScript(): TypedFlatConfigItem {
    const IN_EDITOR = isInEditorEnv();

    return {
        name: "withsprinkles/javascript",
        languageOptions: {
            ecmaVersion: 2022,
            globals: {
                ...globals.browser,
                ...globals.es2024,
                ...globals.node,
                document: "readonly",
                navigator: "readonly",
                window: "readonly",
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2022,
                sourceType: "module",
            },
            sourceType: "module",
        },
        linterOptions: {
            reportUnusedDisableDirectives: true,
        },
        plugins: {
            "unused-imports": unusedImports,
        },
        rules: {
            "array-callback-return": "error",
            "default-case-last": "warn",
            "dot-notation": ["warn", { allowKeywords: true }],
            eqeqeq: ["error", "always"],
            "new-cap": ["error", { capIsNew: false, newIsCap: true, properties: true }],
            "no-alert": "warn",
            "no-array-constructor": "error",
            "no-async-promise-executor": "error",
            "no-caller": "error",
            "no-case-declarations": "error",
            "no-class-assign": "error",
            "no-compare-neg-zero": "error",
            "no-cond-assign": ["error", "always"],
            "no-console": [IN_EDITOR ? "off" : "warn", { allow: ["warn", "error"] }],
            "no-control-regex": "error",
            "no-debugger": "error",
            "no-delete-var": "error",
            "no-empty": ["warn", { allowEmptyCatch: true }],
            "no-empty-character-class": "error",
            "no-empty-pattern": "warn",
            "no-eval": "error",
            "no-ex-assign": "error",
            "no-extend-native": "error",
            "no-extra-bind": "warn",
            "no-extra-boolean-cast": "warn",
            "no-fallthrough": "error",
            "no-func-assign": "error",
            "no-global-assign": "error",
            "no-implied-eval": "error",
            "no-import-assign": "error",
            "no-invalid-regexp": IN_EDITOR ? "warn" : "error",
            "no-irregular-whitespace": "warn",
            "no-iterator": "error",
            "no-labels": ["error", { allowLoop: false, allowSwitch: false }],
            "no-lone-blocks": "error",
            "no-loss-of-precision": "error",
            "no-misleading-character-class": "error",
            "no-multi-str": "error",
            "no-new": "warn",
            "no-new-func": "error",
            "no-new-native-nonconstructor": "error",
            "no-new-wrappers": "error",
            "no-obj-calls": "error",
            "no-octal": "error",
            "no-octal-escape": "error",
            "no-proto": "error",
            "no-prototype-builtins": "error",
            "no-regex-spaces": "error",
            "no-restricted-globals": [
                "error",
                { message: "Use `globalThis` instead.", name: "global" },
                { message: "Use `globalThis` instead.", name: "self" },
            ],
            "no-restricted-properties": [
                "error",
                {
                    message: "Use `Object.getPrototypeOf` or `Object.setPrototypeOf` instead.",
                    property: "__proto__",
                },
                {
                    message: "Use `Object.defineProperty` instead.",
                    property: "__defineGetter__",
                },
                {
                    message: "Use `Object.defineProperty` instead.",
                    property: "__defineSetter__",
                },
                {
                    message: "Use `Object.getOwnPropertyDescriptor` instead.",
                    property: "__lookupGetter__",
                },
                {
                    message: "Use `Object.getOwnPropertyDescriptor` instead.",
                    property: "__lookupSetter__",
                },
            ],
            "no-restricted-syntax": [
                "error",
                "TSEnumDeclaration[const=true]", // const enum Direction { ... }
                // TODO: Disable this for VS Code Plugins, where the syntax is necessary
                "TSExportAssignment", // module.exports = someValue; OR export = someValue;
            ],
            "no-self-assign": ["error", { props: true }],
            "no-self-compare": "warn",
            "no-sequences": "error",
            "no-template-curly-in-string": "error",
            "no-throw-literal": "error",
            // "no-undef": "error",
            "no-undef-init": "warn",
            "no-unexpected-multiline": "warn",
            "no-unmodified-loop-condition": "error",
            "no-unneeded-ternary": ["error", { defaultAssignment: false }],
            "no-unreachable-loop": "error",
            "no-unsafe-finally": "error",
            "no-unsafe-negation": "error",
            "no-unused-expressions": [
                "warn",
                {
                    allowShortCircuit: true,
                    allowTaggedTemplates: true,
                    allowTernary: true,
                },
            ],
            "no-unused-vars": [
                IN_EDITOR ? "off" : "warn",
                {
                    args: "none",
                    caughtErrors: "none",
                    ignoreRestSiblings: true,
                    vars: "all",
                },
            ],
            "no-use-before-define": [
                "error",
                { classes: false, functions: false, variables: true },
            ],
            "no-useless-backreference": "error",
            "no-useless-call": "error",
            "no-useless-catch": "error",
            "no-useless-computed-key": "error",
            "no-useless-constructor": "warn",
            "no-useless-rename": "error",
            "no-useless-return": "error",
            "no-var": "error",
            "no-with": "error",
            "object-shorthand": [
                "error",
                "always",
                {
                    avoidQuotes: true,
                    ignoreConstructors: false,
                },
            ],
            "prefer-arrow-callback": [
                "error",
                {
                    allowNamedFunctions: false,
                    allowUnboundThis: true,
                },
            ],
            "prefer-const": [
                IN_EDITOR ? "warn" : "error",
                {
                    destructuring: "all",
                    ignoreReadBeforeAssign: true,
                },
            ],
            "prefer-exponentiation-operator": "warn",
            "prefer-promise-reject-errors": "error",
            "prefer-regex-literals": ["warn", { disallowRedundantWrapping: true }],
            "prefer-rest-params": "error",
            "prefer-spread": "error",
            "prefer-template": "warn",
            "symbol-description": "error",
            "unicode-bom": ["error", "never"],
            "unused-imports/no-unused-imports": IN_EDITOR ? "warn" : "error",
            "unused-imports/no-unused-vars": [
                IN_EDITOR ? "warn" : "error",
                {
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                    vars: "all",
                    varsIgnorePattern: "^_",
                },
            ],
            "use-isnan": ["error", { enforceForIndexOf: true, enforceForSwitchCase: true }],
            yoda: ["warn", "never"],
        },
    };
}
