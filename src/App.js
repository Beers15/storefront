import { useEffect } from 'react';
import { connect } from 'react-redux';
import StoreFront from './components/storefront';
import Header from './components/header';
import Footer from './components/footer';
import Container from '@mui/material/Container';
import { getCategories } from './store/actions/categories';
import { getProducts } from './store/actions/products';
import  store from './store';

const App = (props) => {
  useEffect(() => {
    props.fetchCategories();
    props.fetchProducts();
  }, []);
  useEffect(() => {
    console.log("UPDATE")
    console.log(props.categories);
  })

  return (
    <div>
      <Container 
        className="main" 
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

const mapStateToProps = state => {
  return {
    categories: state.categories.categories,
  };
}

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(getCategories()),
  fetchProducts: () => dispatch(getProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
