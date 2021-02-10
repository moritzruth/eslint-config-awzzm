[**⬅️ Back to overview**](https://github.com/moritzruth/eslint-config-awzzm)

# Base Configuration
```sh
npm install --save-dev eslint-config-awzzm
# or
yarn add -D eslint-config-awzzm
```

Add it to your ESLint configuration:
```json
{
  "extends": ["awzzm"]
}
```

## Most Significant Rules
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
