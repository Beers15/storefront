let initialState = {
  categories: [
    'All', 'Furniture', 'Appliances', 'Electronics', 'Clothes', 'Other',
  ],
  currentCategory: null,
};

function categoriesReducer(state = initialState, action) {
  switch(action.type) {
  case 'SELECT_CATEGORY':
    if(action.payload === 'All') {
      return { categories: state.categories, currentCategory: null };
    }
    else if(state.categories.includes(action.payload)) {
      return { categories: state.categories, currentCategory: action.payload };
    } else {
      return { categories: state.categories, currentCategory: state.currentCategory };
    }
  default:
    return state;
  }
}

export const selectCategory = category => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category,
  }
};

export default categoriesReducer;