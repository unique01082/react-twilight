import { createStyleParser } from "../core";

export const gridGap = createStyleParser({
  propNames: "gridGap",
  scale: "space",
});
export const gridColumnGap = createStyleParser({
  propNames: "gridColumnGap",
  scale: "space",
});
export const gridRowGap = createStyleParser({
  propNames: "gridRowGap",
  scale: "space",
});
export const gridColumn = createStyleParser("gridColumn");
export const gridRow = createStyleParser("gridRow");
export const gridArea = createStyleParser("gridArea");
export const gridAutoColumns = createStyleParser("gridAutoColumns");
export const gridAutoRows = createStyleParser("gridAutoRows");
export const gridAutoFlow = createStyleParser("gridAutoFlow");
export const gridTemplateColumns = createStyleParser("gridTemplateColumns");
export const gridTemplateRows = createStyleParser("gridTemplateRows");
export const gridTemplateAreas = createStyleParser("gridTemplateAreas");
export const gridColumnStart = createStyleParser("gridColumnStart");
export const gridRowStart = createStyleParser("gridRowStart");
