module.exports = {
  extends: "./index.js",
  env: {
    browser: true,
    node: false
  },
  overrides: [
    {
      files: ["pages/*.vue", "layouts/*.vue"],
      rules: {
        "unicorn/filename-case": ["warn", { case: "kebabCase" }]
      }
    },
    {
      files: ["*.config.js"],
      env: {
        node: true,
        browser: false
      }
    },
    {
      files: ["nuxt.config.js", "plugins/*"],
      rules: {
        "import/no-anonymous-default-export": "off",
        "import/no-default-export": "off"
      }
    }
  ]
}
