import StoreFront from './components/storefront';
import Header from './components/header';
import Footer from './components/footer';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <div>
      <Container 
        className="main" 
        maxWidth='xxl' 
        fluid 
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
