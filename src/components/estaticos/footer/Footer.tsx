import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid} from '@material-ui/core';
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../Store/tokens/tokensReducer";

function Footer(){

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;
    if(token != ""){
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>
            <Box className="box1">
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom className="textos">Conecte-se comigo!</Typography>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center">
                    <a href="https://github.com/vvvvinicius" target="_blank">
                        <GitHubIcon className="redes"/>
                    </a>
                    <a href="https://www.linkedin.com/in/vin%C3%ADcius-barbosa-a4355aa8/" target="_blank">
                        <LinkedInIcon className="redes"/>
                    </a>
                </Box>
            </Box>
            
        </Grid>
    </Grid>
    }
    return (
        <>
              {footerComponent}
        </>
    )

}

export default Footer;