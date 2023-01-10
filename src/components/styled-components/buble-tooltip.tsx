import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import { styled } from "@mui/system";

export const BubbleTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: theme.palette.custom.background,
    backgroundColor: theme.palette.primary.main,
    fontSize: 15,
    whiteSpace: "pre-line",
    padding: "8px",
  },
}));
