import commonJs from "@rollup/plugin-commonjs"
import jsonPlugin from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import * as path from "path"
import copy from "rollup-plugin-copy"

export default {
  input: "deploy/index.js",
  output: {
    dir: "api",
    format: "cjs",
  },
  external: ["fs/promises"],
  plugins: [
    copy({
      targets: [
        {
          src: "../../node_modules/.prisma/client/schema.prisma",
          dest: "api/schema.prisma",
        },
      ],
    }),
    commonJs(),
    resolve({
      moduleDirectories: ["node_modules"],
      rootDir: path.join(process.cwd(), "../.."),
    }),
    jsonPlugin(),
  ],
}
