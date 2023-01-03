// @ts-nocheck
import { AppBar, Autocomplete, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { SearchInput } from "../styled-components/search-input";
import { SideMenu } from "./side-menu";
import { OwlIcon } from "./owl-icon";
import { useNavigate } from "react-router-dom";
import { options } from "../../mocks/autocomplete-mock";

export const Header = () => {
  const navigate = useNavigate();

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
        <Box
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer", paddingLeft: { xs: "10px", md: "50px" } }}
          alignItems={"center"}
          justifyContent={"center"}
          height={"100%"}
          gap={"10px"}
          flexDirection={"column"}
          paddingTop="10px"
          display={"flex"}
        >
          <OwlIcon />
          <Typography variant="title">
            <span style={{ color: "#19976A" }}>Owl</span>MS
          </Typography>
        </Box>

        <Autocomplete
          freeSolo
          disablePortal
          id="combo-box-demo"
          options={options.map((option) => option)}
          sx={{ width: "55%" }}
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
