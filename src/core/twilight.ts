import styled from "styled-components";
import { ThemeProps } from "../type";
import { parsersManager } from "./parsersManager";
import { difference, intersection, merge } from "lodash-es";

export const twilight = (
  props: { ignoreProps?: string[]; theme: ThemeProps },
  theme = props.theme
): object => {
  const propsToProcess = difference(
    intersection(Object.keys(props ?? {}), parsersManager.getSupportedProps()),
    props?.ignoreProps ?? []
  );

  const result = propsToProcess.reduce(
    (acc, prop) => merge(acc, parsersManager.get(prop)!(props, theme)),
    {}
  );

  return result;
};

export const tl = new Proxy<object>(
  {},
  {
    apply: Reflect.apply,
    // @ts-ignore
    get: (_target, prop) => styled[prop](twilight),
  }
);
