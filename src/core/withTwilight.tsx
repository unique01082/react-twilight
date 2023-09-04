import styled, { ShouldForwardProp } from "styled-components";
import { parsersManager } from "./parsersManager";
import { twilight } from "./twilight";

// true => pass to component
// false => skip
const shouldForwardProp: ShouldForwardProp<any> = (prop: any) =>
  !(parsersManager.isPropSupported(prop) || prop === "ignoreProps");

export const withTwilight = (Component: Parameters<typeof styled>[0]) =>
  styled<any>(Component).withConfig({
    shouldForwardProp,
  })(twilight as any);
