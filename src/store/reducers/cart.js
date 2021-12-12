let initialState = {
  products: []
};

function cartReducer(state = initialState, action) {
  switch(action.type) {
  case 'ADD_TO_CART':
  {
    let cartItem = action.payload;
    if(state.products.includes(cartItem)) {
      ++cartItem.amount;
      return state;
    } else {
      cartItem.amount = 1;
    }
    return { ...state, products: [...state.products, cartItem] }
  }
  case 'REMOVE_FROM_CART':
    return {...state, products: state.products.filter(product => {
      if(product === action.payload && product.amount > 0) {
        --product.amount;
        return product.amount > 0;
      }
      return product !== action.payload;
    })};
  default: 
    return state;
  }
}

export default cartReducer;