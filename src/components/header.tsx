// @ts-nocheck
import { AppBar, Autocomplete, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { SearchInput } from "../components/styled-components/search-input.tsx";
import { ReactComponent as Owl } from "../assets/images/Owl.svg";
import { SideMenu } from "../components/side-menu";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  //MOCK DATA FOR AUTO COMPLETE
  const options = ["Dark scroll", "Gloves for att"];

  const navigate = useNavigate();

  return (
    <React.Fragment>
      <AppBar
        sx={{
          position: "static",
          backgroundColor: "custom.background",
          height: "110px",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ cursor: "pointer" }}
          alignItems={"center"}
          height={"100%"}
          gap={"10px"}
          paddingLeft={"15px"}
          display={"flex"}
        >
          <Owl style={{ height: "40px" }} />
          <Typography variant="title">OwlMS</Typography>
        </Box>

        <Autocomplete
          freeSolo
          disablePortal
          id="combo-box-demo"
          options={options.map((option) => option)}
          sx={{ width: "50%" }}
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
              paddingRight: "15px",
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
