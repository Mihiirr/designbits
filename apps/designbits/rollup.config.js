import commonJs from "@rollup/plugin-commonjs"
import jsonPlugin from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"

export default {
  input: "api/api.js",
  output: {
    file: "api/index.js",
    format: "cjs",
  },
  external: ["database", "fs/promises"],
  inlineDynamicImports: true,
  plugins: [
    commonJs(),
    resolve({
      moduleDirectories: ["../../node_modules"],
    }),
    jsonPlugin(),
  ],
}
