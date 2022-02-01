import commonJs from "@rollup/plugin-commonjs";
import jsonPlugin from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

// import * as path from "path"

export default [
  {
    input: "index.ts",
    output: {
      dir: "dist/esm",
      format: "esm",
    },
    external: ["@prisma/client"],
    plugins: [
      typescript(),
      commonJs(),
      resolve({
        moduleDirectories: ["node_modules"],
        // rootDir: path.join(process.cwd(), "../.."),
      }),
      jsonPlugin(),
    ],
  },
  {
    input: "index.ts",
    output: {
      dir: "dist/cjs",
      format: "cjs",
    },
    external: ["@prisma/client"],
    plugins: [
      typescript(),
      commonJs(),
      resolve({
        moduleDirectories: ["node_modules"],
        // rootDir: path.join(process.cwd(), "../.."),
      }),
      jsonPlugin(),
    ],
  },
];
