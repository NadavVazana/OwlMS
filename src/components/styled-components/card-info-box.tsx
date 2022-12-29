import {styled} from "@mui/material/styles";
import { Box, BoxProps } from "@mui/system";

export const CardInfoBox = styled(Box)<BoxProps>(({ theme }) => ({
    display: 'flex',
    flexDirection:'column',
    backgroundColor:'#454545',
    alignItems: 'center',
    borderRadius:'20px',
    height:'100%',
    position:'relative'
}))



