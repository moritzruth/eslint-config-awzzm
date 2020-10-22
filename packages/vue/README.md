[**⬅️ Back to Overview**](https://github.com/moritzruth/eslint-config-awzzm)

# Vue.js and Nuxt.js Configuration
You don't need to install the base configuration (`eslint-config-awzzm`)
because this configuration extends it.

```shell script
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

**If you're using v3 of Vue.js, replace `awzzm-vue` with `awzzm-vue/v3`.**
**If you're using Nuxt.js, replace `awzzm-vue` with `awzzm-vue/nuxt`.**

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
