import { useEffect } from 'react';
import axios from 'axios';
import StoreFront from './components/storefront';
import Header from './components/header';
import Footer from './components/footer';
import Container from '@mui/material/Container';

const App = () => {
  useEffect(async () => {
    let foo = await axios.get(`${process.env.REACT_APP_API_SERVER}/products`);
    console.log(foo);
 
  
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

export default App;
