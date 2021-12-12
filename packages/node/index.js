module.exports = {
  extends: "awzzm",
  plugins: ["node"],
  env: {
    node: true
  },
  rules: {
    "node/handle-callback-err": "warn",
    "node/no-callback-literal": "warn",
    "node/no-new-require": "error",
    "node/no-path-concat": "warn",
    "node/no-deprecated-api": "warn",
    "node/prefer-global/buffer": "warn",
    "node/prefer-global/console": "warn",
    "node/prefer-global/process": "warn",
    "node/prefer-global/text-decoder": "warn",
    "node/prefer-global/url-search-params": "warn",
    "node/prefer-global/url": "off", // TypeScript does not know about this global yet
    "node/prefer-promises/dns": "warn",
    "node/prefer-promises/fs": "warn"
  }
}
