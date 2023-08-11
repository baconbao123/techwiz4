
import './App.scss';
import Main from './Components/Layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap'
import ProductDetail from './Components/Layout/Products/ProductDetails/ProductDetails';
import AllProducts from './Components/Layout/Products/AllProducts/AllProducts';
import { Value } from './Data/DataSava';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { AllRoutes } from './Routes/AllRoutes';

import { useRef } from 'react';
function App() {
  const toast = useRef(null);
  const allRoutes = AllRoutes;
  const [isLogin,setIslogin]=useState(false);
  const [cart,setCart]=useState([]);
  const change=Cookies.get('isLogin');
  useEffect(()=> {
    if (Cookies.get('isLogin')) {
      setIslogin(JSON.parse(Cookies.get('isLogin')))}
  },[change])
  
 
  // console.log('render');
  return (
 
  <Value.Provider value={{isLogin,setIslogin,cart,setCart}}>
  
      <Main></Main>
  </Value.Provider>
 
  );
}

export default App;
