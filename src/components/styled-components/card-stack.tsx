import { styled } from "@mui/material/styles";
import { Stack, StackProps } from "@mui/system";

export const CardStack = styled(Stack)<StackProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "130px",
  justifyContent: "space-between",
}));
