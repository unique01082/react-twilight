import React, { useMemo } from "react";
import { ThemeProvider as ScThemeProvider } from "styled-components";

function parseValue(value: string | number): string {
  if (typeof value === "number") {
    return `${value}px`;
  }
  return value;
}

function createMediaQuery(n: string | number) {
  if (!n) return;
  return `@media screen and (min-width: ${parseValue(n)})`;
}

export interface TwilightTheme {
  breakpoints: string[] | number[];
  [key: string | number | symbol]: any;
}

interface ThemeProviderProps
  extends React.ComponentProps<typeof ScThemeProvider> {
  theme: TwilightTheme;
  buildMediaQuery?: (n: number | string) => string | undefined;
  children?: React.ReactNode;
}

export const ThemeProvider = ({
  theme,
  theme: { breakpoints = [] },
  buildMediaQuery = createMediaQuery,
  children,
  ...restProps
}: ThemeProviderProps) => {
  // @ts-ignore
  breakpoints.unshift(undefined);

  const normalizedTheme = useMemo(
    () =>
      Object.assign(theme, {
        _breakpointsMap: Object.keys(breakpoints).reduce(
          (acc, key) =>
            Object.assign(acc, {
              // @ts-ignore
              [key]: [breakpoints[key], buildMediaQuery(breakpoints[key])],
            }),
          breakpoints
        ),
      }),
    [theme]
  );

  return (
    <ScThemeProvider {...restProps} theme={normalizedTheme}>
      {children}
    </ScThemeProvider>
  );
};

ThemeProvider.defaultProps = {
  theme: {},
};
