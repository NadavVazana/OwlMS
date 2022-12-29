import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
    interface TypographyVariants {
      title: React.CSSProperties ;
    }
  
    interface TypographyVariantsOptions {
      title?: React.CSSProperties;
    }
  }
  
declare module '@mui/material/styles' {
    interface Theme {
    }

    interface ThemeOptions {
    }
}
 let theme = createTheme(
    {

    typography: {
        fontFamily:'Roboto',
        

        title:{
            textAlign:'center',
            fontWeight:'800',
            color:'white',
            fontFamily:'Roboto'
            
        },
        subtitle1:{
            letterSpacing:'0.025em',
            fontWeight:'600',
            fontSize:'18px',
            
        },
        allVariants: {
            color: '#FFFF'
        }
    },

    palette: {
        primary: {
            main: "#19976A",
            dark: "#125F43",
            
        }
    }
}

);
theme.typography.title = {
    ...theme.typography.title,
    [theme.breakpoints.up(500)]: {
      fontSize: '19px',
    },
    [theme.breakpoints.up(720)]:{
        fontSize:'30px'
    },
  };


export default theme


