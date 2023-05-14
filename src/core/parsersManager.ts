import type { Parser } from "../type";

class ParsersSet<P extends Parser> extends Set<P> {
  private readonly _parsersMap = new Map<string | number | symbol, P>();

  add(parser: P): this {
    if (!parser) {
      throw new Error("Parser is missing in argument");
    }
    if (typeof parser !== "function") {
      throw new Error("Parser must be a function");
    }
    if (!Array.isArray(parser.propNames)) {
      throw new Error("Invalid value to add");
    }

    parser.propNames.forEach((propName) =>
      this._parsersMap.set(propName, parser)
    );
    return super.add(parser);
  }

  delete(propNameOrParser: string | P): boolean {
    if (!propNameOrParser) {
      return false;
    }
    let parser: P | undefined;
    if (typeof propNameOrParser === "string") {
      parser = this._parsersMap.get(propNameOrParser);
    } else {
      parser = propNameOrParser;
    }

    if (!parser) {
      return false;
    }

    const result: boolean = super.delete(parser);
    this.refreshReferencesMap();

    return result;
  }

  isPropSupported(prop: string | number | symbol): boolean {
    return this._parsersMap.has(prop);
  }

  has(parser: string | P): boolean {
    if (typeof parser === "string") {
      return this.isPropSupported(parser);
    }
    return super.has(parser);
  }

  get(key: string | number | symbol): P | undefined {
    return this._parsersMap.get(key);
  }

  getReferencesMap(): typeof this._parsersMap {
    return this._parsersMap;
  }

  getSupportedProps(): Array<string | number | symbol> {
    return Array.from(this._parsersMap.keys());
  }

  refreshReferencesMap(): void {
    this._parsersMap.clear();
    this.forEach((parser) => this.add(parser));
  }
}

export const parsersManager = new ParsersSet<Parser>();
export const getParsersManager: () => ParsersSet<Parser> = () => parsersManager;
