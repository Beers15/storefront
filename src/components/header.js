import React from 'react';
import { Typography, AppBar } from '@mui/material'

const Header = () => {
  return (
    <AppBar elevation={8} data-testid="header">
      <Typography variant="h5" component="div" m={2} sx={{ flexGrow: 1 }}>Virtual Storefront</Typography>
    </AppBar>
  );
}

export default Header;
