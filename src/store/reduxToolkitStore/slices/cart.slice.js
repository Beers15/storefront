import { createSlice, current } from '@reduxjs/toolkit';

const getCartStorage = () => {
  let storage = localStorage.getItem('cart');

  if(!storage) return [];
  storage = JSON.parse(storage);

  return storage;
}

const updateCartStorage = (products) => {
  localStorage.setItem('cart', JSON.stringify(products));
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: getCartStorage()
  },
  reducers: {
    addToCart(state, action) {
      let cartItem = action.payload;
      let updatedProducts = state.products;
      if(current(state).products.map(product => product.name).includes(cartItem.name)) {
        updatedProducts = state.products.map(product => {
          if(product.name === cartItem.name) {
            ++product.amount;
          }
          return product;
        });
      } else {
        cartItem.amount = 1;
        state.products.push(cartItem)
      }
      
      updateCartStorage(updatedProducts);
    },
    removeFromCart(state, action) {
      let updatedProducts = state.products.filter(product => {
        if(product.name === action.payload.name && product.amount > 0) {
          --product.amount;
          return product.amount > 0;
        }
        return product !== action.payload;
      });
      updateCartStorage(updatedProducts);
      state.products = updatedProducts;
    },
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
