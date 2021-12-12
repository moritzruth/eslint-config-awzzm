const DEFAULT_INLINE_ELEMENTS = require("eslint-plugin-vue/lib/utils/inline-non-void-elements")

const INLINE_ELEMENTS = [
  ...DEFAULT_INLINE_ELEMENTS,
  "pre",
  "textarea",
  "router-link",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6"
]

module.exports = {
  extends: ["awzzm", "plugin:vue/base"],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".vue"]
  },
  env: {
    browser: true
  },
  globals: {
    process: true
  },
  rules: {
    /**
     * Essential
     */
    "vue/no-arrow-functions-in-watch": "error",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-dupe-keys": "error",
    "vue/no-dupe-v-else-if": "warn",
    "vue/no-duplicate-attributes": "error",
    "vue/no-mutating-props": "error",
    "vue/no-parsing-error": "error",
    "vue/no-reserved-keys": "error",
    "vue/no-shared-component-data": "error",
    "vue/no-side-effects-in-computed-properties": "warn",
    "vue/no-template-key": "error",
    "vue/no-textarea-mustache": "error",
    "vue/no-unused-components": "warn",
    "vue/no-unused-vars": "off",
    "vue/no-use-v-if-with-v-for": "warn",
    "vue/require-component-is": "error",
    "vue/require-prop-type-constructor": "error",
    "vue/require-render-return": "error",
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "error",
    "vue/return-in-computed-property": "error",
    "vue/use-v-on-exact": "warn",
    "vue/valid-template-root": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-slot": "error",
    "vue/valid-v-text": "error",
    "vue/no-deprecated-data-object-declaration": "error",
    "vue/no-deprecated-destroyed-lifecycle": "error",
    "vue/no-deprecated-dollar-listeners-api": "error",
    "vue/no-deprecated-dollar-scopedslots-api": "error",
    "vue/no-deprecated-events-api": "error",
    "vue/no-deprecated-filter": "error",
    "vue/no-deprecated-functional-template": "error",
    "vue/no-deprecated-html-element-is": "error",
    "vue/no-deprecated-inline-template": "error",
    "vue/no-deprecated-props-default-this": "error",
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-deprecated-slot-attribute": "error",
    "vue/no-deprecated-slot-scope-attribute": "error",
    "vue/no-deprecated-v-bind-sync": "error",
    "vue/no-deprecated-v-on-native-modifier": "error",
    "vue/no-deprecated-v-on-number-modifiers": "error",
    "vue/no-deprecated-vue-config-keycodes": "error",
    "vue/no-lifecycle-after-await": "error",
    "vue/no-ref-as-operand": "error",
    "vue/no-setup-props-destructure": "error",
    "vue/no-v-for-template-key-on-child": "error",
    "vue/no-watch-after-await": "error",
    "vue/require-slots-as-functions": "error",
    "vue/require-toggle-inside-transition": "warn",
    "vue/return-in-emits-validator": "error",
    "vue/valid-v-is": "error",

    /**
     * Strongly Recommended
     */
    "vue/attribute-hyphenation": "warn",
    "vue/component-definition-name-casing": ["warn", "PascalCase"],
    "vue/html-closing-bracket-spacing": ["warn", {
      startTag: "never",
      endTag: "never",
      selfClosingTag: "never"
    }],
    "vue/html-end-tags": "warn",
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "baseIndent": 1,
      "closeBracket": 0,
      "alignAttributesVertically": false,
      "ignores": []
    }],
    "vue/html-quotes": ["warn", "double", { avoidEscape: true }],
    "vue/html-self-closing": "warn",
    "vue/max-attributes-per-line": ["warn", {
      "singleline": {
        "max": 3,
        "allowFirstLine": true
      },
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/multiline-html-element-content-newline": ["warn", {
      "ignoreWhenEmpty": true,
      "ignores": INLINE_ELEMENTS,
      "allowEmptyLines": false
    }],
    "vue/mustache-interpolation-spacing": "warn",
    "vue/no-multi-spaces": "warn",
    "vue/no-spaces-around-equal-signs-in-attribute": "warn",
    "vue/no-template-shadow": "warn",
    "vue/one-component-per-file": "off",
    "vue/prop-name-casing": ["warn", "camelCase"],
    "vue/require-default-prop": "warn",
    "vue/require-prop-types": "warn",
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": INLINE_ELEMENTS
    }],
    "vue/v-bind-style": ["warn", "shorthand"],
    "vue/v-on-style": ["warn", "shorthand"],

    /**
     * Recommended
     */
    "vue/attributes-order": "warn",
    "vue/component-tags-order": ["warn", { order: ["template", "style", "script"] }],
    "vue/no-lone-template": "warn",
    "vue/no-multiple-slot-args": "error",
    "vue/no-v-html": "off",
    "vue/order-in-components": "warn",
    "vue/this-in-template": "error",

    /**
     * Uncategorized
     */
    "vue/block-lang": "off",
    "vue/block-tag-newline": ["warn", {
      singleline: "always",
      multiline: "always"
    }],
    "vue/component-api-style": "off",
    "vue/component-name-in-template-casing": ["warn", "PascalCase", {
      registeredComponentsOnly: true
    }],
    "vue/custom-event-name-casing": ["warn", "kebab-case"],
    "vue/html-button-has-type": "off",
    "vue/html-comment-content-newline": ["warn", {
      singleline: "never",
      multiline: "always"
    }],
    "vue/html-comment-content-spacing": "off",
    "vue/html-comment-indent": "off",
    "vue/match-component-file-name": "off",
    "vue/new-line-between-multi-line-property": "off",
    "vue/next-tick-style": "off",
    "vue/no-bare-strings-in-template": "off",
    "vue/no-boolean-default": ["error", "no-default"],
    "vue/no-deprecated-v-is": "error",
    "vue/no-duplicate-attr-inheritance": "error",
    "vue/no-empty-component-block": "off",
    "vue/no-export-in-script-setup": "error",
    "vue/no-invalid-model-keys": "error",
    "vue/no-multiple-objects-in-class": "warn",
    "vue/no-potential-component-option-typo": ["error", { presets: ["vue", "vue-router"] }],
    "vue/no-reserved-component-names": ["error", { disallowVue3BuiltInComponents: true }],
    "vue/no-restricted-block": "off",
    "vue/no-restricted-call-after-await": "off",
    "vue/no-restricted-component-options": "off",
    "vue/no-restricted-custom-event": "off",
    "vue/no-restricted-props": "off",
    "vue/no-restricted-static-attribute": "off",
    "vue/no-restricted-v-bind": "off",
    "vue/no-static-inline-styles": "off",
    "vue/no-this-in-before-route-enter": "error",
    "vue/no-template-target-blank": "warn",
    "vue/no-unregistered-components": "off",
    "vue/no-unsupported-features": "off",
    "vue/no-unused-properties": "off",
    "vue/no-unused-refs": "off",
    "vue/no-use-computed-property-like-method": "off",
    "vue/no-useless-mustaches": ["warn", {
      ignoreIncludesComment: false,
      ignoreStringEscape: false
    }],
    "vue/no-useless-v-bind": ["warn", {
      ignoreIncludesComment: false,
      ignoreStringEscape: false
    }],
    "vue/no-v-text": "off",
    "vue/padding-line-between-blocks": ["warn", "always"],
    "vue/require-direct-export": "off",
    "vue/require-emit-validator": "warn",
    "vue/require-expose": "off",
    "vue/require-name-property": "warn",
    "vue/script-indent": ["warn", 2, {
      baseIndent: 1,
      switchCase: 1
    }],
    "vue/sort-keys": "off",
    "vue/static-class-names-order": "off",
    "vue/v-for-delimiter-style": ["warn", "in"],
    "vue/v-on-event-hyphenation": ["warn", "always", {
      "autofix": true,
      "ignore": []
    }],
    "vue/v-on-function-call": "off",
    "vue/valid-define-emits": "error",
    "vue/valid-define-props": "error",
    "vue/valid-next-tick": "error",
    "vue/valid-v-memo": "error",

    /**
     * Extension Rules
     */
    "vue/array-bracket-newline": ["warn", "consistent"],
    "vue/array-bracket-spacing": "warn",
    "vue/arrow-spacing": "warn",
    "vue/block-spacing": "warn",
    "vue/brace-style": "warn",
    "vue/camelcase": ["warn", { ignoreDestructuring: true }],
    "vue/comma-dangle": "warn",
    "vue/comma-spacing": "warn",
    "vue/comma-style": "warn",
    "vue/dot-location": ["warn", "property"],
    "vue/dot-notation": "warn",
    "vue/eqeqeq": "error",
    "vue/func-call-spacing": "warn",
    "vue/key-spacing": "warn",
    "vue/keyword-spacing": "warn",
    "vue/max-len": ["warn", { code: 180 }],
    "vue/no-constant-condition": "warn",
    "vue/no-empty-pattern": "warn",
    "vue/no-extra-parens": "off",
    "vue/no-sparse-arrays": "warn",
    "vue/no-useless-concat": "warn",
    "vue/object-curly-newline": "warn",
    "vue/object-curly-spacing": ["warn", "always"],
    "vue/object-property-newline": "off",
    "vue/operator-linebreak": "warn",
    "vue/prefer-template": "off",
    "vue/space-in-parens": "warn",
    "vue/space-infix-ops": "warn",
    "vue/space-unary-ops": ["warn", { words: true, nonwords: false }],
    "vue/template-curly-spacing": "warn"
  },
  overrides: [
    {
      files: ["*.config.js", "*.config.ts"],
      rules: {
        "import/no-default-export": "off"
      },
      env: {
        node: true
      }
    },
    {
      files: ["postcss.config.js", ".eslintrc.js"],
      parserOptions: {
        sourceType: "script"
      },
      rules: {
        "@typescript-eslint/no-require-imports": "off"
      }
    },
    {
      files: ["*.vue"],
      rules: {
        "@typescript-eslint/indent": "off",
        "import/no-anonymous-default-export": "off",
        "import/no-default-export": "off"
      }
    }
  ]
}
