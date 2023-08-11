import React, { useContext,useRef } from 'react'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import { AllProduct } from '../../Data/AllProduct'
import './Cart.scss'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { Toast } from 'primereact/toast';
import { Value } from '../../Data/DataSava';
import imgCard from '../../assets/Layout_img/AddToCard.png'
export default function Cart() {
  document.title = 'Cart'

  const {cart}=useContext(Value);
  const {setCart}=useContext(Value);

  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Removed success', detail:'The product was removed', life: 1000});
}
 const showSuccessCheckOut = () => {
  toast.current.show({severity:'success', summary: 'Check Out success', detail:'The products were checked out', life: 1000});
}
const handleCheckOut=()=> {
  setCart([]);
  showSuccessCheckOut()
}
  return (
    
   <div>
    <Toast ref={toast} />
   {cart.length>0?(
    <Container fuild className='cart'>
    
<div lg={12} className='fs-2 checkout text-center pb-3 f2-medium '>
   
 <Button variant='warning' className='checkoutbutton' onClick={()=>handleCheckOut()}>Check out </Button>
  </div>
<Row>
  

  {cart.map((item,index)=>(
    <Col lg={6} md={12} xs={12}>
      <CartItem item={item} show={showSuccess}/>
    </Col>
  ))}
   
</Row>
</Container>
   ):(
    <Container fuild className=' text-center d-flex justify-content-center nothing'>
      <Row className=''>

    
      <img src={imgCard} className='img' />
      <Link to='/shop/all' >
        <div>
          Nothing in your cart
        </div>
        <div className='link fs-3'>
        Add somes
        </div> </Link>
      
   <div>
 
   </div>
      </Row>
      
    </Container>
   )}
   </div>
  )
}
