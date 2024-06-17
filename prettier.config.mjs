/** @type {import("prettier").Config} */
export default {
  bracketSpacing: false,
  printWidth: 140,
  proseWrap: "always",
  semi: false,
  trailingComma: "es5",
  plugins: ["prettier-plugin-svelte", "prettier-plugin-tailwindcss"],
  overrides: [{files: "*.svelte", options: {parser: "svelte"}}],
}
