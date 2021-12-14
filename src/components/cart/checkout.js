import React from 'react';
import { connect } from 'react-redux';

const Checkout = (props) => {
  return (
    <div>
      <h1>CHECKOUT HERE</h1><h1>Order Summary</h1>
      {props.products && (
        props.products.map(product => {
          return (<>
            <p>{product.name}</p>
            <p>${product.price.toFixed(2)}</p>
            <p>Number in Stock: {product.inventoryCount}</p>
            <p>{product.description || 'Oh dear... No description for this product is available.'}</p>
          </>);
        })
      )}
      {props.products && (
        <p>Total Cost: ${props.products.reduce((sum, entry) => { return sum + entry.price }, 0)}</p>
      )}
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.cart.products
  }
}

export default connect(mapStateToProps)(Checkout);
