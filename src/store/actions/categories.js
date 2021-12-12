export const selectCategory = category => async (dispatch) => {
  dispatch({
    type: 'SELECT_CATEGORY',
    payload: category,
  });
};

