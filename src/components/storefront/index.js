import React from 'react';
import Categories from './categories';
import ActiveCategory from './activeCategory';
import Products from './products';

const StoreFront = () => {
  return (
    <div>
      <Categories />
      <ActiveCategory />
      <Products />
    </div>
  );
};


export default StoreFront;
