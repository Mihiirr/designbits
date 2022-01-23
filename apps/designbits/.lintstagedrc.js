module.exports = {
  "*.{js,ts,tsx}": "npm run lint:staged",
  "*.{js,ts,tsx,css,md}": "prettier --write",
  "*.{ts,tsx}": () => "npm run typecheck",
  "*.prisma": () => "npx prisma format",
  ".env?(.*)": ["node_modules/.bin/dotenv-linter", "node_modules/.bin/dotenv-linter compare .env"],
  // ".env?(.*(!(example)))": "bin/dotenv-linter compare .env",
}
