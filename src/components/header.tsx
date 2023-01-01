// @ts-nocheck
import { AppBar, SvgIcon, Typography } from "@mui/material";
import * as React from "react";
import {ReactComponent as Owl} from '../assets/images/Owl.svg'

export const Header = () => {
    return (
        <React.Fragment>
            <AppBar>
                <Owl />
                <Typography variant="title">OwlMS</Typography>
                </AppBar>
            
        </React.Fragment>
    )
}