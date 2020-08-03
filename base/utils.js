const fromEntries = require("object.fromentries")

module.exports = {
  prefixKeys(prefix, obj) {
    return fromEntries(Object.entries(obj).map(([key, value]) => [prefix + key, value]))
  }
}
