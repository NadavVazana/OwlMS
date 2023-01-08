// @ts-nocheck
import { AppBar, Autocomplete, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { SearchInput } from "../styled-components/search-input";
import { SideMenu } from "./side-menu";
import { Brand } from "../brand";
import { useLocation } from "react-router-dom";
import { options } from "../../mocks/autocomplete-mock";

export const Header = () => {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      <div style={{ height: "110px" }} />
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: "custom.background",
          height: "110px",
          top: "0",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Brand direction={"column"} />

        <Autocomplete
          freeSolo
          disablePortal
          id="combo-box-demo"
          options={options.map((option) => option)}
          sx={{ width: "55%", display: pathname === "/" ? "none" : "block" }}
          PaperComponent={({ children }) => (
            <Paper sx={{ fontFamily: "Roboto" }}>{children}</Paper>
          )}
          renderInput={(params) => (
            <SearchInput
              {...params}
              label="Search example: Dark scroll for Overall armor..."
            />
          )}
        />

        <Box>
          <Typography
            sx={{
              paddingRight: "50px",
              cursor: "pointer",
              display: { xs: "none", sm: "block" },
            }}
            variant="h6"
            fontWeight={"400"}
            fontSize={"18px"}
          >
            About
          </Typography>
        </Box>
        <SideMenu />
      </AppBar>
    </React.Fragment>
  );
};
