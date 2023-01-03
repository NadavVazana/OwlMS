// @ts-nocheck
import * as React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as Owl } from "../../assets/images/Owl.svg";

export const OwlIcon = () => {
  return (
    <SvgIcon sx={{ fontSize: { md: "40px" } }}>
      <Owl />
    </SvgIcon>
  );
};
