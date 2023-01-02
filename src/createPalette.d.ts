import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Pallette {
    custom: CustomColors;
  }
  interface PaletteOptions {
    custom: CustomColors;
  }

  interface CustomColors {
    background: string;
  }
}
