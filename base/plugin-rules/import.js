const { prefixKeys } = require("../utils")

// https://github.com/benmosher/eslint-plugin-import#rules

module.exports = prefixKeys("import/", {
  // Only rules which do not require a resolver a used
  "no-self-import": "warn",
  "export": "error",
  "no-extraneous-dependencies": "error",
  "no-mutable-exports": "warn",
  "first": "warn",
  "exports-last": "off",
  "no-duplicates": "warn",
  "no-namespace": "off",
  "extensions": "off",
  "order": "warn",
  "newline-after-import": "warn",
  "prefer-default-export": "off",
  "max-dependencies": "off",
  "no-unassigned-import": "off",
  "no-named-default": "warn",
  "no-default-export": "warn", // TODO: Disable for Vue.js
  "no-named-export": "off",
  "no-anonymous-default-export": "warn", // TODO: Disable for Vue.js
  "group-exports": "off",
  "dynamic-import-chunkname": "off"
})
