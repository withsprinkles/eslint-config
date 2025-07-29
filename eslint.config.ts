import { defineConfig } from "./src/index.ts";

import { codeStyle } from "./src/plugins/code-style.plugin.ts";
import { comments } from "./src/plugins/comments.plugin.ts";
import { ignores } from "./src/plugins/ignores.plugin.ts";
import { imports } from "./src/plugins/imports.plugin.ts";
import { javaScript } from "./src/plugins/javascript.plugin.ts";
import { jsDoc } from "./src/plugins/jsdoc.plugin.ts";
import { jsx } from "./src/plugins/jsx.plugin.ts";
import { node } from "./src/plugins/node.plugin.ts";
import { react } from "./src/plugins/react.plugin.ts";
import { tailwindcss } from "./src/plugins/tailwindcss.plugin.ts";
import { typeScript } from "./src/plugins/typescript.plugin.ts";
import { jsonc } from "./src/plugins/jsonc.plugin.ts";
import { markdown } from "./src/plugins/markdown.plugin.ts";
import { regexp } from "./src/plugins/regexp.plugin.ts";
import { toml } from "./src/plugins/toml.plugin.ts";
import { vitest } from "./src/plugins/vitest.plugin.ts";
import { yaml } from "./src/plugins/yaml.plugin.ts";

export default defineConfig({
    plugins: [
        codeStyle(),
        comments(),
        ignores(),
        imports(),
        javaScript(),
        typeScript({ tsconfigPath: "./tsconfig.json" }),
        jsDoc(),
        jsonc(),
        jsx(),
        markdown(),
        node(),
        react(),
        regexp(),
        tailwindcss({
            stylesheet: "./src/fixtures/index.css",
            // functions: ["cva", "cx", "clsx"],
            // attributes: ["className", "class"],
        }),
        toml(),
        await vitest(),
        yaml(),
    ],
});
