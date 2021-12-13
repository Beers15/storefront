import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/actions/cart';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProductDetailsCard = ({ products, product, addToCart }) => {
  return (
    <Card sx={{ maxWidth: 345 }} data-testid={`product-${product.productName}`}>
      <CardMedia
        component="img"
        height="160"
        image={product.imageUrl}
        alt={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" data-testid={`product-name-${product.name}`}>
          {product.name}
        </Typography>
        <Typography variant="subtext1" color="text.secondary" data-testid={`product-description-${product.name}`}>
          {product.description}
        </Typography>
        <Typography mt={2} variant="h6" color="text.secondary" data-testid={`product-cost-${product.name}`}>
          Cost: {product.price}
        </Typography>
        <Typography variant="h6" color="text.secondary" data-testid={`product-count-${product.name}`}>
          Amount in Stock: {products.find(productFromStore => {
            return product === productFromStore
          }).inventoryCount} 
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          onClick={() => addToCart(product)} 
          data-testid={`addToCart-btn-${product.productName}`}
        >
          Add to Cart
        </Button>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(addToCart(product)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsCard);
