const { prefixKeys } = require("eslint-config-awzzm/utils")

module.exports = {
  extends: "awzzm",
  plugins: ["node"],
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: prefixKeys("node/", {
    "handle-callback-err": "warn",
    "no-callback-literal": "warn",
    "no-new-require": "error",
    "no-path-concat": "warn",
    "no-deprecated-api": "warn",
    "prefer-global/buffer": "warn",
    "prefer-global/console": "warn",
    "prefer-global/process": "warn",
    "prefer-global/text-decoder": "warn",
    "prefer-global/url-search-params": "warn",
    "prefer-global/url": "warn",
    "prefer-promises/dns": "warn",
    "prefer-promises/fs": "warn",
    "node/prefer-global/url": "off" // see https://github.com/sindresorhus/got/issues/989
  })
}
