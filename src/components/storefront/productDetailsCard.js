import React from 'react';

const ProductDetailsCard = ({ product }) => {
  return (
    <div>
      <h3>{product.productName}</h3>
      <h4>{product.details}</h4>
      <h4>${product.cost}</h4>
    </div>
  )
}

export default ProductDetailsCard;
