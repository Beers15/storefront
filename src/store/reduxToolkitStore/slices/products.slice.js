import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    filteredProducts: []
  },
  reducers: {
    selectCategory(state, action) {
      if(action.payload.id) {
        let filteredProducts = state.products.filter(product => product.categoryId === action.payload.id.toString());
        state.filteredProducts =  filteredProducts;
      } else {
        state.filteredProducts = state.products;
      } 
    },
    addToCart(state, action) {
      state.products = state.products.map(product => {
        if(product === action.payload) {
          --product.inventoryCount;
        }
        return product;
      })
      
    },
    removeFromCart(state, action) {
      state.products = state.products.map(product => {
        if(product === action.payload) {
          ++product.inventoryCount;
        }
        return product;
      })
    },
    getProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
  }
});

export const { selectCategory, addToCart, removeFromCart, getProducts } = productsSlice.actions;

export default productsSlice.reducer;
