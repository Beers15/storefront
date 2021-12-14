
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../store';
import App from '../App';

//use our mock service worker that mocks the auth api server
import { server } from '../mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

beforeEach(() => {
  render (
    <Provider store={store()}>
      <App />
    </Provider>
  );
});

describe('Testing core behaviors of app', () => {
  it('Should properly render the application\'s main components', async () => {
    let header = screen.getByTestId('header');
    let footer = screen.getByTestId('footer');
    let productList = screen.getByTestId('product-list');
    let categories = screen.getByTestId('categories');
    let activeCategory = screen.getByTestId('active-category');
    
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(productList).toBeInTheDocument();
    expect(categories).toBeInTheDocument();
    expect(activeCategory).toBeInTheDocument();
  });

  it.skip('Should display related items when a category is selected and not items that do not belong in that category', async () => {
    //when all categories are displayed, items from 2 categories should be present
    await waitFor(() => {
      let blenderName = screen.getByTestId('product-name-Blender');
      let blenderDescription = screen.getByTestId('product-description-Sofa');
      let sofaDescription = screen.getByTestId('product-description-Sofa');
      let sofaName = screen.getByTestId('product-name-Sofa');
      
      expect(blenderName).toBeInTheDocument();
      expect(sofaName).toBeInTheDocument();
      expect(blenderDescription).toBeInTheDocument();
      expect(sofaDescription).toBeInTheDocument();
    });    
    
    //once a single category is selected, only items from that category should be displayed
    await waitFor(() => {
      let appliancesBtn = screen.getByTestId('category-btn-Appliances'); 
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
  
      //appliances should be present
      expect(blenderDescriptionAfterCategoryChange).toBeInTheDocument();
      expect(blenderNameAfterCategoryChange).toBeInTheDocument();
      //non appliances products should not be present
      expect(sofaDescriptionAfterCategoryChange).toEqual('TestingLibraryElementError');
      expect(sofaNameAfterCategoryChange).toEqual('TestingLibraryElementError');
    });
  });
});
