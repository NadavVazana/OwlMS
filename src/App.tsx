import { ThemeProvider } from "@emotion/react";
import * as React from "react";
// @ts-ignore
import { ItemCard } from "./components/item-card.tsx";
// @ts-ignore
import { theme } from "./theme.ts";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <ItemCard />
    </ThemeProvider>
  );
};
