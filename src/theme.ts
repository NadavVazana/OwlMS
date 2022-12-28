import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        pallete?: {
            primary?: {
                main: string;
            };
        };
    }

    interface ThemeOptions {
        pallete?: {
            primary?: {
                main: string;
            };
        };
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: "#19976A",
            dark: "#125F43"
        }
    }
});