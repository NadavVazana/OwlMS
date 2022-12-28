import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";
import * as React from "react";
// @ts-ignore
import { theme } from "./theme.ts";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Hello</Button>
    </ThemeProvider>
  );
};
