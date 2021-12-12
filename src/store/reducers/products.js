//hardcoded temporarily
let initProducts = [
  { productName: 'Sofa', photoUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' , description: 'Ut laborum voluptate deserunt dolore commodo excepteur duis amet adipisicing adipisicing tempor amet sit irure.', cost: 1, count: 10, category: 'Furniture' },
  { productName: 'Blender', description: 'Duis consectetur magna culpa tempor proident consequat est quis Lorem labore quis proident.', cost: 1, count: 100, category: 'Appliances', photoUrl: 'https://images.unsplash.com/photo-1585237672814-8f85a8118bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=955&q=80' },
  { productName: 'Television', description: 'Non elit laborum enim enim cillum magna sint non qui.', cost: 1, count: 1,category: 'Electronics', photoUrl: 'https://images.unsplash.com/photo-1539786774582-0707555f1f72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80' },
]

let initialState = {
  products: initProducts,
  filteredProducts: initProducts
};

function productsReducer(state = initialState, action) {
  switch(action.type) {
  case 'SELECT_CATEGORY':
    if(action.payload !== 'All') {
      let filteredProducts = state.products.filter(product => product.category === action.payload);
      return { ...state, filteredProducts };
    }   
    return {...state, filteredProducts: state.products};
  case 'ADD_TO_CART':
    return { ...state, 
      products: state.products.map(product => {
        if(product === action.payload) {
          --product.count;
        }
        return product;
      })
    }
  case 'REMOVE_FROM_CART':
    return { ...state, 
      products: state.products.map(product => {
        if(product === action.payload) {
          ++product.count;
        }
        return product;
      })
    }
  default:
    return state;
  }
}

export default productsReducer;