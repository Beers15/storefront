import { useEffect } from 'react';
import { connect } from 'react-redux';
import StoreFront from './components/storefront';
import Header from './components/header';
import Footer from './components/footer';
import Container from '@mui/material/Container';
import { getCategories } from './store/actions/categories';

const App = (props) => {
  useEffect(() => {
    console.log('START')
    props.fetchCategories();
  }, []);

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

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(getCategories()),
})

export default connect(null, mapDispatchToProps)(App);
