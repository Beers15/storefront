import React from 'react';
import { connect } from 'react-redux';
import ProductDetailsCard from './productDetailsCard';

const Products = (props) => {
  return (
    <div>
      {props.products.map((product, idx) => { 
        return <ProductDetailsCard key={idx} product={product} />; 
      })}
    </div>
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
