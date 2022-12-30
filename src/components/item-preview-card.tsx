// @ts-nocheck
import { Typography } from "@mui/material";
import { CardInfoBox } from "./styled-components/card-info-box.tsx";

type ItemPreviewCardProps = {
  title: string;
  info: string;
};

export const ItemPreviewCard: React.FC<ItemPreviewCardProps> = ({
  title,
  info,
  children,
}) => {
  return (
    <CardInfoBox>
      {children}
      <Typography variant="infoTitle">{title}</Typography>
      <Typography variant="info">{info}</Typography>
    </CardInfoBox>
  );
};
