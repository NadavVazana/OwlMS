// @ts-nocheck
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useRecoilState } from "recoil";
import { drawerState } from "../atoms/drawerState";
import { ReactComponent as Menu } from "../assets/images/menu.svg";
import { CustomDrawer } from "../components/styled-components/custom-drawer";

export const SideMenu = () => {
  const [isMenu, setMenu] = useRecoilState(drawerState);

  const handleMenuClick = (isOpen) => {
    setMenu(isOpen);
  };

  return (
    <React.Fragment>
      <Box sx={{ paddingRight: "15px", display: { xs: "block", sm: "none" } }}>
        <Menu onClick={() => handleMenuClick(true)} />
        <CustomDrawer
          classes={{ paper: "drawer" }}
          onClose={() => handleMenuClick(false)}
          anchor="right"
          open={isMenu}
        >
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CustomDrawer>
      </Box>
    </React.Fragment>
  );
};
