import React from 'react';
import Categories from './categories';
import ActiveCategory from './activeCategory';
import Products from './products';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const StoreFront = () => {
  return (
    <Box mt={3}>
      <Categories />
      < Divider />
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
        <ActiveCategory />
        <Products />
      </Box>
    </Box>
  );
};


export default StoreFront;
