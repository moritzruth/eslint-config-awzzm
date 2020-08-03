module.exports = {
  prefixKeys(prefix, obj) {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [prefix + key, value]))
  }
}
