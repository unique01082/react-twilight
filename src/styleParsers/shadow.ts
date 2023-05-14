import { createStyleParser } from "../core";

export const boxShadow = createStyleParser({
  propNames: "boxShadow",
  scale: "shadows",
});
export const textShadow = createStyleParser({
  propNames: "textShadow",
  scale: "shadows",
});
