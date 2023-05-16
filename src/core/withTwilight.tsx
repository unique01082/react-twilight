import styled, { StyledConfig } from "styled-components";
import { parsersManager } from "./parsersManager";
import { twilight } from "./twilight";

// true => pass to component
// false => skip
const shouldForwardProp: StyledConfig<any>["shouldForwardProp"] = (prop) =>
  !(parsersManager.isPropSupported(prop) || prop === "ignoreProps");

export const withTwilight = (Component: Parameters<typeof styled>[0]) =>
  styled<any>(Component).withConfig({
    shouldForwardProp,
  })(twilight as any);
