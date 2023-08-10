
import './App.scss';
import Main from './Components/Layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import ProductDetail from './Components/Layout/Products/ProductDetails/ProductDetails';
import AllProducts from './Components/Layout/Products/AllProducts/AllProducts';

function App() {
  return (
 
  <>
      <Main></Main>
      {/* <ProductDetail/> */}
      <AllProducts />
  </>
 
  );
}

export default App;
