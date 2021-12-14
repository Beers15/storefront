import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const ProductPage = (props) => {
  const { id } = useParams();

  /* inefficient work around for not being able to pass id into mapStateToProps
     with react-router-dom v6 to get correct product as prop */
  const getProduct = () => {
    let match = props.products.find(entry => {
      return entry.id.toString() === id;
    });
    console.log(match)
    return match;
  }

  return (
    <div>
      <h1>{getProduct(id) && getProduct(id).id}</h1>
      <h1>{getProduct(id) && getProduct(id).name}</h1>
      <h1>{getProduct(id) && getProduct(id).price}</h1>
      <h1>{getProduct(id) && getProduct(id).imageUrl}</h1>
      <h1>{getProduct(id) && getProduct(id).inventoryCount}</h1>
      <h1>{getProduct(id) && getProduct(id).description || 'Oh dear... No description for this product is available.'}</h1>
    </div>
  );
}

const mapStateToProps = state => {  
  return {
    products : state.products.products
  };
}

export default connect(mapStateToProps)(ProductPage);
