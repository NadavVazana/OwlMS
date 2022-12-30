import { Typography } from "@mui/material";
import { ReactComponent as Coin } from "../assets/images/Coin.svg";
import { CardBox } from "./styled-components/card-box";

type PriceProps = {
  price: string;
  // We want to either get a number or string for example "5px"
  paddingTop?: number | string;
};

export const Price = ({ price, paddingTop = 0 }: PriceProps) => {
  return (
    <CardBox paddingTop={paddingTop} gap={"8px"}>
      <Coin />
      <Typography variant="subtitle1" fontSize={"30px"}>
        {price}
      </Typography>
    </CardBox>
  );
};
