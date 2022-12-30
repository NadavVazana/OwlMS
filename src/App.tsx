import { ThemeProvider } from "@emotion/react";
import * as React from "react";
import theme from "./theme";
import { ItemPreview } from "./components/item-preview";
import { ItemCard } from "./components/item-card";
import { ItemTitle } from "./components/item-title";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ItemCard>
        <ItemTitle title="Dark scroll for Overall Armor for INT 30%" />
      </ItemCard>
      <ItemPreview />
    </ThemeProvider>
  );
};
