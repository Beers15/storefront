import { createStore, combineReducers } from 'redux';

import cartReducer from './cart';
import productsReducer from './products';
import catagoriesReducer from './categories';

let reducers = combineReducers({ 
  cart: cartReducer,
  products: productsReducer,
  categories: catagoriesReducer,
});

const store = () => {
  return createStore(reducers);
};

export default store;