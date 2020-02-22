module.exports = {
  plugins: ["@typescript-eslint"],
  settings: {
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    "import/resolver": { typescript: {} }
  },
  overrides: [
    {
      files: ["*.ts"],
      rules: {
        "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/brace-style": "warn",
        "brace-style": "off",
        "@typescript-eslint/camelcase": [
          "warn",
          { ignoreDestructuring: true, properties: "always", genericType: "always" }
        ],
        "camelcase": "off",
        "@typescript-eslint/class-name-casing": "warn",
        "@typescript-eslint/consistent-type-assertions": ["warn", { assertionStyle: "as" }],
        "@typescript-eslint/consistent-type-definitions": ["warn", "interface"],
        "@typescript-eslint/func-call-spacing": "warn",
        "@typescript-eslint/indent": ["warn", 2],
        "indent": "off",
        "@typescript-eslint/member-delimiter-style": [
          "warn", {
            multiline: { delimiter: "semi", requireLast: true },
            singleline: { delimiter: "semi", requireLast: true }
          }
        ],
        "@typescript-eslint/member-ordering": "warn",
        "@typescript-eslint/no-dynamic-delete": "warn",
        "@typescript-eslint/no-empty-function": "warn",
        "no-empty-function": "off",
        "@typescript-eslint/no-extra-parens": "warn",
        "no-extra-parens": "off",
        "@typescript-eslint/no-extraneous-class": ["warn", {
          allowStaticOnly: true
        }],
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "warn",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "warn",
        "@typescript-eslint/no-require-imports": "warn",
        "@typescript-eslint/no-unnecessary-condition": "warn",
        "@typescript-eslint/no-unnecessary-type-arguments": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "warn",
        "@typescript-eslint/no-unused-expressions": "warn",
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-includes": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/prefer-readonly": "warn",
        "@typescript-eslint/prefer-regexp-exec": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/promise-function-async": "off",
        "require-await": "off",
        "@typescript-eslint/quotes": "warn",
        "quotes": "off",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": [
          "warn", {
            allowNumber: true,
            allowBoolean: true,
            allowNullable: true
          }
        ],
        "@typescript-eslint/semi": ["warn", "always", { omitLastInOneLineBlock: false }],
        "semi": "off",
        "@typescript-eslint/space-before-function-paren": ["warn", {
          anonymous: "never",
          named: "never",
          asyncArrow: "always"
        }],
        "space-before-function-paren": "off",
        "@typescript-eslint/type-annotation-spacing": "warn",
        "@typescript-eslint/unified-signatures": "warn",
        "import/default": "off",
        "import/named": "off",
        "import/namespace": "off",
        "import/no-cycle": "off"
      }
    }
  ]
};
