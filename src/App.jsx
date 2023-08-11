
import './App.scss';
import Main from './Components/Layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import ProductDetail from './Components/Layout/Products/ProductDetails/ProductDetails';
import AllProducts from './Components/Layout/Products/AllProducts/AllProducts';
import { Value } from './Data/DataSava';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
function App() {
  const [isLogin,setIslogin]=useState(false);
  const [cart,setCard]=useState()

  // console.log('render');
  return (
 
  <Value.Provider value={{isLogin,setIslogin}}>
  
      <Main></Main>
  </Value.Provider>
 
  );
}

export default App;
