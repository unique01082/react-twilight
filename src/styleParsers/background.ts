import { createStyleParser } from "../core";

export const background = createStyleParser("background");
export const backgroundColor = createStyleParser({
  propNames: ["backgroundColor", "bg"],
  scale: "colorPalette",
});

export const backgroundImage = createStyleParser([
  "backgroundImage",
  "bgImage",
]);
export const backgroundSize = createStyleParser(["backgroundSize", "bgSize"]);
export const backgroundPosition = createStyleParser([
  "backgroundPosition",
  "bgPosition",
]);
export const backgroundRepeat = createStyleParser([
  "backgroundRepeat",
  "bgRepeat",
]);
