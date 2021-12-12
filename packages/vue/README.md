[**⬅️ Back to Overview**](https://github.com/moritzruth/eslint-config-awzzm)

# Vue.js and NuxtJS Configuration
You don't need to install the base configuration (`eslint-config-awzzm`)
because this configuration extends it.

```sh
npm install --save-dev eslint-config-awzzm-vue
# or
yarn add -D eslint-config-awzzm-vue
```

Add it to your ESLint configuration:
```json
{
  "extends": ["awzzm-vue"]
}
```

> Note: If you need to use a custom ESLint parser, [read this](https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser).

## Most Significant Rules
- Script tag base intent multiplier is 1 (`vue/script-indent`)
```vue
// ✔️ Good
<script>
  export default {
    // ...
  }
</script>

// ❌ Bad
<script>
export default {
// ...
}
</script>
```
