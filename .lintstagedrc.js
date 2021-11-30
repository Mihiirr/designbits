module.exports = {
  "*.{js,ts,tsx}": "npm run lint:staged",
  "*.{js,ts,tsx,css,md}": "prettier --write",
  "*.{ts,tsx}": () => "npm run typecheck",
  "*.prisma": () => "npx prisma format",
  ".env?(.*)": ["bin/dotenv-linter", "bin/dotenv-linter compare .env"],
  // ".env?(.*(!(example)))": "bin/dotenv-linter compare .env",
}
