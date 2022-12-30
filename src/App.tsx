// @ts-nocheck
import { ThemeProvider } from "@emotion/react";
import * as React from "react";
import theme from "./theme.ts";
import { ItemPreview } from "./components/item-preview.tsx";
import { ItemCard } from "./components/item-card.tsx";
import { ItemTitle } from "./components/item-title.tsx";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ItemCard>
        <ItemTitle
          title="Dark scroll for Overall Armor for INT 30%"
          price="13,000,000"
        />
      </ItemCard>
      <ItemPreview />
    </ThemeProvider>
  );
};
