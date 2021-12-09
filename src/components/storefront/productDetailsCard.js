import React from 'react';

const ProductDetailsCard = ({ product }) => {
  return (
    <div>
      <h3>{product.productName}</h3>
      <p>{product.description}</p>
      <p>${product.cost}</p>
    </div>
  )
}

export default ProductDetailsCard;
