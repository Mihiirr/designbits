import commonJs from "@rollup/plugin-commonjs"
import jsonPlugin from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import * as path from "path"

export default {
  input: "deploy/index.js",
  output: {
    file: "api/index.js",
    format: "cjs",
  },
  inlineDynamicImports: true,
  external: ["fs/promises", "_http_common", "encoding"],
  plugins: [
    commonJs(),
    resolve({
      moduleDirectories: ["node_modules"],
      rootDir: path.join(process.cwd(), "../.."),
    }),
    jsonPlugin(),
  ],
}
