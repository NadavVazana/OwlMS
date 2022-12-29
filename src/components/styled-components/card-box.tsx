import {styled} from "@mui/material/styles";
import { Box, BoxProps } from "@mui/system";

export const CardBox = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:'20px'
}))


