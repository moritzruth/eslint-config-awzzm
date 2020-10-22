const DEFAULT_INLINE_ELEMENTS = require("eslint-plugin-vue/lib/utils/inline-non-void-elements")

module.exports = {
  INLINE_ELEMENTS: [
    ...DEFAULT_INLINE_ELEMENTS,
    "pre",
    "textarea",
    "nuxt-link",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  ]
}
