// @ts-nocheck
import { AppBar, Autocomplete, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import { SearchInput } from "../styled-components/search-input";
import { SideMenu } from "./side-menu";
import { Brand } from "../brand";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { metaItemsSelector } from "../../selectors/meta-items";
import { matchSorter } from "match-sorter";

export const Header = () => {
  const { pathname } = useLocation();
  const metaItems = useRecoilValue(metaItemsSelector);
  const metaItemsNames = metaItems.map((item) => item.name);

  const handleSearch = (value) => {
    const itemName = matchSorter(metaItemsNames, value)[0];
    const item = metaItems.find((item) => item.name === itemName);
    navigate(`item/${item.id}`);
  };

  const filterOptions = (metaItemsNames, { inputValue }) =>
    matchSorter(metaItemsNames, inputValue);

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
          filterOptions={filterOptions}
          freeSolo
          onChange={(event, newValue) => {
            handleSearch(newValue);
          }}
          disablePortal
          id="combo-box-demo"
          options={[...new Set(metaItems.map((option) => option.name))]}
          sx={{ width: "55%", display: pathname === "/" ? "none" : "block" }}
          PaperComponent={({ children }) => (
            <Paper key={children} sx={{ fontFamily: "Roboto" }}>
              {children}
            </Paper>
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
