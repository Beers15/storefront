import React from 'react'
import { connect } from 'react-redux';

const ActiveCategory = (props) => {
  if(props.currentCategory) {
    return (
      <>
        <h1>{props.currentCategory}</h1>
      </>
    );
  } else {
    return null;
  }
}

const mapStateToProps = state => {
  return {
    currentCategory: state.categories.currentCategory,
  };
}

export default connect(mapStateToProps)(ActiveCategory);
