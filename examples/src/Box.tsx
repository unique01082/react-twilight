import * as React from "react";
import { withTwilight, parsersManager } from "react-twilight";

const refMap = parsersManager.getReferencesMap();

type aaaaaa = typeof refMap;

type BoxProps = {
  [K in keyof typeof refMap]: number;
};

export const Box: React.FC<BoxProps> = withTwilight("div");

const myMap = new Map<string, number>();
myMap.set("key1", 1);
myMap.set("key2", 2);
myMap.set("key3", 3);

type MyObject = {
  [K in keyof typeof myMap]: number;
};

const myObject: MyObject = {
  key1: 10,
  key2: 20,
  key3: 30,
};

console.log(myObject);
