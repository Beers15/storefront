let initialState = {
  products: [
    { productName: 'Sofa', photoUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' , description: 'Ut laborum voluptate deserunt dolore commodo excepteur duis amet adipisicing adipisicing tempor amet sit irure.', cost: 1, count: 1, category: 'Furniture' },
  ]
};

function cartReducer(state = initialState, action) {
  switch(action.type) {
  case 'ADD_TO_CART':
    return { ...state, products: [...state.products, action.payload] }
  default:
    return state;
  }
}

export default cartReducer;