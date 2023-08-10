
import './App.scss';
import Main from './Components/Layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import ProductDetail from './Components/Layout/Products/ProductDetails/ProductDetails';

function App() {
  return (
 
  <>
      <Main></Main>
      <ProductDetail/>
  </>
 
  );
}

export default App;
