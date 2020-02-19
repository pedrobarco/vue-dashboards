module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsdoc/recommended",
    "plugin:jest/all",
    "plugin:jest-formatting/strict",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["jsdoc", "import"],
  rules: {
    "import/no-default-export": 2,
    "import/prefer-default-export": 0,
    "jsdoc/check-indentation": [
      1,
      {
        excludeTags: ["swagger"]
      }
    ],

    "jsdoc/check-syntax": 1,
    "jsdoc/check-tag-names": [
      1,
      {
        definedTags: ["swagger"]
      }
    ],
    "jsdoc/require-description-complete-sentence": 1,
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-param-type": 0,
    "jsdoc/require-returns-type": 0,
    "jsdoc/require-jsdoc": [
      1,
      {
        require: { ClassDeclaration: true, MethodDefinition: true }
      }
    ]
  },
  settings: {
    jsdoc: {
      mode: "typescript"
    }
  }
};
