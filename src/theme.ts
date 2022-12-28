import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        
    }

    interface ThemeOptions {
        
    }
}

export const theme = createTheme({
    typography:{
        allVariants:{
            color:'#FFFF'
        }
    },
    palette: {
        primary: {
            main: "#19976A",
            dark: "#125F43"
        }
    }
});