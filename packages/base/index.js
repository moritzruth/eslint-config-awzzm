module.exports = {
  plugins: ["@typescript-eslint", "import", "unicorn"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  env: {
    es6: true
  },
  rules: {
    /**
     * Possible Errors
     */
    "for-direction": "warn",
    "getter-return": "error",
    "no-async-promise-executor": "warn",
    "no-await-in-loop": "off",
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
    "no-func-assign": "warn",
    "no-import-assign": "warn",
    "no-inner-declarations": "warn",
    "no-invalid-regexp": "error",
    "no-misleading-character-class": "warn",
    "no-obj-calls": "error",
    "no-promise-executor-return": "error",
    "no-prototype-builtins": "error",
    "no-regex-spaces": "warn",
    "no-setter-return": "error",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-unexpected-multiline": "warn",
    "no-unreachable": "error",
    "no-unreachable-loop": "error",
    "no-unsafe-finally": "warn",
    "no-unsafe-negation": "error",
    "no-unsafe-optional-chaining": "error",
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
    "class-methods-use-this": "off",
    "complexity": "off",
    "consistent-return": "off",
    "curly": "off",
    "default-case": "off",
    "default-case-last": "warn",
    "dot-location": ["warn", "property"],
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
    "no-empty-pattern": "warn",
    "no-eq-null": "off", // Not needed because of eqeqeq
    "no-eval": "warn",
    "no-extend-native": "error",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-fallthrough": "off",
    "no-floating-decimal": "warn",
    "no-global-assign": "error",
    "no-implicit-coercion": "warn",
    "no-implicit-globals": "off",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "warn",
    "no-multi-spaces": "warn",
    "no-multi-str": "warn",
    "no-new": "error",
    "no-new-func": "warn",
    "no-new-wrappers": "error",
    "no-nonoctal-decimal-escape": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "warn",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-restricted-properties": "warn",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-unmodified-loop-condition": "error",
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
    "require-unicode-regexp": "warn",
    "vars-on-top": "off",
    "wrap-iife": "warn",
    "yoda": "warn",

    /**
     * Variables
     */
    "no-delete-var": "error",
    "no-label-var": "warn",
    "no-restricted-globals": "off",
    "no-shadow": "warn",
    "no-undef": "error",
    "no-undef-init": "warn",
    "no-undefined": "off",

    /**
     * Stylistic Issues
     */
    "array-bracket-newline": ["warn", "consistent"],
    "array-bracket-spacing": "warn",
    "array-element-newline": ["warn", "consistent"],
    "block-spacing": "warn",
    "camelcase": ["warn", { ignoreDestructuring: true }],
    "capitalized-comments": "off",
    "comma-style": "warn",
    "computed-property-spacing": ["warn", "never", { enforceForClassMembers: true }],
    "consistent-this": ["warn", "self"],
    "eol-last": "warn",
    "func-name-matching": "warn",
    "func-names": ["warn", "as-needed"],
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "function-call-argument-newline": ["warn", "consistent"],
    "function-paren-newline": ["warn", "multiline"],
    "id-denylist": "off",
    "id-length": "off",
    "id-match": "off",
    "implicit-arrow-linebreak": "off",
    "jsx-quotes": "warn",
    "key-spacing": "warn",
    "line-comment-position": "off",
    "linebreak-style": "error",
    "lines-around-comment": "off",
    "max-depth": "off",
    "max-len": ["warn", { code: 180 }],
    "max-lines-per-function": "off",
    "max-nested-callbacks": "off",
    "max-params": "off",
    "max-statements": "off",
    "max-statements-per-line": "off",
    "multiline-comment-style": "off",
    "multiline-ternary": ["warn", "always-multiline"],
    "new-cap": "off",
    "new-parens": "warn",
    "newline-per-chained-call": "off",
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
    "semi-spacing": "warn",
    "semi-style": "warn",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": "warn",
    "space-in-parens": "warn",
    "space-infix-ops": "warn",
    "space-unary-ops": ["warn", { words: true, nonwords: false }],
    "spaced-comment": ["warn", "always", { markers: ["/"] }], // for TypeScript's triple slash directive
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
    "sort-imports": "off", // See import/order
    "template-curly-spacing": "warn",
    "yield-star-spacing": "warn",

    /**
     * TypeScript
     */

    // T = requires type information
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/await-thenable": "off", // T
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-tslint-comment": "error",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/class-literal-property-style": "off",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": ["warn", { assertionStyle: "as" }],
    "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": ["warn", { accessibility: "no-public" }],
    "@typescript-eslint/explicit-module-boundaries-type": "off",
    "@typescript-eslint/member-delimiter-style": [
      "warn", {
        multiline: { delimiter: "none" },
        singleline: { delimiter: "semi", requireLast: false }
      }
    ],
    "@typescript-eslint/member-ordering": "off",
    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/naming-convention": "off", // T
    "@typescript-eslint/no-base-to-string": "off", // T
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-confusing-void-expression": "off", // T
    "@typescript-eslint/no-dynamic-delete": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": ["off", { fixToUnknown: true }],
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-floating-promises": "off", // T
    "@typescript-eslint/no-for-in-array": "off", // T
    "@typescript-eslint/no-implicit-any-catch": "warn",
    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-invalid-void-type": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "off", // T
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/no-type-alias": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off", // T
    "@typescript-eslint/no-unnecessary-condition": "off", // T
    "@typescript-eslint/no-unnecessary-qualifier": "off", // T
    "@typescript-eslint/no-unnecessary-type-arguments": "off", // T
    "@typescript-eslint/no-unnecessary-type-assertion": "off", // T
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unsafe-assignment": "off", // T
    "@typescript-eslint/no-unsafe-call": "off", // T
    "@typescript-eslint/no-unsafe-member-access": "off", // T
    "@typescript-eslint/no-unsafe-return": "off", // T
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off", // T
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-enum-initializers": "off",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "off",
    "@typescript-eslint/prefer-includes": "off", // T
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-namespace-keyword": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "off", // T
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-readonly": "off", // T
    "@typescript-eslint/prefer-readonly-parameter-types": "off", // T
    "@typescript-eslint/prefer-reduce-type-parameter": "off", // T
    "@typescript-eslint/prefer-regexp-exec": "off", // T
    "@typescript-eslint/prefer-string-starts-ends-with": "off", // T
    "@typescript-eslint/prefer-ts-expect-error": "warn",
    "@typescript-eslint/promise-function-async": "off", // T
    "@typescript-eslint/require-array-sort-compare": "off", // T
    "@typescript-eslint/restrict-plus-operands": "off", // T
    "@typescript-eslint/restrict-template-expressions": "off", // T
    "@typescript-eslint/strict-boolean-expressions": "off", // T
    "@typescript-eslint/switch-exhaustiveness-check": "off", // T
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/typedef": "off",
    "@typescript-eslint/unbound-method": "off", // T
    "@typescript-eslint/unified-signatures": "warn",

    /**
     * Extensions of built-in rules
     */
    "@typescript-eslint/brace-style": "warn",
    "@typescript-eslint/comma-dangle": "warn",
    "@typescript-eslint/comma-spacing": "warn",
    "@typescript-eslint/default-param-last": "warn",
    "@typescript-eslint/dot-notation": "off", // T
    "@typescript-eslint/func-call-spacing": "warn",
    "@typescript-eslint/indent": [
      "warn", 2, {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ],
    "@typescript-eslint/init-declarations": "off",
    "@typescript-eslint/keyword-spacing": "warn",
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extra-semi": "warn",
    "@typescript-eslint/no-implied-eval": "off", // T
    "@typescript-eslint/no-invalid-this": "warn",
    "@typescript-eslint/no-loop-func": "warn",
    "@typescript-eslint/no-loss-of-precision": "error",
    "@typescript-eslint/no-magic-numbers": "off",
    "@typescript-eslint/no-throw-literal": "off", // T
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": ["error", {
      enums: false,
      typedefs: false,
      ignoreTypeReferences: true
    }],
    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/quotes": "warn",
    "@typescript-eslint/require-await": "off", // T
    "@typescript-eslint/return-await": "off", // T
    "@typescript-eslint/semi": ["warn", "never"],
    "@typescript-eslint/space-before-function-paren": ["error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always"
    }],

    /**
     * eslint-plugin-import
     */
    "import/no-self-import": "warn",
    "import/export": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "warn",
    "import/first": "warn",
    "import/exports-last": "off",
    "import/no-duplicates": "warn",
    "import/no-namespace": "off",
    "import/extensions": "off",
    "import/order": "warn",
    "import/newline-after-import": "warn",
    "import/prefer-default-export": "off",
    "import/max-dependencies": "off",
    "import/no-unassigned-import": "off",
    "import/no-named-default": "warn",
    "import/no-default-export": "warn",
    "import/no-named-export": "off",
    "import/no-anonymous-default-export": "warn",
    "import/group-exports": "off",
    "import/dynamic-import-chunkname": "off",
    "import/no-dynamic-require": "off",

    /**
     * eslint-plugin-unicorn
     */
    "unicorn/better-regex": "warn",
    "unicorn/catch-error-name": "warn",
    "unicorn/consistent-destructuring": "off",
    "unicorn/consistent-function-scoping": "warn",
    "unicorn/custom-error-definition": "warn",
    "unicorn/empty-brace-spaces": "warn",
    "unicorn/error-message": "warn",
    "unicorn/escape-case": "warn",
    "unicorn/expiring-todo-comments": "warn",
    "unicorn/explicit-length-check": "warn",
    "unicorn/filename-case": "off",
    "unicorn/import-index": "warn",
    "unicorn/import-style": "off",
    "unicorn/new-for-builtins": "warn",
    "unicorn/no-abusive-eslint-disable": "warn",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-array-push-push": "warn",
    "unicorn/no-array-reduce": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/no-console-spaces": "warn",
    "unicorn/no-empty-file": "off",
    "unicorn/no-for-loop": "warn",
    "unicorn/no-hex-escape": "warn",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-remove-event-listener": "warn",
    "unicorn/no-keyword-prefix": "off",
    "unicorn/no-lonely-if": "off",
    "unicorn/no-nested-ternary": "warn",
    "unicorn/no-new-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-null": "off",
    "unicorn/no-object-as-default-parameter": "warn",
    "unicorn/no-process-exit": "off",
    "unicorn/no-this-assignment": "off",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-unused-properties": "off",
    "unicorn/no-useless-fallback-in-spread": "warn",
    "unicorn/no-useless-length-check": "warn",
    "unicorn/no-useless-spread": "warn",
    "unicorn/no-useless-undefined": "off",
    "unicorn/no-zero-fractions": "warn",
    "unicorn/number-literal-case": "warn",
    "unicorn/numeric-separators-style": "off",
    "unicorn/prefer-add-event-listener": "error",
    "unicorn/prefer-array-find": "warn",
    "unicorn/prefer-array-flat-map": "warn",
    "unicorn/prefer-array-index-of": "warn",
    "unicorn/prefer-array-some": "warn",
    "unicorn/prefer-code-point": "error",
    "unicorn/prefer-date-now": "warn",
    "unicorn/prefer-default-parameters": "warn",
    "unicorn/prefer-dom-node-append": "warn",
    "unicorn/prefer-dom-node-dataset": "warn",
    "unicorn/prefer-dom-node-remove": "warn",
    "unicorn/prefer-dom-node-text-content": "error",
    "unicorn/prefer-export-from": "off",
    "unicorn/prefer-includes": "warn",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "warn",
    "unicorn/prefer-negative-index": "warn",
    "unicorn/prefer-object-from-entries": "warn",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-optional-catch-binding": "warn",
    "unicorn/prefer-query-selector": "warn",
    "unicorn/prefer-reflect-apply": "warn",
    "unicorn/prefer-regexp-test": "warn",
    "unicorn/prefer-set-has": "warn",
    "unicorn/prefer-spread": "warn",
    "unicorn/prefer-string-replace-all": "warn",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-string-starts-ends-with": "warn",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-ternary": "off",
    "unicorn/prefer-type-error": "warn",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/string-content": "off",
    "unicorn/template-indent": "warn",
    "unicorn/throw-new-error": "warn"
  },
  overrides: [
    {
      files: ["**/.eslintrc.js"],
      env: {
        node: true
      }
    }
  ]
}
