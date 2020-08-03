const pluginRules = require("./plugin-rules")

// https://eslint.org/docs/rules/

module.exports = {
  plugins: [
    "unicorn",
    "import"
  ],
  rules: {
    /**
     * Possible Errors
     */
    "for-direction": "warn",
    "getter-return": "error",
    "no-async-promise-executor": "warn",
    "no-await-in-loop": "warn",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-console": "off",
    "no-constant-condition": "warn",
    "no-control-regex": "warn",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-else-if": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-empty": "warn",
    "no-empty-character-class": "warn",
    "no-ex-assign": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-parens": ["warn", "all", { nestedBinaryExpressions: false }],
    "no-extra-semi": "warn",
    "no-func-assign": "warn",
    "no-import-assign": "warn",
    "no-inner-declarations": "warn",
    "no-invalid-regexp": "error",
    "no-loss-of-precision": "error",
    "no-misleading-character-class": "warn",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "warn",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-unexpected-multiline": "warn",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "warn",
    "no-unsafe-negation": "error",
    "no-useless-backreference": "warn",
    "require-atomic-updates": "off",
    "use-isnan": "error",
    "valid-typeof": "error",

    /**
     * Best Practices
     */
    "accessor-pairs": "off",
    "array-callback-return": [
      "warn",
      {
        // See https://git.io/JJrFt
        allowImplicit: true
      }
    ],
    "block-scoped-var": "off",
    "class-methods-use-this": "warn",
    "complexity": "off",
    "consistent-return": "warn",
    "curly": ["warn", "multi-or-nest"],
    "default-case": "off",
    "default-case-last": "warn",
    "default-param-last": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": "warn",
    "eqeqeq": "error",
    "grouped-accessor-pairs": "warn",
    "guard-for-in": "error",
    "max-classes-per-file": "off",
    "no-alert": "off",
    "no-caller": "error",
    "no-case-declarations": "off",
    "no-constructor-return": "error",
    "no-div-regex": "off",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-empty-pattern": "warn",
    "no-eq-null": "off", // Not needed because of eqeqeq
    "no-eval": "warn",
    "no-extend-native": "error",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-fallthrough": "off",
    "no-floating-decimal": "warn",
    "no-implicit-coercion": "warn",
    "no-implicit-globals": "off",
    "no-implied-eval": "warn",
    "no-invalid-this": "warn",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-magic-numbers": "off",
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-new": "error",
    "no-new-func": "warn",
    "no-new-wrappers": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "warn",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "warn",
    "no-return-assign": "error",
    "no-return-await": "warn",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-unmodified-loop-condition": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "warn",
    "no-useless-call": "warn",
    "no-useless-catch": "warn",
    "no-useless-concat": "warn",
    "no-useless-escape": "warn",
    "no-useless-return": "warn",
    "no-void": "error",
    "no-warning-comments": "off",
    "no-with": "error",
    "prefer-named-capture-group": "off",
    "prefer-promise-reject-errors": "error",
    "prefer-regex-literals": "warn",
    "radix": "warn",
    "require-await": "warn",
    "require-unicode-regexp": "warn",
    "vars-on-top": "off",
    "wrap-iife": "warn",
    "yoda": "warn",

    /**
     * Strict mode
     */
    "strict": "off",

    /**
     * Variables
     */
    "init-declarations": "off",
    "no-delete-var": "error",
    "no-label-var": "warn",
    "no-restricted-globals": "off",
    "no-shadow": "warn",
    "no-undef": "error",
    "no-undef-init": "warn",
    "no-undefined": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": "error",

    /**
     * Stylistic Issues
     */
    "array-bracket-newline": ["warn", "consistent"],
    "array-bracket-spacing": "warn",
    "array-element-newline": ["warn", "consistent"],
    "block-spacing": "warn",
    "brace-style": "warn",
    "camelcase": ["warn", { ignoreDestructuring: true }],
    "capitalized-comments": "off",
    "comma-dangle": "warn",
    "comma-spacing": "warn",
    "comma-style": "warn",
    "computed-property-spacing": ["warn", "never", { enforceForClassMembers: true }],
    "consistent-this": ["warn", "self"],
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "func-name-matching": "warn",
    "func-names": ["warn", "as-needed"],
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "function-call-argument-newline": ["warn", "consistent"],
    "function-paren-newline": ["warn", "multiline"],
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": "warn",
    "indent": [
      "warn", 2, {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    "jsx-quotes": "warn",
    "key-spacing": "warn",
    "keyword-spacing": "warn",
    "line-comment-position": "off",
    "linebreak-style": "error",
    "lines-around-comment": "off",
    "lines-between-class-members": "off",
    "max-depth": "off",
    "max-len": ["warn", { code: 120 }],
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": ["warn", "always-multiline"],
    "new-cap": "off",
    "new-parens": "warn",
    "newline-per-chained-call": "warn",
    "no-array-constructor": "error",
    "no-bitwise": "error",
    "no-continue": "off",
    "no-inline-comments": "off",
    "no-lonely-if": "warn",
    "no-mixed-operators": "warn",
    "no-mixed-spaces-and-tabs": "off", // Not needed because of indent
    "no-multi-assign": "warn",
    "no-multiple-empty-lines": [
      "warn", {
        max: 1,
        maxEOF: 0,
        maxBOF: 0
      }
    ],
    "no-negated-condition": "warn",
    "no-nested-ternary": "off", // See unicorn/no-nested-ternary
    "no-new-object": "warn",
    "no-plusplus": "off",
    "no-restricted-syntax": "off",
    "no-tabs": "warn",
    "no-ternary": "off",
    "no-trailing-spaces": ["warn", { skipBlankLines: true }],
    "no-unneeded-ternary": "warn",
    "no-whitespace-before-property": "warn",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": "off",
    "one-var": ["warn", {
      initialized: "never",
      uninitialized: "consecutive"
    }],
    "one-var-declaration-per-line": "off",
    "operator-assignment": "warn",
    "operator-linebreak": "warn",
    "padded-blocks": ["warn", "never"],
    "padding-line-between-statements": "off",
    "prefer-exponentiation-operator": "warn",
    "prefer-object-spread": "warn",
    "quote-props": ["warn", "consistent-as-needed"],
    "quotes": "warn",
    "semi": ["warn", "never"],
    "semi-spacing": "warn",
    "semi-style": "warn",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "warn",
    "space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always"
    }],
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", { words: true, nonwords: false }],
    "spaced-comment": "warn",
    "switch-colon-spacing": "warn",
    "template-tag-spacing": "warn",
    "unicode-bom": "warn",
    "wrap-regex": "off",

    /**
     * ECMAScript 6
     */
    "arrow-body-style": "warn",
    "arrow-parens": ["warn", "as-needed", { requireForBlockBody: false }],
    "arrow-spacing": "warn",
    "constructor-super": "warn",
    "generator-star-spacing": ["warn", { before: false, after: true }],
    "no-class-assign": "error",
    "no-confusing-arrow": "off",
    "no-const-assign": "error",
    "no-duplicate-imports": "off", // See import/no-duplicates
    "no-new-symbol": "error",
    "no-restricted-exports": "off",
    "no-restricted-imports": "off",
    "no-this-before-super": "error",
    "no-useless-computed-key": ["warn", { enforceForClassMembers: true }],
    "no-useless-constructor": "warn",
    "no-useless-rename": "warn",
    "no-var": "error",
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-destructuring": "warn",
    "prefer-numeric-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "off",
    "require-yield": "error",
    "rest-spread-spacing": "warn",
    "template-curly-spacing": "warn",
    "yield-star-spacing": "warn",
    ...pluginRules
  }
}
