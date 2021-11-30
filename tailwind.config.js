module.exports = {
  mode: process.env.NODE_ENV ? "jit" : undefined,
  purge: ["./app/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
