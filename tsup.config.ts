import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm", "cjs"],
  clean: true,
  dts: true,
  entryPoints: ["src/index.ts"],
});
