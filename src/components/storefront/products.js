import React from 'react';
import { connect } from 'react-redux';
import ProductDetailsCard from './productDetailsCard';
import { Box, Typography } from '@mui/material';

const Products = (props) => {
  return (
    <Box mt={3} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} data-testid="product-list">
      {props.products.length === 0 && (<Typography variant="h5">Nothing is currently being offered from this category</Typography>)}
      {props.products.map((product, idx) => { 
        return <ProductDetailsCard key={idx} product={product} />; 
      })}
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({type: 'SELECT_CATEGORY', payload: category}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
