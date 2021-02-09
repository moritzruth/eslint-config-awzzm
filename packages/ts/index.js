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
    },
    project: "tsconfig.json"
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
          "await-thenable": "warn",
          "ban-ts-comment": "off",
          "ban-tslint-comment": "error",
          "ban-types": "off",
          "class-literal-property-style": "off",
          "consistent-type-assertions": ["warn", { assertionStyle: "as" }],
          "consistent-type-definitions": ["warn", "interface"],
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
          "naming-convention": "warn",
          "no-base-to-string": "warn",
          "no-confusing-non-null-assertion": "warn",
          "no-dynamic-delete": "off",
          "no-empty-interface": "off",
          "no-explicit-any": ["warn", { fixToUnknown: true }],
          "no-extra-non-null-assertion": "warn",
          "no-extraneous-class": "warn",
          "no-floating-promises": "warn",
          "no-for-in-array": "error",
          "no-implied-eval": "error",
          "no-inferrable-types": "warn",
          "no-invalid-void-type": "error",
          "no-misused-new": "error",
          "no-misused-promises": "warn",
          "no-namespace": "warn",
          "no-non-null-asserted-optional-chain": "warn",
          "no-non-null-assertion": "off",
          "no-require-imports": "error",
          "no-this-alias": "off",
          "no-throw-literal": "error",
          "no-type-alias": "off",
          "no-unnecessary-boolean-literal-compare": "warn",
          "no-unnecessary-condition": "warn",
          "no-unnecessary-qualifier": "warn",
          "no-unnecessary-type-arguments": "warn",
          "no-unnecessary-type-assertion": "warn",
          "no-unsafe-assignment": "warn",
          "no-unsafe-call": "warn",
          "no-unsafe-member-access": "off",
          "no-unsafe-return": "warn",
          "no-unused-vars-experimental": "off",
          "no-var-required": "off",
          "prefer-as-const": "warn",
          "prefer-enum-initializers": "off",
          "prefer-for-of": "warn",
          "prefer-function-type": "off",
          "prefer-includes": "warn",
          "prefer-literal-enum-member": "warn",
          "prefer-namespace-keyword": "warn",
          "prefer-nullish-coalescing": "warn",
          "prefer-optional-chain": "warn",
          "prefer-readonly": "warn",
          "prefer-readonly-parameter-types": "off",
          "prefer-reduce-type-parameter": "warn",
          "prefer-regexp-exec": "off",
          "prefer-string-starts-ends-with": "warn",
          "prefer-ts-expect-error": "warn",
          "promise-function-async": "warn",
          "require-array-sort-compare": "off",
          "restrict-plus-operands": "warn",
          "restrict-template-expressions": "off",
          "strict-boolean-expressions": "warn",
          "switch-exhaustiveness-check": "warn",
          "triple-slash-reference": "off",
          "type-annotation-spacing": "warn",
          "typedef": "off",
          "unbound-method": "error",
          "unified-signatures": "warn",

          /**
           * Extensions
           */
          "brace-style": "warn",
          "comma-spacing": "warn",
          "default-param-last": "warn",
          "dot-notation": "warn",
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
          "no-empty-function": "warn",
          "no-extra-parens": ["warn", "all", { nestedBinaryExpressions: false }],
          "no-extra-semi": "warn",
          "no-invalid-this": "warn",
          "no-loss-of-precision": "error",
          "no-magic-numbers": "off",
          "no-unused-expressions": "error",
          "no-unused-vars": "warn",
          "no-use-before-define": "error",
          "no-useless-constructor": "warn",
          "quotes": "warn",
          "require-await": "warn",
          "return-await": "warn",
          "semi": ["warn", "never"],
          "space-before-function-paren": ["error", {
            anonymous: "never",
            named: "never",
            asyncArrow: "always"
          }]
        }),
        "brace-style": "off",
        "comma-spacing": "off",
        "default-param-last": "off",
        "dot-notation": "off",
        "func-call-spacing": "off",
        "indent": "off",
        "keyword-spacing": "off",
        "no-array-constructor": "off",
        "no-empty-function": "off",
        "no-extra-parens": "off",
        "no-extra-semi": "off",
        "no-invalid-this": "off",
        "no-loss-of-precision": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "quotes": "off",
        "require-await": "off",
        "semi": "off",
        "space-before-function-paren": "off",
        "unicorn/filename-case": ["warn", {
          cases: {
            camelCase: true,
            pascalCase: true
          }
        }]
      }
    }
  ]
}
