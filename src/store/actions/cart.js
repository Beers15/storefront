export const addToCart = product  => async (dispatch) => {
  dispatch({
    type: 'ADD_TO_CART',
    payload: product,
  });
};

export const removeFromCart = product => async (dispatch) => {
  dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product,
  });
};