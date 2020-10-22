const { prefixKeys } = require("eslint-config-awzzm/utils")
const { INLINE_ELEMENTS } = require("./inline-elements")

module.exports = {
  extends: ["awzzm", "plugin:vue/recommended"],
  rules: prefixKeys("vue/", {
    /**
     * Essential
     */
    "custom-event-name-casing": "warn",
    "no-dupe-v-else-if": "warn",
    "no-unused-components": "warn",
    "no-unused-vars": "warn",
    "no-use-v-if-with-v-for": "warn",
    "require-component-is": "warn",

    /**
     * Strongly Recommended
     */
    "html-closing-bracket-spacing": [
      "warn", {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "never"
      }
    ],
    "html-end-tags": "error",
    "html-self-closing": "off",
    "max-attributes-per-line": ["warn", {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    "singleline-html-element-content-newline": ["warn", { ignores: INLINE_ELEMENTS }],
    "component-tags-order": ["error", { order: ["template", "style", "script"] }],
    "script-indent": [
      "warn", 2, {
        baseIndent: 1,
        switchCase: 1
      }
    ],

    /**
     * Recommended
     */
    "no-v-html": "off",
    "this-in-template": "error",

    /**
     * Uncategorized
     */
    "match-component-file-name": "warn",
    "no-boolean-default": "warn",
    "no-reserved-component-names": "error",
    "padding-line-between-blocks": "warn",
    "require-direct-export": "warn",
    "require-name-property": "warn",
    "v-on-function-call": ["warn", "always"]
  }),
  overrides: [
    {
      files: ["*.vue"],
      rules: {
        "indent": "off",
        "import/no-default-export": "off",
        "import/no-anonymous-default-export": "off",
        "unicorn/filename-case": [
          "error",
          {
            case: "pascalCase"
          }
        ]
      }
    }
  ]
}
