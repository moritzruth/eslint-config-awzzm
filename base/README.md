# Base Configuration
```shell script
npm install eslint-config-awzzm
# or
yarn add eslint-config-awzzm
```

Add it to your ESLint configuration:
```json
{
  "extends": ["awzzm"]
}
```

## Most Significant Rules
- Files should use kebab case (`unicorn/filename-case`)
```
├── package.json
├── LICENSE
└── src/
    ├── index.js
    ├── cool-file.js
    ├── another-file.js
    └── utils/
        └── number-utils.js
```

- Use double quotes (`quotes`)
```js
// ✔️ Good
const a = "value"

// ❌ Bad
const b = 'value'
```

- Don't use semicolons (`semi`)
```js
// ✔️ Good
console.log("hi!")

// ❌ Bad
console.log("hi!");
```

- Don't use default exports (`import/no-default-export`)
> Why: [1](https://basarat.gitbook.io/typescript/main-1/defaultisbad) and [2](https://blog.neufund.org/why-we-have-banned-default-exports-and-you-should-do-the-same-d51fdc2cf2ad)
```js
// ✔️ Good
export const sayHello = () => console.log("hello")

// ❌ Bad
export default () => console.log("hello")
```
