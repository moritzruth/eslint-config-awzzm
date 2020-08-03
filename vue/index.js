/* eslint-disable quote-props */
const INLINE_ELEMENTS = require("eslint-plugin-vue/lib/utils/inline-non-void-elements");
const { prefixKeys } = require("eslint-config-awzzm/utils");

const SINGLELINE_ELEMENT_NEWLINE_IGNORED = [
  ...INLINE_ELEMENTS,
  "pre",
  "textarea",
  "nuxt-link",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6"
]

// TODO: Uncomment commented rules when v7 of eslint-plugin-vue is released

module.exports = {
  "extends": ["awzzm", "plugin:vue/recommended"],
  "rules": prefixKeys("vue/", {
    /**
     * Essential
     */
    // "custom-event-name-casing": "warn",
    // "no-dupe-v-else-if": "warn",
    "no-unused-components": "warn",
    "no-unused-vars": "warn",
    "no-use-v-if-with-v-for": "warn",
    "require-component-is": "warn",

    /**
     * Strongly Recommended
     */
    "html-closing-bracket-spacing": [
      "warn", {
        "startTag": "never",
        "endTag": "never",
        "selfClosingTag": "never"
      }
    ],
    "html-end-tags": "error",
    "html-self-closing": "off",
    "max-attributes-per-line": ["warn", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "require-prop-types": "error",
    "singleline-html-element-content-newline": ["warn", { ignores: SINGLELINE_ELEMENT_NEWLINE_IGNORED }],
    "component-tags-order": ["error", {
      "order": ["template", "style", "script"]
    }],
    "script-indent": [
      "warn", 2, {
        "baseIndent": 1,
        "switchCase": 1
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
    // "html-comment-content-newline": "warn",
    // "html-comment-content-spacing": "warn",
    "match-component-file-name": "warn",
    "no-boolean-default": "error",
    // "no-potential-component-option-typo": "warn",
    "no-reserved-component-names": "error",
    // "no-useless-mustaches": "warn",
    // "no-useless-v-bind": "warn",
    "padding-line-between-blocks": "warn",
    "require-direct-export": "warn",
    "require-name-property": "warn",
    // "v-for-delimiter-style": "warn",
    "v-on-function-call": ["warn", "always"],

    /**
     * Extension Rules
     */
    // "array-bracket-spacing": "warn",
    // "arrow-spacing": "warn",
    // "block-spacing": "warn",
    // "brace-style": "warn",
    // "camelcase": ["warn", { ignoreDestructuring: true }],
    // "comma-dangle": "warn",
    // "comma-spacing": "warn",
    // "comma-style": "warn",
    // "dot-location": ["warn", "property"],
    // "dot-notation": "warn",
    // "eqeqeq": "error",
    // "func-call-spacing": "warn",
    // "key-spacing": "warn",
    // "keyword-spacing": "warn",
    // "max-len": ["warn", { code: 120 }],
    // "no-empty-pattern": "warn",
    // "no-extra-parens": ["warn", "all", { nestedBinaryExpressions: false }],
    // "no-sparse-arrays": "warn",
    // "no-useless-concat": "warn",
    // "object-curly-newline": "warn",
    // "object-curly-spacing": ["warn", "always"],
    // "operator-linebreak": "warn",
    // "space-in-parens": "warn",
    // "space-infix-ops": "warn",
    // "space-unary-ops": ["warn", { words: true, nonwords: false }],
    // "template-curly-spacing": "warn",
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
};
