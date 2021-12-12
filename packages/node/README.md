[**⬅️ Back to Overview**](https://github.com/moritzruth/eslint-config-awzzm)

# Node.js Configuration
You don't need to install the base configuration (`eslint-config-awzzm`)
because this configuration extends it.

Node.js v14 is required.

```sh
npm install --save-dev eslint-config-awzzm-node
# or
yarn add -D eslint-config-awzzm-node
```

Add it to your ESLint configuration:
```json
{
  "extends": ["awzzm-node"]
}
```

## Specifying Your Node.js Version
In order to work properly, some rules
[require you](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-unsupported-features/node-builtins.md#configured-nodejs-version-range)
to specify the Node.js version you're using in your package.json:
```json
{
  "name": "my-package",
  // ...
  "engines": {
    "node": ">=10.0.0"
  }
}
```

You should lint your files with the same Node.js version as you use for running it.
