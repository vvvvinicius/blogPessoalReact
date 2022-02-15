import React from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
function Navbar() {
    return (
        <>
            <AppBar position="static" style={{backgroundColor: "black"}}>
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer",  }} >
                        <Typography variant="h4" color="inherit">
                            BlogPessoal
                        </Typography>
                    </Box>
                    <br></br>
                    <Box display="flex" justifyContent="start">
                        <Box mx={4} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={4} style={{ cursor: "pointer"}}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={4} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={4} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={30} style={{ cursor: "pointer" }}>
                            <Typography variant="h5" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;