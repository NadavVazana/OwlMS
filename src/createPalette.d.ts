import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    custom: CustomColors;
  }
  interface PaletteOptions {
    custom: CustomColors;
  }

  interface CustomColors {
    background: string;
  }
}
