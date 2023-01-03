// TODO: Need to check why when we remove the nocheck comment it fails to
// apply our custom variants on the typography component
// @ts-nocheck
import { Typography } from "@mui/material";
import { CardInfoBox } from "../../styled-components/card-info-box";

type ItemPreviewCardProps = {
  title: string;
  info: string;
  children: React.ReactNode;
};

export const ItemPreviewCard = ({
  title,
  info,
  children,
}: ItemPreviewCardProps) => {
  return (
    <CardInfoBox>
      {children}
      <Typography variant="infoTitle">{title}</Typography>
      <Typography variant="info">{info}</Typography>
    </CardInfoBox>
  );
};
