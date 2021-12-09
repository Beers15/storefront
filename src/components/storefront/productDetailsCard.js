import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProductDetailsCard = ({ product, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }} data-testid={`product-${product.productName}`}>
      <CardMedia
        component="img"
        height="160"
        image={product.photoUrl}
        alt={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" data-testid={`product-name-${product.productName}`}>
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary" data-testid={`product-description-${product.productName}`}>
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => addToCart(product)}>Add to Cart</Button>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(addToCart(product)),
});


export default connect(null, mapDispatchToProps)(ProductDetailsCard);
