const fromEntries = require("object.fromentries")

module.exports = {
  prefixKeys(prefix, object) {
    return fromEntries(Object.entries(object).map(([key, value]) => [prefix + key, value]))
  }
}
