// @ts-nocheck
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { OwlIcon } from "./header/owl-icon";

type BrandProps = {
  direction: string;
  fontSize?: string;
  isHeader: boolean;
};

export const Brand = ({
  direction = "unset",
  fontSize,
  isHeader = true,
}: BrandProps) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => (isHeader ? navigate("/") : undefined)}
      sx={{
        cursor: isHeader ? "pointer" : "unset",
        paddingLeft: { xs: "10px", md: "50px" },
      }}
      alignItems={isHeader ? "center" : "flex-end"}
      justifyContent={"center"}
      height={"100%"}
      gap={"10px"}
      flexDirection={direction}
      paddingTop="10px"
      display={"flex"}
    >
      <OwlIcon isHeader={isHeader} fontSize={fontSize} />
      <Typography variant={isHeader ? "title" : "h1"}>
        <span style={{ color: "#19976A" }}>Owl</span>MS
      </Typography>
    </Box>
  );
};
