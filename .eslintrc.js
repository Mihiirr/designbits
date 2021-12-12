module.exports = {
  extends: [
    // "kentcdodds",
    // "kentcdodds/jest",
    // "kentcdodds/jsx-a11y",
    // "kentcdodds/react",
    require.resolve("./.lint/remix-eslint.js"),
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
  },
  plugins: ["file-progress"],
  rules: {
    "file-progress/activate": 1,
    "no-console": "off",

    // meh...
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/sort-type-union-intersection-members": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/alt-text": "off", // it's not smart enough...
    "@babel/new-cap": "off",
    "react/jsx-filename-extension": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-namespace": "off",

    // I can't figure these out:
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",

    // enable these again someday:
    "@typescript-eslint/no-unsafe-argument": "off",

    // this one isn't smart enough for our "~/" imports
    "import/order": "off",

    // for CatchBoundaries
    "@typescript-eslint/no-throw-literal": "off",
  },
}