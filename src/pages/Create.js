import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
  

export default function Create() {
  const [ inputs, setInputs ] = useState({
    name: "",
    email: "",
    password: "",
    subscribe: false,
    age: 0
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
        <Typography 
          variant='h1'
          color='textsecondary'
          component='h2'
        >
            Create a new Note
        </Typography>
      
      <form 
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column' }}
      > 
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          sx={{ margin: 3 }}
          type={"text"}
          placeholder='Name'
          variant='outlined'
        />
        <TextField 
         name="email"
         value={inputs.email}
         onChange={handleChange}
         sx={{ margin: 3 }}
         variant='standard'
         placeholder='Email'
         type={"email"}
        />
        <TextField 
         name="password"
         value={inputs.password}
         onChange={handleChange}
         sx={{ margin: 3 }}
         variant='filled'
         placeholder='Password'
         type={"password"}
        />
        {/* Checkbox */}
        <FormGroup>
          <FormControlLabel 
            control={<Checkbox onChange={() => setInputs((prev) => ({
              ...prev,subscribe: !inputs.subscribe
            }))}/>} 
            label="Subscribe To Newsletter" />
        </FormGroup>
        {/* select */}
        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            name="age"
            value={inputs.age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button type='submit'>submit</Button>
      </form>
    </div>
  )
}

