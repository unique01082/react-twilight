class TwilightMap extends Map {
  register(parser) {
    parser.propNames.forEach((propName) => {
      this.set(propName, parser)
    })
  }
}

const twilightMap = new TwilightMap()

export default twilightMap
