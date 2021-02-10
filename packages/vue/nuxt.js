module.exports = {
  extends: "./index.js",
  env: {
    browser: true,
    node: true
  },
  overrides: [
    {
      files: ["nuxt.config.js", "plugins/**/*"],
      rules: {
        "import/no-anonymous-default-export": "off",
        "import/no-default-export": "off"
      }
    }
  ]
}
