let initialState = {
  categories: [
    'Furniture', 'Appliances', 'Electronics', 'Clothes', 'Other',
  ],
  selectedCategory: null,
};

function categoriesReducer(state = initialState, action) {
  switch(action.type) {
  case 'SELECT_CATEGORY':
    if(action.payload in state.categories) {
      return { categories: state.categories, selectedCategory: action.payload};
    } else {
      return { categories: state.categories, selectedCategory: state.selectedCategory };
    }
    
  default:
    return state;
  }
}

export default categoriesReducer;