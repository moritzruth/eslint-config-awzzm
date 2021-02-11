const { prefixKeys } = require("eslint-config-awzzm/utils")
const { INLINE_ELEMENTS } = require("./inline-elements")

module.exports = {
  // plugin:vue/vue3-recommended includes essential (error), strongly recommended (warn) and recommended (warn)
  extends: ["awzzm", "plugin:vue/vue3-recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es6: true
  },
  globals: {
    process: true
  },
  rules: prefixKeys("vue/", {
    /**
     * Essential
     */
    "no-dupe-v-else-if": "warn",
    "no-side-effects-in-computed-properties": "warn",
    "no-unused-components": "warn",
    "no-unused-vars": "off",
    "no-use-v-if-with-v-for": "warn",
    "use-v-on-exact": "warn",

    /**
     * Strongly Recommended
     */
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
    "component-name-in-template-casing": ["warn", "PascalCase", {
      registeredComponentsOnly: true
    }],
    "custom-event-name-casing": "warn",
    "html-comment-content-newline": "warn",
    "html-comment-content-spacing": "warn",
    "html-comment-indent": "warn",
    "match-component-file-name": ["warn", {
      extensions: [".vue"],
      shouldMatchCase: true
    }],
    "new-line-between-multi-line-property": "off",
    "next-tick-style": "off",
    "no-bare-strings-in-template": "off",
    "no-boolean-default": "error",
    "no-duplicate-attr-inheritance": "error",
    "no-empty-component-block": "off",
    "no-multiple-objects-in-class": "warn",
    "no-potential-component-option-typo": ["error", { presets: ["vue", "vue-router"] }],
    "no-reserved-component-names": ["error", { disallowVue3BuiltInComponents: true }],
    "no-restricted-block": "off",
    "no-restricted-call-after-await": "off",
    "no-restricted-component-options": "off",
    "no-restricted-custom-event": "off",
    "no-restricted-props": "off",
    "no-restricted-static-attribute": "off",
    "no-restricted-v-bind": "off",
    "no-static-inline-styles": "warn",
    "no-template-target-blank": "warn",
    "no-unregistered-components": "off",
    "no-unsupported-features": ["warn", { version: "^3.0.0" }],
    "no-unused-properties": "off",
    "no-useless-mustaches": "warn",
    "no-useless-v-bind": "warn",
    "padding-line-between-blocks": "warn",
    "require-direct-export": "off",
    "require-name-property": "warn",
    "script-indent": ["warn", 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    "sort-keys": "off",
    "static-class-names-order": "off",
    "v-for-delimiter-style": "warn",
    "v-on-event-hyphenation": "warn",
    "v-on-function-call": ["warn", "always"],
    "valid-next-tick": "error",

    /**
     * Extension Rules
     */
    "array-bracket-newline": ["warn", "consistent"],
    "array-bracket-spacing": "warn",
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
    "no-constant-condition": "warn",
    "no-empty-pattern": "warn",
    "no-extra-parens": "off",
    "no-sparse-arrays": "warn",
    "no-useless-concat": "warn",
    "object-curly-newline": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": "off",
    "operator-linebreak": "warn",
    "prefer-template": "off",
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
      },
      rules: {
        "import/no-anonymous-default-export": "off",
        "import/no-default-export": "off"
      }
    }
  ]
}
