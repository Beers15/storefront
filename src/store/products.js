let initialState = {
  //hardcoded temporarily
  products: [
    { productName: 'Sofa', description: 'Ut laborum voluptate deserunt dolore commodo excepteur duis amet adipisicing adipisicing tempor amet sit irure.', 'cost': 1, category: 'Furniture' },
    { productName: 'Blender', description: 'Duis consectetur magna culpa tempor proident consequat est quis Lorem labore quis proident.', 'cost': 1, category: 'Appliances' },
    { productName: 'Television', description: 'Non elit laborum enim enim cillum magna sint non qui.', 'cost': 1, category: 'Electronics' },
  ],
};

function productsReducer(state = initialState, action) {
  switch(action.type) {
  case '':
    return state;
  default:
    return state;
  }
}

export default productsReducer;