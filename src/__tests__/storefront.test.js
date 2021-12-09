
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';

beforeEach(() => {
  render (
    <Provider store={store()}>
      <App />
    </Provider>
  );
})

describe('Testing core behaviors of app', () => {
  it('Should properly render the application\'s main components', async () => {
    let header = screen.getByTestId('header');
    let footer = screen.getByTestId('footer');
    let productList = screen.getByTestId('product-list');
    let categories = screen.getByTestId('categories');
    let activeCategory = screen.getByTestId('active-category');
    //will need to change once hardcoded entries are removed
    let testProduct = screen.getByTestId('product-Sofa');


    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(productList).toBeInTheDocument();
    expect(categories).toBeInTheDocument();
    expect(activeCategory).toBeInTheDocument();
    expect(testProduct).toBeInTheDocument();
  });

  it('Should display related items when a category is selected and not items that do not belong in that category' ,() => {
    let appliancesBtn = screen.getByTestId('category-btn-Appliances');


    let blenderDescription = screen.getByTestId('product-description-Blender');
    let blenderName = screen.getByTestId('product-name-Blender');
    let sofaDescription = screen.getByTestId('product-description-Sofa');
    let sofaName = screen.getByTestId('product-name-Sofa');

    //will need to change once hardcoded products are removed
    expect(blenderDescription).toBeInTheDocument();
    expect(blenderName).toBeInTheDocument();
    expect(sofaDescription).toBeInTheDocument();
    expect(sofaName).toBeInTheDocument();

    fireEvent.click(appliancesBtn);


    let sofaDescriptionAfterCategoryChange = null;
    try {
      sofaDescriptionAfterCategoryChange = screen.getByTestId('product-description-Sofa')
    } catch(err) {
      sofaDescriptionAfterCategoryChange = err['name'];
    }

    let sofaNameAfterCategoryChange = null;
    try {
      sofaNameAfterCategoryChange = screen.getByTestId('product-name-Sofa')
    } catch(err) {
      sofaNameAfterCategoryChange = err['name'];
    }

    let blenderDescriptionAfterCategoryChange = screen.getByTestId('product-description-Blender');
    let blenderNameAfterCategoryChange = screen.getByTestId('product-name-Blender');

    expect(blenderDescriptionAfterCategoryChange).toBeInTheDocument();
    expect(blenderNameAfterCategoryChange).toBeInTheDocument();
    expect(sofaDescriptionAfterCategoryChange).toEqual('TestingLibraryElementError');
    expect(sofaNameAfterCategoryChange).toEqual('TestingLibraryElementError');
  });
});
