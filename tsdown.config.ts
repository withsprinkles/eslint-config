import { defineConfig } from "tsdown";
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"],
    platform: "node",
    target: "esnext",
    dts: true,
    clean: true,
    treeshake: false,
    sourcemap: false,
    outDir: "dist",
    exports: true,
    unbundle: false,
    minify: false,
    external: [],
    onSuccess() {
        // Copy the worker file needed by eslint-plugin-jsonc  
        const workerSrc = resolve(
            "node_modules/eslint-plugin-jsonc/dist/utils/get-auto-jsonc-rules-config/worker.js",
        );
        const workerDest = resolve("dist/worker.js");
        copyFileSync(workerSrc, workerDest);
        console.log("✓ Copied worker.js to dist/");

        // Copy the base config file needed by eslint-plugin-jsonc
        const baseSrc = resolve("node_modules/eslint-plugin-jsonc/dist/configs/base.js");
        const baseDest = resolve("dist/base.js");
        copyFileSync(baseSrc, baseDest);
        console.log("✓ Copied base.js to dist/");

        // Rename worker.js to worker.cjs to avoid ESM conflicts
        const workerCjsDest = resolve("dist/worker.cjs");
        const { renameSync, readFileSync, writeFileSync } = require("node:fs");
        renameSync(workerDest, workerCjsDest);
        console.log("✓ Renamed worker.js to worker.cjs");

        // Patch the bundled code to look for worker.cjs instead of worker
        const indexPath = resolve("dist/index.js");
        let indexContent = readFileSync(indexPath, "utf8");
        indexContent = indexContent.replace(
            '__require.resolve("./worker")',
            '__require.resolve("./worker.cjs")'
        );
        writeFileSync(indexPath, indexContent);
        console.log("✓ Patched index.js to use worker.cjs");
    },
});
