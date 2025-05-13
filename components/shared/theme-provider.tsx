"use client";

import * as React from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ColorProvider } from "./color-provider";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemeProvider>) {
  return (
    <NextThemeProvider {...props}>
      <ColorProvider>{children}</ColorProvider>
    </NextThemeProvider>
  );
}
