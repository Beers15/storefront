import React from 'react'
import { Paper, Typography } from '@mui/material'
const Simplecart = () => {
  return (
    <Paper elevation={6} sx={{ overflow: 'hidden', height: '200px', width: '200px', zIndex: '100' }}>
      <Typography pl={2} pr={2}>CART</Typography>
    </Paper>
  );
}

export default Simplecart
