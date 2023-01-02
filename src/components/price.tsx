import { Typography } from "@mui/material";
import { ReactComponent as Coin } from "../assets/images/Coin.svg";
import { CardBox } from "./styled-components/card-box";

type PriceProps = {
  price: string;
  isForPreview: boolean;
};

export const Price = ({ price, isForPreview = false }: PriceProps) => {
  return (
    <CardBox sx={{ paddingTop: isForPreview ? "80px" : "20px" }} gap={"8px"}>
      <Coin />
      <Typography variant="subtitle1" fontSize={"30px"}>
        {price}
      </Typography>
    </CardBox>
  );
};
