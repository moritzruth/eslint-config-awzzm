module.exports = {
  extends: "./index.js",
  env: {
    es6: true,
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ["pages/*.vue", "layouts/*.vue"],
      rules: {
        "unicorn/filename-case": ["warn", { case: "kebabCase" }]
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
