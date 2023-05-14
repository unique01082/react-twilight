import { createSelectorParser } from "../core";

export const active = createSelectorParser({
  propNames: "whileActive",
  properties: ":active",
});

export const hover = createSelectorParser({
  propNames: "whileHover",
  properties: ":hover",
});

export const focus = createSelectorParser({
  propNames: "whileFocus",
  properties: ":focus",
});

export const enable = createSelectorParser({
  propNames: "whileEnable",
  properties: ":enable",
});

export const disabled = createSelectorParser({
  propNames: "whileDisabled",
  properties: ":disabled",
});

export const checked = createSelectorParser({
  propNames: "whileChecked",
  properties: ":checked",
});

export const indeterminate = createSelectorParser({
  propNames: "whileIndeterminate ",
  properties: ":indeterminate ",
});

export const link = createSelectorParser({
  propNames: "whileLink",
  properties: ":link",
});

export const visited = createSelectorParser({
  propNames: "whileVisited",
  properties: ":visited",
});

export const target = createSelectorParser({
  propNames: "whileTarget",
  properties: ">:target",
});

export const valid = createSelectorParser({
  propNames: "whileValid",
  properties: ":valid",
});

export const invalid = createSelectorParser({
  propNames: "whileInvalid",
  properties: ":invalid",
});

export const required = createSelectorParser({
  propNames: "whileRequired",
  properties: ":required",
});

export const optional = createSelectorParser({
  propNames: "whileOptional",
  properties: ":optional",
});

export const placeholder = createSelectorParser({
  propNames: "whilePlaceholder",
  properties: ":placeholder",
});

export const group = createSelectorParser({
  propNames: "whileGroupHover",
  properties: ({ group }) => `[data-group=${group}]:hover &`,
});
