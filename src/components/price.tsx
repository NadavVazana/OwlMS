// @ts-nocheck
import { Typography } from "@mui/material";
import * as React from "react";
import { ReactComponent as Coin } from '../assets/images/Coin.svg'
import { CardBox } from "./styled-components/card-box.tsx";

export const Price = ({price,paddingTop = 0}) =>{
    return(
        <CardBox paddingTop={paddingTop} gap={'8px'}>
          <Coin />
          <Typography variant="subtitle1" fontSize={'30px'}>
            {price}
          </Typography>
        </CardBox>

    )
}