import { Typography } from "@mui/material";
import { ReactComponent as Coin } from "../assets/images/Coin.svg";
import { CardBox } from "./styled-components/card-box";

type PriceProps = {
  price: string;
  isForPreview: boolean;
};

export const Price = ({ price, isForPreview = false }: PriceProps) => {
  return (
    <CardBox
      sx={{
        paddingTop: isForPreview ? { xs: "0px", md: "45px" } : "20px",
        position: isForPreview ? { xs: "fixed", md: "static" } : "static",
        bottom: "0",
        left: "50%",
        transform: isForPreview
          ? { xs: "translate(-50%)", md: "unset" }
          : "static",
      }}
      gap={"8px"}
    >
      <Coin />
      <Typography variant="subtitle1" fontSize={"30px"}>
        {price}
      </Typography>
    </CardBox>
  );
};
