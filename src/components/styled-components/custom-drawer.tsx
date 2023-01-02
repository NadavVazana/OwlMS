import { Drawer, DrawerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
  "& .drawer": {
    width: "40%",

    "& *": { color: "black" },

    backgroundColor: theme.palette.custom.background,
  },
}));
