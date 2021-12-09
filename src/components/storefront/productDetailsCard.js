import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const ProductDetailsCard = ({ product }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="160"
        image={product.photoUrl}
        alt={product.productName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View Details</Button>
      </CardActions>
    </Card>
  );
}

export default ProductDetailsCard;
