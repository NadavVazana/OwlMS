// @ts-nocheck
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { drawerState } from "../../atoms/drawerState";
import { ReactComponent as Menu } from "../../assets/images/menu.svg";
import { CustomDrawer } from "../../components/styled-components/custom-drawer";

export const SideMenu = () => {
  const [isMenu, setMenu] = useRecoilState(drawerState);
  const navigate = useNavigate();

  const handleMenuClick = (isOpen) => {
    setMenu(isOpen);
  };

  const handleOptionClick = (path) => {
    setMenu(false);
    switch (path) {
      case "Home":
        navigate("/");
        break;
    }
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
            {["Home", "About"].map((text, index) => (
              <ListItem
                onClick={() => handleOptionClick(text)}
                key={text}
                disablePadding
              >
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
