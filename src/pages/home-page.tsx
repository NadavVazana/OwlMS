// @ts-nocheck
import { Autocomplete, Box, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { useRecoilValue } from "recoil";
import { apiClient } from "../api/api-client";
import { Brand } from "../components/brand";
import { SearchInput } from "../components/styled-components/search-input";
import { metaItemsSelector } from "../selectors/meta-items";
import { matchSorter } from "match-sorter";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const metaItems = useRecoilValue(metaItemsSelector);
  const metaItemsNames = metaItems.map((item) => item.name);
  const navigate = useNavigate();

  const handleSearch = (value) => {
    const itemName = matchSorter(metaItemsNames, value)[0];
    const item = metaItems.find((item) => item.name === itemName);
    navigate(`item/${item.id}`);
  };

  const filterOptions = (metaItemsNames, { inputValue }) =>
    matchSorter(metaItemsNames, inputValue);

  React.useEffect(() => {
    (async function func() {
      apiClient.getMeta();
    })();
  }, []);
  return (
    <Box backgroundColor={"custom.background"}>
      <Stack
        gap={"40px"}
        sx={{
          transform: "translate(-50%,-50%)",
          position: "fixed",
          top: "50%",
          left: "50%",
        }}
      >
        <Brand isHeader={false} fontSize="80px" />

        <Autocomplete
          freeSolo
          onChange={(event, newValue) => {
            handleSearch(newValue);
          }}
          filterOptions={filterOptions}
          disablePortal
          id="combo-box-demo"
          options={[...new Set(metaItems.map((option) => option.name))]}
          PaperComponent={({ children }) => (
            <Paper key={children} sx={{ fontFamily: "Roboto" }}>
              {children}
            </Paper>
          )}
          renderInput={(params) => (
            <SearchInput
              {...params}
              sx={{ width: { md: "800px", sm: "600px", xs: "350px" } }}
              label={"Search example: Dark scroll for Overall armor..."}
              height={"80px"}
            />
          )}
        />
      </Stack>
    </Box>
  );
};
