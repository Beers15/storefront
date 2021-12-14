import { createSlice } from '@reduxjs/toolkit';

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
    
      if(state.products.includes(cartItem)) {
        let updatedProducts = state.products.map(product => {
          if(product === cartItem) {
            ++product.amount;
          }
          return product;
        });
        updateCartStorage(updatedProducts);
      } else {
        cartItem.amount = 1;
      }
      let updatedProducts = [...state.products, cartItem];
      updateCartStorage(updatedProducts);
      state.products = updatedProducts;
    },
    removeFromCart(state, action) {
      let updatedProducts = state.products.filter(product => {
        if(product === action.payload && product.amount > 0) {
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
