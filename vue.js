/* eslint-disable quote-props */
const INLINE_ELEMENTS = require("eslint-plugin-vue/lib/utils/inline-non-void-elements");

module.exports = {
  "env": { "browser": true },
  "extends": ["plugin:vue/essential"],
  "rules": {
    "vue/html-closing-bracket-spacing": [
      "error", {
        "startTag": "never",
        "endTag": "never",
        "selfClosingTag": "never"
      }
    ],
    "vue/script-indent": [
      "warn", 2, {
        "baseIndent": 1,
        "switchCase": 1
      }
    ],
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": [
      "warn",
      { ignores: ["pre", "textarea", "nuxt-link", ...INLINE_ELEMENTS] }
    ]
  }
};
