module.exports = {
  root: true,

  env: {
    node: true,
  },

  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "@typescript-eslint/no-this-alias": ["off"],
  },

  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/prettier",
    "@vue/typescript/recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],

  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
  },
};
