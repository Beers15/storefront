import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart';
import CancelIcon from '@mui/icons-material/Cancel';
import { Paper, Typography, Box } from '@mui/material';

const Simplecart = (props) => {
  if(props.products.length > 0) {
    return (
      <Paper variant="outline" className="cart" sx={{ height: `${props.products.length * 43 + 20}px`}}>
        {props.products.map((product, idx) => {
          return (
            <Box key={idx} mt={2} sx={{display: 'flex', justifyContent: 'flex-start'}}>
              <Typography variant="subtitle1" pl={2} pr={2}>
                [{props.amounts[idx]}]
              </Typography>
              <Typography variant="subtitle1" pl={2} pr={2} sx={{flexGrow: 1 }}>
                {product.productName.length < 14 ? product.productName : product.productName.substring(0, 14) + '...'}
              </Typography>
              <CancelIcon sx={{ color: 'crimson', marginRight: '10px' }} onClick={() => props.removeFromCart(product)} />
            </Box>
          );
        })}
      </Paper>
    );
  } else {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    products: state.cart.products,
    amounts: state.cart.products.map(product => {
      return product.amount
    })
  };
}

const mapDispatchToProps = dispatch => ({
  removeFromCart: (product) => dispatch(removeFromCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Simplecart);
