import {
  difference,
  intersection,
  isNil,
  isPlainObject,
  merge,
} from "lodash-es";
import {
  ParseFunction,
  ParserProps,
  ParserType,
  RawConfiguration,
  StyleParser,
  ThemeProps,
} from "../type";
import { get } from "../utils";
import normalizeInput from "./normalizeInput";
import toStyledObject from "./toStyledObject";

export function createStyleParser(input: RawConfiguration): StyleParser {
  const parseFn = (
    rawValue: any,
    props: ParserProps,
    theme: ThemeProps
  ): object => {
    const { _breakpointsMap, ...restTheme } = theme;
    // @ts-ignore because styled will be assigned value in return
    const scale = get(restTheme, styledFn.scaleName, styledFn.defaultScale);

    if (typeof rawValue === "string" || typeof rawValue === "number") {
      // @ts-ignore because styled will be assigned value in return
      const value = styledFn.transform(rawValue, scale, props);
      // @ts-ignore because styled will be assigned value in return
      return toStyledObject(value, styledFn.properties);
    }
    if (Array.isArray(rawValue)) {
      const values = rawValue
        .slice(0, _breakpointsMap.length)
        // @ts-ignore because styled will be assigned value in return
        .map((r) => styledFn.transform(r, scale, props));

      return values.reduce((acc, value, index) => {
        if (isNil(value)) return acc;
        // @ts-ignore because styled will be assigned value in return
        const styledObject = toStyledObject(value, styledFn.properties);
        const media = _breakpointsMap[index][1];

        return Object.assign(
          acc,
          !media ? styledObject : { [media]: styledObject }
        );
      }, {});
    }
    if (isPlainObject(rawValue)) {
      return Object.keys(rawValue).reduce((acc, key) => {
        // @ts-ignore because styled will be assigned value in return
        const value = styledFn.transform(rawValue[key], scale, props);
        if (isNil(value)) return acc;
        // @ts-ignore because styled will be assigned value in return
        const styledObject = toStyledObject(value, styledFn.properties);
        // @ts-ignore
        const media = _breakpointsMap[key]?.[1];

        return Object.assign(
          acc,
          !media ? styledObject : { [media]: styledObject }
        );
      }, {});
    }
    throw new Error("Unsupported value");
  };

  const styledFn: ParseFunction = (props, theme = props.theme) => {
    const propsToProcess = difference(
      // @ts-ignore because styled will be assigned value in return
      intersection(Object.keys(props), styledFn.propNames),
      props.ignoreProps ?? []
    );

    const result = propsToProcess.reduce(
      // @ts-ignore
      (acc, prop) => merge(acc, parseFn(props[prop], props, theme)),
      {}
    );

    return result;
  };

  return Object.assign(styledFn, normalizeInput(input), {
    _type: ParserType.STYLE,
  });
}
