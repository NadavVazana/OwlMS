// @ts-nocheck
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import * as React from "react";
import { Brand } from "../components/brand";
import { SearchInput } from "../components/styled-components/search-input";

export const HomePage = () => {
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
        <SearchInput
          sx={{ width: { md: "800px", sm: "600px", xs: "350px" } }}
          label={"Search example: Dark scroll for Overall armor..."}
          height={"80px"}
        />
      </Stack>
    </Box>
  );
};
