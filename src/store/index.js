import { createStore, combineReducers, applyMiddleware } from 'redux';
import  thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import cartReducer from './reducers/cart';
import productsReducer from './reducers/products';
import catagoriesReducer from './reducers/categories';

let reducers = combineReducers({ 
  cart: cartReducer,
  products: productsReducer,
  categories: catagoriesReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store;