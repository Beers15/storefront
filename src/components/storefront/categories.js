import React from 'react';
import { connect } from 'react-redux';

const Categories = (props) => {
  return (
    <div>
      <h1>Browse Our Categories</h1>
      {props.categories.map(category => {
        return <button key={category} onClick={() => props.selectCategory(category)}>{category}</button>
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  };
};

const mapDispatchToProps = dispatch => ({
  selectCategory: (category) => dispatch({type: 'SELECT_CATEGORY', payload: category}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
