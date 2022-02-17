import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar() {
    return (
        <>
            <AppBar position="static" style={{backgroundColor: "black"}}>
                <Toolbar variant="dense">
                    <Box className="cursor">
                        <Typography variant="h4" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <br></br>
                    <Box display="flex" justifyContent="start">
                        <Box mx={4} className="cursor">
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={4} className="cursor">
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={4} className="cursor">
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={4} className="cursor">
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                        <Box mx={30} className="cursor">
                            <Typography variant="h5" color="inherit">
                                logout
                            </Typography>
                        </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;