import React from 'react';
import { connect } from 'react-redux';
import ProductDetailsCard from './productDetailsCard';

const Products = (props) => {
  const displayProducts = () => {
    let products = props.products;

    if(props.currentCategory) {
      products = products.filter(product => { 
        return product.category === props.currentCategory;
      });
    } 

    products = products.map((product, idx) => { 
      return <ProductDetailsCard key={idx} product={product} />; 
    });
    
    return products;
  }

  return (
    <div>
      {displayProducts()}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentCategory: state.categories.currentCategory,
    products: state.products.products,
  };
};

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({type: 'SELECT_CATEGORY', payload: category}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
