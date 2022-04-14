module.exports = {
  root: true,

  env: {
    node: true
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "@typescript-eslint/no-this-alias": ["off"]
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript",
    "@vue/typescript/recommended",
    "@vue/prettier/@typescript-eslint"
  ],

  globals: {
    defineProps: "readonly",
    defineEmits: "readonly"
  }
};
