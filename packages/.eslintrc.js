module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    "plugins": ["@typescript-eslint", "no-relative-import-paths"],
    extends: [
      'eslint:recommended',
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
        "plugin:import/recommended",
       "plugin:import/typescript"
    ],
    rules: {
      'no-debugger': 2,
      'no-console': 2,
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/array-type": ["error", { "default": "generic" }],
      "no-relative-import-paths/no-relative-import-paths": [
        "warn",
        { "allowSameFolder": true, "prefix": "@" }
      ]
    }
  }