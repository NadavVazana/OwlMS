import { styled } from "@mui/material/styles";
import { Stack, StackProps } from "@mui/system";

export const CardStack = styled(Stack)<StackProps>(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "20px",
  height: "90px",
  justifyContent: "space-between",
}));
