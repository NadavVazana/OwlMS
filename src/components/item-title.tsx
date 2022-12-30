// @ts-nocheck
import { Typography } from "@mui/material";
import * as React from "react";
import { CardBox } from "./styled-components/card-box.tsx";

type ItemTitleProps = {
  title: string;
  price: string;
};

export const ItemTitle = ({ title, price }: ItemTitleProps) => {
  return (
    <React.Fragment>
      <CardBox gap={"18px"} paddingTop={"14px"}>
        <img
          height={"35px"}
          src={require("../assets/images/scroll.svg").default}
          alt="scroll-pic"
        />
        <Typography variant="title">{title}</Typography>
      </CardBox>
    </React.Fragment>
  );
};
