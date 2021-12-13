import { useEffect } from 'react';
import { connect } from 'react-redux';
import StoreFront from './components/storefront';
import Header from './components/header';
import Footer from './components/footer';
import Container from '@mui/material/Container';
import { getCategories } from './store/actions/categories';
import { getProducts } from './store/actions/products';

const App = (props) => {
  useEffect(() => {
    props.fetchCategories();
    props.fetchProducts();
  }, []);

  return (
    <div>
      <Container 
        className='main' 
        maxWidth='xxl' 
        sx={{ display: 'flex', justifyContent: 'flexStart', flexDirection: 'column', minHeight: '90vh'}}
      >
        <Header />
        <StoreFront />
      </Container>
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(getCategories()),
  fetchProducts: () => dispatch(getProducts()),
})

export default connect(null, mapDispatchToProps)(App);
