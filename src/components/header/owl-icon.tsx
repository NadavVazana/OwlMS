// @ts-nocheck
import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as Owl } from "../../assets/images/Owl.svg";

type OwlIconProps = {
  fontSize: string;
  isHeader: boolean;
};

export const OwlIcon = ({
  fontSize = "40px",
  isHeader = true,
}: OwlIconProps) => {
  return (
    <SvgIcon sx={{ fontSize: isHeader ? { md: "40px" } : { xs: "80px" } }}>
      <Owl />
    </SvgIcon>
  );
};
