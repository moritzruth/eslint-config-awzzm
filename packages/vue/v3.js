const { prefixKeys } = require("eslint-config-awzzm/utils")
const { INLINE_ELEMENTS } = require("./inline-elements")

module.exports = {
  extends: ["awzzm", "plugin:vue/vue3-recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es6: true
  },
  rules: prefixKeys("vue/", {
    /**
     * Essential
     */
    "custom-event-name-casing": "warn",
    "no-dupe-v-else-if": "warn",
    "no-side-effects-in-computed-properties": "warn",
    "no-unused-components": "warn",
    "no-unused-vars": "warn",
    "no-use-v-if-with-v-for": "warn",
    "use-v-on-exact": "warn",

    /**
     * Strongly Recommended
     */
    "attribute-hyphenation": "warn",
    "component-definition-name-casing": "warn",
    "html-closing-bracket-newline": "warn",
    "html-closing-bracket-spacing": ["warn", {
      startTag: "never",
      endTag: "never",
      selfClosingTag: "never"
    }],
    "html-end-tags": "error",
    "html-self-closing": "warn",
    "max-attributes-per-line": ["warn", { singleline: 3 }],
    "singleline-html-element-content-newline": ["warn", { ignores: INLINE_ELEMENTS }],

    /**
     * Recommended
     */
    "attributes-order": "warn",
    "component-tags-order": ["warn", { order: ["template", "style", "script"] }],
    "no-multiple-slot-args": "error",
    "this-in-template": "error",

    /**
     * Uncategorized
     */
    "block-tag-newline": ["warn", {
      singleline: "always",
      multiline: "always"
    }],
    "html-comment-content-spacing": "warn",
    "no-boolean-default": "error",
    "no-duplicate-attr-inheritance": "error",
    "no-potential-component-option-typo": ["error", { presets: ["all"] }],
    "no-reserved-component-names": ["error", { disallowVue3BuiltInComponents: true }],
    "no-static-inline-styles": "warn",
    "no-template-target-blank": "warn",
    "no-useless-mustaches": "warn",
    "no-useless-v-bind": "warn",
    "padding-line-between-blocks": "warn",
    "require-direct-export": "warn",
    "require-name-property": "warn",
    "script-indent": ["warn", 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    "v-for-delimiter-style": "warn",
    "v-on-function-call": ["warn", "always"],

    /**
     * Extension Rules
     */
    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "brace-style": "warn",
    "camelcase": ["warn", { ignoreDestructuring: true }],
    "comma-dangle": "warn",
    "comma-spacing": "warn",
    "comma-style": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": "warn",
    "eqeqeq": "error",
    "func-call-spacing": "warn",
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "max-len": ["warn", { code: 120 }],
    "no-empty-pattern": "warn",
    "no-extra-parens": ["warn", "all", { nestedBinaryExpressions: false }],
    "no-sparse-arrays": "warn",
    "no-useless-concat": "warn",
    "object-curly-newline": "warn",
    "object-curly-spacing": ["warn", "always"],
    "operator-linebreak": "warn",
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", { words: true, nonwords: false }],
    "template-curly-spacing": "warn"
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
        ],
        "unicorn/prevent-abbreviations": ["warn", {
          replacements: {
            props: false
          }
        }]
      }
    },
    {
      files: ["*.html"],
      rules: {
        "vue/comment-directive": "off"
      }
    },
    {
      files: ["./*.config.js"],
      env: {
        node: true,
        browser: false
      }
    }
  ]
}
