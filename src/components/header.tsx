// @ts-nocheck
import { AppBar, Autocomplete, TextField, Typography } from "@mui/material";
import { Box, display, width } from "@mui/system";
import * as React from "react";
import { ReactComponent as Owl } from '../assets/images/Owl.svg'

export const Header = () => {
    //MOCK DATA FOR AUTO COMPLETE
    const handleInput = () => {

    }
    const options = ['Dark scroll', 'Gloves for att']
    return (
        <React.Fragment>
            <AppBar sx={{ backgroundColor: 'custom.background', height: '110px',flexDirection:'row',alignItems:'center',justifyContent:'space-between' }}>
                <Box
                    alignItems={'center'}
                    height={'100%'}
                    gap={'10px'}
                    paddingLeft={'54px'}
                    display={'flex'}>
                    <Owl />
                    <Typography variant="title">OwlMS</Typography>

                </Box>

                <Autocomplete
                freeSolo
                
                    disablePortal
                    id="combo-box-demo"
                    options={options.map((option)=>option)}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField 
                        sx={{justifySelf:'center',
                        position:'absolute',
                        top:'50%',
                        left:'50%',
                        transform:'translate(-40%,-50%)',
                        width:'50%',
                        height:'50px',
                        display:{xs:'none',sm:'none',md:'block'}
                        ,backgroundColor:'white'
                        ,borderRadius:'11px'
                        ,color:'black',
                    }} {...params} label="Search example: Dark scroll for Overall armor..." />}
                />

                <Box>
                    <Typography sx={{paddingRight:'15px'}} variant="h6" fontWeight={'400'} fontSize={'18px'}>
                        About
                    </Typography>
                </Box>

            </AppBar>

        </React.Fragment>
    )
}