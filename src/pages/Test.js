// import { Tabs, Tab, AppBar, Toolbar } from '@mui/material'
import React from 'react'
// import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Test() {
  // const [value, setValue] = useState();
  return (
    <div>
      {/* AppBar  */}
      {/* <AppBar>
        <Toolbar>
          <Tabs 
            indicatorColor='secondary'
            textColor="inherit"
            value={value}
            onChange={(e, val) => setValue(val)}
            >
                <Tab label="First"/>
                <Tab label="Second"/>
                <Tab label="Third"/>
          </Tabs>
        </Toolbar>
      </AppBar> */}

      {/* Card */}
      <br/>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://img.freepik.com/free-vector/cute-rabbit-with-carrot-bag-cartoon-vector-icon-illustration-animal-education-icon-concept-isolated_138676-5813.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rabbit
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
