class TwilightSet extends Set {
  _parsersMap = new Map()

  add(parser) {
    if (
      !parser ||
      typeof parser !== 'function' ||
      !Array.isArray(parser.propNames)
    ) {
      throw new Error('Invalid value to add')
    }

    parser.propNames.forEach((propName) =>
      this._parsersMap.set(propName, parser)
    )
    return super.add(parser)
  }

  delete(parser) {
    let a = parser
    if (typeof parser === 'string' && this._parsersMap.has(parser)) {
      a = this._parsersMap.get(parser)
    }

    if (!a.propNames) {
      return false
    }

    a.propNames.forEach((propName) => this._parsersMap.delete(propName))
    return super.delete(a)
  }

  has(parser) {
    if (typeof parser === 'string') {
      return this._parsersMap.has(parser)
    }
    return super.has(parser)
  }

  get(key) {
    return this._parsersMap.get(key)
  }

  getReferencesMap() {
    return this._parsersMap
  }

  getSupportedProps() {
    return Array.from(this._parsersMap.keys())
  }

  refreshReferancesMap() {
    this._parsersMap.clear()
    this.forEach((parser) => this.add(parser))
  }
}

const parsersManager = new TwilightSet()

export default parsersManager
