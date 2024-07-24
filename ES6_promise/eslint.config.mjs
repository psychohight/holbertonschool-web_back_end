import pkg from "@eslint/js";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

const { configs } = pkg;

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      globals: {
        console: "readonly",
        module: "readonly"
      }
    },
    plugins: {
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      ...configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
];

