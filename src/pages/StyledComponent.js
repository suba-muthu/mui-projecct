import { Box, styled, Typography } from '@mui/material'
import React from 'react'

const CustomizedTypography = styled(Typography)`
  color: #FA0566;
  background: #62665E; 

  :hover {
    color: #F4F9F0;
  }
`;

export default function StyledComponent() {
  return (
    <div>
        <Box>
            <CustomizedTypography variant="h1">Hello World</CustomizedTypography>
        </Box>
    </div>
  )
}
