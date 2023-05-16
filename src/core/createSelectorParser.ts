import { difference, intersection } from "lodash-es";
import {
  ParseFunction,
  ParserType,
  RawConfiguration,
  SelectorParser,
} from "../type";
import normalizeInput from "./normalizeInput";
import toStyledObject from "./toStyledObject";
import { twilight } from "./twilight";

export function createSelectorParser(input: RawConfiguration): SelectorParser {
  const selectorParser: ParseFunction = (props, theme = props.theme) => {
    const propsToProcess = difference(
      // @ts-ignore because styled will be assigned value in return
      intersection(Object.keys(props), selectorParser.propNames),
      props.ignoreProps ?? []
    );

    const result = propsToProcess.reduce(
      // @ts-ignore
      (acc, prop) => Object.assign(acc, twilight(props[prop], theme)),
      {}
    );

    let calculatedProperties;
    // @ts-ignore because styled will be assigned value in return
    if (typeof selectorParser.properties === "function") {
      // @ts-ignore because styled will be assigned value in return
      calculatedProperties = [selectorParser.properties(props)];
    }

    return toStyledObject(
      result,
      // @ts-ignore because styled will be assigned value in return
      calculatedProperties || selectorParser.properties
    );
  };

  const { propNames, properties } = normalizeInput(input);

  return Object.assign(selectorParser, {
    propNames,
    properties,
    _type: ParserType.SELECTOR,
  });
}
