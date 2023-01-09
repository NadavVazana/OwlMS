import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    infoTitle: {
      fontSize: "20px",
      letterSpacing: "0.025em",
      color: "white",
      fontFamily: "Roboto",
      paddingTop: "20px",
      fontWeight: "400",
    },
    h1: {
      fontWeight: "600",
      fontSize: "50px",
      letterSpacing: "0.025em",
    },
    info: {
      fontSize: "25px",
      padding: "10px",
      fontFamily: "Roboto",
      color: "white",
      fontWeight: "800",
      lineHeight: "28px",
    },
    description: {
      overflowY: "auto",
      fontSize: "18px",
      fontFamily: "Roboto",
      color: "white",
      fontWeight: "300",
      paddingInline: "12px",
      lineHeight: "28px",
    },
    title: {
      textAlign: "center",
      fontWeight: "800",
      color: "white",
      fontFamily: "Roboto",
      letterSpacing: "0.025em",
    },
    subtitle1: {
      letterSpacing: "0.025em",
      fontWeight: "600",
      fontSize: "18px",
    },
    allVariants: {
      color: "#FFFF",
    },
  },
  palette: {
    primary: {
      main: "#19976A",
      dark: "#125F43",
    },
    custom: {
      background: "#0B0D0F",
    },
  },
});

theme.typography.title = {
  ...theme.typography.title,
  [theme.breakpoints.up(500)]: {
    fontSize: "19px",
  },
  [theme.breakpoints.up(720)]: {
    fontSize: "20px",
  },
};

theme.typography.info = {
  ...theme.typography.info,
  [theme.breakpoints.down(700)]: {
    padding: "5px",
  },
  [theme.breakpoints.down(510)]: {
    fontSize: "20px",
    paddingTop: "0",
  },
};

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down(700)]: {
    fontSize: "20px",
  },
};

export default theme;
