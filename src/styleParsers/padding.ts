import { createStyleParser } from "../core";

export const padding = createStyleParser({
  propNames: ["padding", "p"],
  scale: "space",
});
export const paddingTop = createStyleParser({
  propNames: ["paddingTop", "pt"],
  scale: "space",
});
export const paddingRight = createStyleParser({
  propNames: ["paddingRight", "pr"],
  scale: "space",
});
export const paddingBottom = createStyleParser({
  propNames: ["paddingBottom", "pb"],
  scale: "space",
});
export const paddingLeft = createStyleParser({
  propNames: ["paddingLeft", "pl"],
  scale: "space",
});
export const paddingX = createStyleParser({
  propNames: ["paddingX", "px"],
  properties: ["paddingLeft", "paddingRight"],
  scale: "space",
});
export const paddingY = createStyleParser({
  propNames: ["paddingY", "py"],
  properties: ["paddingTop", "paddingBottom"],
  scale: "space",
});
