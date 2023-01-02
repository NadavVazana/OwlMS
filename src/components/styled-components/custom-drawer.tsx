import { Drawer, DrawerProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CustomDrawer = styled(Drawer)<DrawerProps>(({ theme }) => ({
  "& .drawer": {
    width: "30%",
    backgroundColor: theme.palette.custom.background,
  },
}));
