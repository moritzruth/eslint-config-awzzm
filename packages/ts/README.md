[**⬅️ Back to Overview**](https://github.com/moritzruth/eslint-config-awzzm)

# TypeScript Configuration
You don't need to install the base configuration (`eslint-config-awzzm`)
because this configuration extends it.

```sh
npm install --save-dev eslint-config-awzzm-ts
# or
yarn add -D eslint-config-awzzm-ts
```

Add it to your ESLint configuration:
```json
{
  "extends": ["awzzm-ts"]
}
```

## Linting with type information
For some rules, type information is required.
In order to provide this, you need to add two properties to your `parserOptions`:
```js
// .eslintrc.js

module.exports = {
  // ...
  parserOptions: {
    tsConfigRootDir: __dirname, // Absolute path of your project's root directory
    project: ["./tsconfig.json"] // Relative path of your project's tsconfig.json file
  },
  // ...
}
```
