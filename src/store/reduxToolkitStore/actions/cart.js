import axios from 'axios';
import { addToCart, removeFromCart } from '../slices/cart.slice';

export const addProductToCart = async (product) => async (dispatch) => {
  product.action = 'decrement';

  let res = null;
  try {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/products`, product);
  } catch(err) {
    console.log(err);
  }

  //shouldn't ever happen
  if(res?.data?.inventoryCount < 1) {
    return;
  }

  dispatch(addToCart(product));
};

export const removeProductFromCart = product => async (dispatch) => {
  product.action = 'increment';

  try {
    await axios.put(`${process.env.REACT_APP_API_SERVER}/products`, product);
  } catch(err) {
    console.log(err);
  }

  dispatch(removeFromCart(product));
};
