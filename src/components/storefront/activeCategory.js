import React from 'react'
import { connect } from 'react-redux';
import { Typography }  from '@mui/material';

const ActiveCategory = (props) => {
  return (
    <Typography mt={10} variant="h3" data-testid="active-category">{props?.currentCategory?.toUpperCase() || 'CATALOG'}</Typography>
  );
}

const mapStateToProps = state => {
  return {
    currentCategory: state.categories.currentCategory,
  };
}

export default connect(mapStateToProps)(ActiveCategory);
