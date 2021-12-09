import React from 'react';
import { connect } from 'react-redux';
import { Button, Stack, Typography, Box }  from '@mui/material';

const Categories = (props) => {
  return (
    <Box mt={6}>
      <Typography variant='h4'  ml={2}>Browse Our Categories</Typography>
      <Stack direction="row">
        {props.categories.map(category => {
          return <Button size="small" color="info" key={category} onClick={() => props.selectCategory(category)}>{category}</Button>
        })}
      </Stack>
    </Box>
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
