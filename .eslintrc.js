module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:mdx/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "react-app",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
  },
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "no-extend-native": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
  },
  globals: {},
  settings: {
    react: {
      version: "detect",
    },
  },
}
