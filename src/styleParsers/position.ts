import { createStyleParser } from "../core";

export const position = createStyleParser("position");
export const zIndex = createStyleParser("zIndex");
export const top = createStyleParser({ propNames: "top", scale: "space" });
export const right = createStyleParser({ propNames: "right", scale: "space" });
export const bottom = createStyleParser({
  propNames: "bottom",
  scale: "space",
});
export const left = createStyleParser({ propNames: "left", scale: "space" });
export const inset = createStyleParser({
  propNames: "inset",
  properties: ["top", "right", "bottom", "left"],
  scale: "space",
});
export const insetX = createStyleParser({
  propNames: "insetX",
  properties: ["left", "right"],
  scale: "space",
});
export const insetY = createStyleParser({
  propNames: "insetY",
  properties: ["top", "bottom"],
  scale: "space",
});
