import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SearchInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
    input: { color: 'white' },
    color: 'white',
    borderRadius: '11px',

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
        },
        '&:hover fieldset': {
            borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
            borderColor:'white'
        }
        
    },
    '& label.Mui-focused': {
        color: 'white',
      }




}))


