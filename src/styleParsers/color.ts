import { createStyleParser } from "../core";

export const color = createStyleParser({
  propNames: ["color", "c"],
  properties: "color",
  scale: "colorPalette",
});
export const opacity = createStyleParser("opacity");
