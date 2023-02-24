import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

export default function Themes() {
   const theme = useTheme();
   console.log(theme);

  return (
    <div>
      <Box>
        <Typography color="primary">Hello World</Typography>
      </Box>
    </div>
  )
}

