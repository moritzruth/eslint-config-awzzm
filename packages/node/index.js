const { prefixKeys } = require("eslint-config-awzzm/utils")
const semverSatisfies = require("semver/functions/satisfies")

const promisesAPIsStable = semverSatisfies(process.version, ">=11.14.0")

module.exports = {
  extends: "awzzm",
  plugins: ["node"],
  env: {
    node: true
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
    "prefer-promises/dns": promisesAPIsStable ? "warn" : "off",
    "prefer-promises/fs": promisesAPIsStable ? "warn" : "off"
  })
}
