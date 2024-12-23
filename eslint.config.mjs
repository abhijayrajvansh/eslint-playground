import eslint from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

export default [
  // Global ignores
  {
    ignores: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/coverage/**']
  },
  // Base eslint configuration
  eslint.configs.recommended,
  // TypeScript files configuration
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.{js,jsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint
    },
    // rules: {
    //   // TypeScript specific rules
    //   "@typescript-eslint/no-explicit-any": "error",
    //   "@typescript-eslint/explicit-function-return-type": "warn",
    //   "@typescript-eslint/no-unused-vars": "error",
    //   "@typescript-eslint/no-non-null-assertion": "warn",
    //   "@typescript-eslint/no-empty-interface": "warn",
    //   "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    //   "@typescript-eslint/prefer-optional-chain": "error",
    //   "@typescript-eslint/no-empty-function": "warn",
      
    //   // ECMAScript rules
    //   "no-console": "warn",
    //   "no-debugger": "error",
    //   "no-duplicate-imports": "error",
    //   "no-unused-expressions": "error",
    //   "no-return-await": "error",
    //   "no-await-in-loop": "warn",
    //   "camelcase": "error",
    //   "eqeqeq": ["error", "always"],
    //   "no-var": "error",
    //   "prefer-const": "error",
    //   "prefer-arrow-callback": "error",
    //   "arrow-body-style": ["error", "as-needed"],
    // }
  }
];