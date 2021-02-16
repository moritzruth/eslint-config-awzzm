const { prefixKeys } = require("eslint-config-awzzm/utils")

module.exports = {
  extends: ["awzzm"],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  overrides: [
    {
      files: ["eslintrc.js", "*.config.js"],
      parser: undefined
    },
    {
      files: ["*.ts"],
      rules: {
        ...prefixKeys("@typescript-eslint/", {
          "adjacent-overload-signatures": "warn",
          "array-type": ["warn", { default: "array-simple" }],
          "await-thenable": "off", // T
          "ban-ts-comment": "off",
          "ban-tslint-comment": "error",
          "ban-types": "off",
          "class-literal-property-style": "off",
          "consistent-indexed-object-style": "warn",
          "consistent-type-assertions": ["warn", { assertionStyle: "as" }],
          "consistent-type-definitions": ["warn", "interface"],
          "consistent-type-imports": "off",
          "explicit-function-return-type": "off",
          "explicit-member-accessibility": ["warn", { accessibility: "no-public" }],
          "explicit-module-boundaries-type": "off",
          "member-delimiter-style": [
            "warn", {
              multiline: { delimiter: "none" },
              singleline: { delimiter: "semi", requireLast: false }
            }
          ],
          "member-ordering": "off",
          "method-signature-style": "warn",
          "naming-convention": "off", // T
          "no-base-to-string": "off", // T
          "no-confusing-non-null-assertion": "warn",
          "no-confusing-void-expression": "off", // T
          "no-dynamic-delete": "off",
          "no-empty-interface": "off",
          "no-explicit-any": ["warn", { fixToUnknown: true }],
          "no-extra-non-null-assertion": "warn",
          "no-extraneous-class": "warn",
          "no-floating-promises": "off", // T
          "no-for-in-array": "off", // T
          "no-implicit-any-catch": "warn",
          "no-inferrable-types": "warn",
          "no-invalid-void-type": "error",
          "no-misused-new": "error",
          "no-misused-promises": "off", // T
          "no-namespace": "warn",
          "no-non-null-asserted-optional-chain": "warn",
          "no-non-null-assertion": "off",
          "no-require-imports": "error",
          "no-this-alias": "off",
          "no-type-alias": "off",
          "no-unnecessary-boolean-literal-compare": "off", // T
          "no-unnecessary-condition": "off", // T
          "no-unnecessary-qualifier": "off", // T
          "no-unnecessary-type-arguments": "off", // T
          "no-unnecessary-type-assertion": "off", // T
          "no-unnecessary-type-constraint": "warn",
          "no-unsafe-assignment": "off", // T
          "no-unsafe-call": "off", // T
          "no-unsafe-member-access": "off", // T
          "no-unsafe-return": "off", // T
          "no-var-requires": "off",
          "non-nullable-type-assertion-style": "off", // T
          "prefer-as-const": "warn",
          "prefer-enum-initializers": "off",
          "prefer-for-of": "warn",
          "prefer-function-type": "off",
          "prefer-includes": "off", // T
          "prefer-literal-enum-member": "warn",
          "prefer-namespace-keyword": "warn",
          "prefer-nullish-coalescing": "off", // T
          "prefer-optional-chain": "warn",
          "prefer-readonly": "off", // T
          "prefer-readonly-parameter-types": "off", // T
          "prefer-reduce-type-parameter": "off", // T
          "prefer-regexp-exec": "off", // T
          "prefer-string-starts-ends-with": "off", // T
          "prefer-ts-expect-error": "warn",
          "promise-function-async": "off", // T
          "require-array-sort-compare": "off", // T
          "restrict-plus-operands": "off", // T
          "restrict-template-expressions": "off", // T
          "strict-boolean-expressions": "off", // T
          "switch-exhaustiveness-check": "off", // T
          "triple-slash-reference": "off",
          "type-annotation-spacing": "warn",
          "typedef": "off",
          "unbound-method": "off", // T
          "unified-signatures": "warn",

          /**
           * Extensions
           */
          "brace-style": "warn",
          "comma-dangle": "warn",
          "comma-spacing": "warn",
          "default-param-last": "warn",
          "dot-notation": "off", // T
          "func-call-spacing": "warn",
          "indent": [
            "warn", 2, {
              SwitchCase: 1,
              flatTernaryExpressions: true
            }
          ],
          "init-declarations": "off",
          "keyword-spacing": "warn",
          "lines-between-class-members": "off",
          "no-array-constructor": "error",
          "no-dupe-class-members": "error",
          "no-empty-function": "off",
          "no-extra-parens": ["warn", "all", { nestedBinaryExpressions: false }],
          "no-extra-semi": "warn",
          "no-implied-eval": "off", // T
          "no-invalid-this": "warn",
          "no-loop-func": "warn",
          "no-loss-of-precision": "error",
          "no-magic-numbers": "off",
          "no-throw-literal": "off", // T
          "no-unused-expressions": "warn",
          "no-unused-vars": "warn",
          "no-use-before-define": ["error", {
            enums: false,
            typedefs: false,
            ignoreTypeReferences: true
          }],
          "no-useless-constructor": "warn",
          "quotes": "warn",
          "require-await": "off", // T
          "return-await": "off", // T
          "semi": ["warn", "never"],
          "space-before-function-paren": ["error", {
            anonymous: "never",
            named: "never",
            asyncArrow: "always"
          }]
        }),
        "brace-style": "off",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "default-param-last": "off",
        "dot-notation": "off",
        "func-call-spacing": "off",
        "indent": "off",
        "init-declarations": "off",
        "keyword-spacing": "off",
        "lines-between-class-members": "off",
        "no-array-constructor": "off",
        "no-dupe-class-members": "off",
        "no-empty-function": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-implied-eval": "off",
        "no-invalid-this": "off",
        "no-loop-func": "off",
        "no-loss-of-precision": "off",
        "no-magic-numbers": "off",
        "no-throw-literal": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "quotes": "off",
        "require-await": "off",
        "no-return-await": "off",
        "semi": "off",
        "space-before-function-paren": "off"
      }
    }
  ]
}
