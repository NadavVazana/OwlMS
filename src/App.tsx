// @ts-nocheck
import { ThemeProvider } from "@emotion/react";
import * as React from "react";
import { theme } from "./theme.ts";
import { ItemPreview } from "./components/item-preview.tsx";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
};
