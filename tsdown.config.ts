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
        const { renameSync, readFileSync, writeFileSync, existsSync } = require("node:fs");
        const { execSync } = require("node:child_process");

        // Read the bundled file to find all relative require.resolve calls
        const indexPath = resolve("dist/index.js");
        let indexContent = readFileSync(indexPath, "utf8");

        // Extract all relative require.resolve patterns
        const relativeRequires = indexContent.match(/__require\.resolve\("\.\/(.*?)"\)/g) || [];
        const uniqueFiles = new Set(
            relativeRequires.map(match => match.replace(/__require\.resolve\("\.\/(.*?)"\)/, "$1")),
        );

        console.log(`Found ${uniqueFiles.size} unique relative require.resolve calls:`);
        uniqueFiles.forEach(file => console.log(`  - ${file}`));

        // Find and copy all missing files
        for (const filename of uniqueFiles) {
            if (filename === "worker.cjs") continue; // Handle separately

            // Search for the file in node_modules
            try {
                const searchResult = execSync(
                    `find node_modules -name "${filename}.js" | head -1`,
                    { encoding: "utf8", cwd: process.cwd() },
                ).trim();

                if (searchResult) {
                    const srcPath = resolve(searchResult);
                    const destPath = resolve("dist", `${filename}.js`);

                    if (existsSync(srcPath)) {
                        copyFileSync(srcPath, destPath);
                        console.log(`✓ Copied ${filename}.js`);
                    }
                } else {
                    console.warn(`⚠ Could not find ${filename}.js`);
                }
            } catch (error) {
                console.warn(`⚠ Error finding ${filename}.js:`, error.message);
            }
        }

        // Handle worker file specially (rename to .cjs)
        const workerSrc = resolve(
            "node_modules/eslint-plugin-jsonc/dist/utils/get-auto-jsonc-rules-config/worker.js",
        );
        const workerDest = resolve("dist/worker.js");
        copyFileSync(workerSrc, workerDest);

        const workerCjsDest = resolve("dist/worker.cjs");
        renameSync(workerDest, workerCjsDest);
        console.log("✓ Copied and renamed worker.js to worker.cjs");

        // Patch the bundled code to look for worker.cjs instead of worker
        indexContent = indexContent.replace(
            '__require.resolve("./worker")',
            '__require.resolve("./worker.cjs")',
        );
        writeFileSync(indexPath, indexContent);
        console.log("✓ Patched index.js to use worker.cjs");
    },
});
