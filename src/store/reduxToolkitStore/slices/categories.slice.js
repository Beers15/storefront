import { createSlice, current } from '@reduxjs/toolkit';

let initCategory = { displayName: 'All', normalizedName: 'all', description: '' };

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [ initCategory ],
    currentCategory: initCategory,
  },
  reducers: {
    selectCategory(state, action) {
      if(action.payload.displayName === 'All') {
        state.currentCategory = initCategory;
      } 
      else if(current(state).categories.includes(action.payload)) {
        state.currentCategory = action.payload;
      }
    },
    getCategories(state, action) {
      state.categories = state.categories.concat(action.payload);
    },
  }
});

export const { selectCategory, getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
