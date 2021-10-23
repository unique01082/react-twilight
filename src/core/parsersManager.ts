import type { Parser } from '../type'

class ParsersSet<P extends Parser> extends Set<P> {
  private readonly _parsersMap: Map<string, P> = new Map<string, P>()

  add(parser: P): this {
    if (!parser) {
      throw new Error('Parser is missing in argument')
    }
    if (typeof parser !== 'function') {
      throw new Error('Parser must be a function')
    }
    if (!Array.isArray(parser.propNames)) {
      throw new Error('Invalid value to add')
    }

    parser.propNames.forEach((propName) =>
      this._parsersMap.set(propName, parser)
    )
    return super.add(parser)
  }

  delete(propNameOrParser: string | P): boolean {
    if (!propNameOrParser) {
      return false
    }
    let parser: P | undefined
    if (typeof propNameOrParser === 'string') {
      parser = this._parsersMap.get(propNameOrParser)
    } else {
      parser = propNameOrParser
    }

    if (!parser) {
      return false
    }

    const result: boolean = super.delete(parser)
    this.refreshReferancesMap()

    return result
  }

  has(parser: string | P): boolean {
    if (typeof parser === 'string') {
      return this._parsersMap.has(parser)
    }
    return super.has(parser)
  }

  get(key: string): P | undefined {
    return this._parsersMap.get(key)
  }

  getReferencesMap(): Map<string, P> {
    return this._parsersMap
  }

  getSupportedProps(): string[] {
    return Array.from(this._parsersMap.keys())
  }

  refreshReferancesMap(): void {
    this._parsersMap.clear()
    this.forEach((parser) => this.add(parser))
  }
}

const parsersManager = new ParsersSet<Parser>()

export default parsersManager
export const getParsersManager: () => ParsersSet<Parser> = () => parsersManager
