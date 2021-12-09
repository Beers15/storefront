import React from 'react'
import { connect } from 'react-redux';
import { Typography }  from '@mui/material';

const ActiveCategory = (props) => {
  if(props.currentCategory) {
    return (
      <Typography mt={2} variant="h3">{props.currentCategory.toUpperCase()}</Typography>
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
