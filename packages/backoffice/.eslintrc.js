module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  overrides: [
    {
      files: ["**/tests/unit/**/*.spec.{j,t}s?(x)"],
      extends: ["plugin:jest/all"],
      rules: {
        "@typescript-eslint/no-explicit-any": 0
      }
    },
    {
      files: ["**/tests/e2e/**/*.spec.{j,t}s?(x)"],
      extends: ["plugin:cypress/recommended"]
    }
  ]
};
