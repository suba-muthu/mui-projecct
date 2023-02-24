import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, IconButton, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function Appbar() {
  return (
    <div>
        <AppBar>
            <Toolbar>

                {/* IconButton */}

                <IconButton onClick={() => alert("Icon Selected")}>
                    {" "}
                    <AccountCircleIcon />
                </IconButton>
                <IconButton>
                    {" "}
                    <ArrowCircleDownIcon color="error" />
                </IconButton>
                
                <Typography>LOGO</Typography>
                <Button
                 variant='contained'
                 sx={{ marginLeft: "auto" }} 
                 color='error'
                >
                    Login
                </Button>
            </Toolbar>
        </AppBar>

    </div>
  )
}
