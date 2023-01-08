// @ts-nocheck
import { Typography } from "@mui/material";
import * as React from "react";
import { CardBox } from "../styled-components/card-box";

type ItemTitleProps = {
  title: string;
  imgPath: string;
};

export const ItemTitle = ({ title, imgPath }: ItemTitleProps) => {
  return (
    <React.Fragment>
      <CardBox gap={"18px"} paddingTop={"14px"}>
        <img
          style={{ paddingLeft: "10px" }}
          height={"35px"}
          src={`https://api.owlms.store/${imgPath}`}
          alt="scroll-pic"
        />
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            paddingRight: "10px",
          }}
          variant="title"
        >
          {title}
        </Typography>
      </CardBox>
    </React.Fragment>
  );
};
