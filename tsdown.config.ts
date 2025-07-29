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
    },
});
