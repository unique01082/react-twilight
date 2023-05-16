import { parsersManager } from "../core";
import { isPlainObject, merge } from "lodash-es";
import { Parser, ParserType } from "../type";

const cssParser: Parser = (props) => {
  const { css } = props;

  if (!css || !isPlainObject(css)) return {};

  return Object.keys(css).reduce(
    (acc, key) =>
      merge(
        acc,
        parsersManager.has(key)
          ? parsersManager.get(key)!(props)
          : { [key]: css[key] }
      ),
    {}
  );
};

cssParser.propNames = ["css"];
cssParser._type = ParserType.CSS;

export { cssParser };
