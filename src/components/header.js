import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material'

const Header = () => {
  return (
    <AppBar elevation={8} data-testid="header">
      <Toolbar>
        <Typography  component="div" sx={{ flexGrow: 1 }} variant="h5" component="div" m={2} sx={{ flexGrow: 1 }}>Virtual Storefront</Typography>
        <Typography>CART (0)</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
