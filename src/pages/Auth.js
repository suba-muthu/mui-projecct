import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react';

export default function Auth() {
    const [isSignup, setIsSignup] = useState(false);
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })
    // console.log(isSignup);

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box 
            display="flex" 
            flexDirection={"column"} 
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
            padding={3}
            borderRadius={5}
            boxShadow={"5px 5px 10px #ccc"}
            sx={{
                ":hover": {
                    boxShadow: "10px 10px 20px #ccc"
                }
            }}
            >
                <Typography variant="h2" padding={3} textAlign="center">
                    {isSignup ? "Signup" : "Login"}
                </Typography>
                { isSignup && (
                <TextField
                    onChange={handleChange}
                    name="name"
                    value={input.name}
                    margin='normal' 
                    type={"text"} 
                    variant="outlined" 
                    placeholder='Name'
                />
                )}
                <TextField
                    onChange={handleChange}
                    name="email"
                    value={input.email}
                    margin='normal' 
                    type={"email"} 
                    variant="outlined" 
                    placeholder="Email"
                />
                <TextField 
                    onChange={handleChange}
                    name="password"
                    value={input.password}
                    margin='normal' 
                    type={"password"} 
                    variant="outlined" 
                    placeholder="Passsword"
                />
                <Button
                type="submit"
                sx={{ marginTop: 3, borderRadius: 3 }}
                variant="contained"
                color="warning"
                >
                    {isSignup ? "Signup" : "Login"}
                </Button>
                <Button
                onClick={() => setIsSignup(!isSignup)} 
                sx={{ marginTop: 3, borderRadius: 3}}
                >
                    Change to {isSignup ? "Login" : "Signup"}
                </Button>
            </Box>
        </form>
    </div>
  )
}
