process.env.RUNNING_PRETTIER = "true"

module.exports = {
  arrowParens: "avoid",
  embeddedLanguageFormatting: "auto",
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  insertPragma: false,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: "always",
  quoteProps: "as-needed",
  requirePragma: false,
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  // Disable till this is resolved https://github.com/Acidic9/prettier-plugin-tailwind/issues/44
  // plugins: [
  // require("prettier-plugin-tailwind")
  // ],
}
