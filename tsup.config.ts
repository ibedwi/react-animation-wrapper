import { defineConfig } from "tsup";

export default defineConfig({
  minify: true,
  target: "es2018",
  sourcemap: true,
  // Generate declaration files (.d.ts)
  dts: true,
  format: ["esm", "cjs"],
  // Add "use client" string for Next.js to detect client-side code
  // 1. https://tsup.egoist.dev/#custom-esbuild-plugin-and-options
  // 2. https://esbuild.github.io/api/#banner
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
