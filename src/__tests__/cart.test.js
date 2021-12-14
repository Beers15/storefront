
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

describe('Testing functionality of store cart', () => {
  it.skip('Should properly update the cart when an item is added to it', async () => {
    await waitFor(() => {
      let blenderBtn = screen.getByTestId('addToCart-btn-Blender');
      fireEvent.click(blenderBtn);

      let cartBlenderName = screen.getByTestId('cart-product-Blender');
      let cartBlenderCount = screen.getByTestId('cart-amount-Blender');

      expect(cartBlenderName).toBeInTheDocument();
      expect(cartBlenderCount).toBeInTheDocument();
    });
  });

  it.slip('Should properly reduce the count when the x button is hit for an item in the cart', async () => {
    //jest.spyOn(window.localStorage.__proto__, 'setItem');

    await waitFor(() => {
      let blenderBtn = screen.getByTestId('addToCart-btn-Blender');
      fireEvent.click(blenderBtn);

      let blenderRemoveBtn = screen.getByTestId('cart-product-removeBtn-Blender');
      fireEvent.click(blenderRemoveBtn);

      let cartBlenderName = screen.getByTestId('cart-product-Blender');
      let cartBlenderCount = screen.getByTestId('cart-amount-Blender');

      expect(cartBlenderName).toBeInTheDocument();
      expect(cartBlenderCount).toHaveTextContent('3');
    });
  });

  // it('Should update catalog product card when the count is altered  (product is +/- to the cart)', () => {
  //   let blenderCount = screen.getByTestId(`product-count-Blender`);
    
  //   
  //   let blenderBtn = screen.getByTestId('addToCart-btn-Sofa');
  //   fireEvent.click(blenderBtn);
  //   fireEvent.click(blenderBtn);
  //   fireEvent.click(blenderBtn);

  //   expect(blenderCount).toHaveTextContent('2');

  //   let blenderRemoveBtn = screen.getByTestId('cart-product-removeBtn-Blender');
  //   fireEvent.click(blenderRemoveBtn);

  //   
  //   expect(blenderCount).toHaveTextContent('3');
  // });
});