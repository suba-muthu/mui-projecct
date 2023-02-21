import React from 'react'
import { Autocomplete, Button, Collapse, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField, Typography } from '@mui/material';
import { useState } from 'react'
import { Box } from '@mui/system';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export default function Test1() {
    const [open, setOpen] = useState(false);
    const [box, setBox] = useState(false);
    const [list, setList] = useState(false);

    // Array
    const array = ["First", "Second", "Third", "Fourth", "Fifth"];
    
    const state = [ "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
                "Haryana",
                "Himachal Pradesh",
                "Jammu and Kashmir",
                "Jharkhand",
                "Karnataka",
                "Kerala",
                "Madhya Pradesh",
                "Maharashtra",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "Nagaland",
                "Odisha",
                "Punjab",
                "Rajasthan",
                "Sikkim",
                "Tamil Nadu",
                "Telangana",
                "Tripura",
                "Uttarakhand",
                "Uttar Pradesh",
                "West Bengal",
                "Andaman and Nicobar Islands",
                "Chandigarh",
                "Dadra and Nagar Haveli",
                "Daman and Diu",
                "Delhi",
                "Lakshadweep",
                "Puducherry"]

  return (
    <div>
        <h3>Dialog Component</h3>
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>This is my Dialog</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    A dialog is a popup window which can ask user something like an information or conformation.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Agree</Button>
            </DialogActions>
        </Dialog>
        <br/>
        
        {/* Modal Component */}
        
        <h3>Modal Component</h3>
        <Button onClick={() => setBox(true)}>Open Modal</Button>
        <Modal hideBackdrop open={box} onClose={() => setBox(false)}>
            <Box position= "absolute" top="50%" left="50%">
                <Typography>It is a Modal</Typography>
                <Button variant="contained" onClick={() => setBox(false)}>
                    Click Me!
                </Button>
            </Box>
        </Modal>

        {/* AutoComplete */}

        <Box>
            <h3>AutoComplete</h3>
            <Autocomplete 
                sx={{ width: 300 }} 
                options={state}
                renderInput={(params) => (
                  <TextField {...params} label="List of States" />
                )}
            />
        </Box>

        {/* List and Nested List */}

        <Box>
            <h3>List</h3>
            <List>
                <ListItem divider>
                    <ListItemButton onClick={() => setList(true)}>
                        <ListItemIcon>{">"}</ListItemIcon>
                        <ListItemText primary={"Expand List"}/>
                    </ListItemButton>
                </ListItem>
            </List>
            <Collapse in={list}>
                <List sx={{ width: 300, marginLeft: 60 }}>
                    {array.map((listElm) => (
                        <ListItem divider>
                            <ListItemButton onClick={() => setList(false)}>
                                <ListItemText primary={listElm}/>
                            </ListItemButton>
                        </ListItem>
                    ))}               
                </List>
            </Collapse>
        </Box>
    </div>
  )
}
