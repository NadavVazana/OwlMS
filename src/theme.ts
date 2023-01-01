import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: 'Roboto',
        infoTitle:{
            fontSize:'20px',
            letterSpacing: '0.025em',
            color:'white',
            fontFamily:'Roboto',
            paddingTop:'10px',
            fontWeight:'400'

        },
        info:{
            fontSize:'35px',
            paddingTop:'25px',
            fontFamily:'Roboto',
            color:'white',
            fontWeight:'800',
            lineHeight:'28px'
        },
        description:{
            overflowY:'auto',
            fontSize:'18px',
            paddingTop:'25px',
            fontFamily:'Roboto',
            color:'white',
            fontWeight:'300',
            paddingInline:'12px',
            lineHeight:'28px'
            
        },
        title: {
            textAlign: 'center',
            fontWeight: '800',
            color: 'white',
            fontFamily: 'Roboto'
        },
        subtitle1: {
            letterSpacing: '0.025em',
            fontWeight: '600',
            fontSize: '18px',
        },
        allVariants: {
            color: '#FFFF'
        }
    },
    palette: {
        primary: {
            main: "#19976A",
            dark: "#125F43",
        },
        custom: {
            background: "#0B0D0F"
        }
    }
});

theme.typography.title = {
    ...theme.typography.title,
    [theme.breakpoints.up(500)]: {
        fontSize: '19px',
    },
    [theme.breakpoints.up(720)]: {
        fontSize: '30px'
    },
};


theme.typography.info = {
    ...theme.typography.info,
    [theme.breakpoints.down(700)]:{
        fontSize:'30px'
    },
    [theme.breakpoints.down(510)]:{
        fontSize:'21px'
    }
}

export default theme