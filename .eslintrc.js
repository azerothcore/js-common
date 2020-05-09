module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:varspacing/recommended",
    "plugin:jsdoc/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["json", "varspacing", "import", "jsdoc", "jest"],
  ignorePatterns: ["/*", "!src"],
  rules: {
    "jsdoc/require-jsdoc": 0,
    "require-atomic-updates": 0, // off: https://github.com/eslint/eslint/issues/11954
    indent: [
      "error",
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: "first"
      }
    ],
    "space-in-parens": ["error", "never"],
    "eol-last": ["error", "always"],
    "keyword-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "single"],
    semi: ["error", "always"],
    "no-trailing-spaces": ["error"],
    "comma-dangle": ["error", "always-multiline"],
    "key-spacing": [
      "error",
      {
        align: "colon"
      }
    ]
  }
};
