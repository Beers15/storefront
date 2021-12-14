import axios from 'axios';
import { selectCategory, getCategories } from '../slices/categories.slice';

export const selectACategory = category => async (dispatch) => {
  dispatch(selectCategory(category));
};

export const fetchCategories = () => async (dispatch) => {
  let res = null;
  try {
    res = await axios.get(`${process.env.REACT_APP_API_SERVER}/categories`);
  } catch(err) {
    console.log(err);
  }
  dispatch(getCategories(res?.data?.results));
}
