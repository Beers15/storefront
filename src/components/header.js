import React from 'react';
import { connect } from 'react-redux';
import { Typography, AppBar, Toolbar } from '@mui/material'

const Header = ({ cartSize }) => {
  return (
    <AppBar elevation={8} data-testid="header">
      <Toolbar>
        <Typography component="div" sx={{ flexGrow: 1 }} variant="h5" component="div" m={2} sx={{ flexGrow: 1 }}>Virtual Storefront</Typography>
        <Typography mr={9}>CART ({cartSize})</Typography>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = state => {
  return {
    cartSize: state.cart.products.length
  }
}

export default connect(mapStateToProps)(Header);
