import commonJs from "@rollup/plugin-commonjs"
import jsonPlugin from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import * as path from "path"

export default {
  input: "deploy/index.js",
  output: {
    dir: "api",
    format: "cjs",
  },
  external: ["fs/promises"],
  plugins: [
    commonJs(),
    resolve({
      moduleDirectories: ["node_modules"],
      rootDir: path.join(process.cwd(), "../.."),
    }),
    jsonPlugin(),
  ],
}
