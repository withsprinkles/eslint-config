import { defineConfig } from "tsdown";

export default defineConfig({
    entry: ["src/index.ts"],
    format: ["esm"],
    platform: "neutral",
    target: "esnext",
    dts: true,
    clean: true,
    treeshake: true,
    sourcemap: false,
    outDir: "dist",
    exports: true,
    unbundle: false,
    minify: false,
});
