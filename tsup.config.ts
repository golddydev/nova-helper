import { defineConfig } from "tsup";

export default defineConfig({
  format: ["esm"],
  clean: true,
  dts: true,
  entryPoints: ["src/index.ts"],
});
