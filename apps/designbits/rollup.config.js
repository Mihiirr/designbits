import commonJs from "@rollup/plugin-commonjs"
import jsonPlugin from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"

export default {
  input: "api/api.js",
  output: {
    file: "api/index.js",
    format: "cjs",
  },
  inlineDynamicImports: true,
  external: ["database"],
  plugins: [
    commonJs(),
    resolve({
      moduleDirectories: ["node_modules"],
      rootDir: "../../",
    }),
    jsonPlugin(),
  ],
}
