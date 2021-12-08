import React from 'react';
import { connect } from 'react-redux';

const Categories = (props) => {

  return (
    <div>
      <h1>Browse Our Categories</h1>
      {props.categories.map(category => {
        return <button>{category}</button>
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  };
};


export default connect(mapStateToProps)(Categories);
