import React, { useContext,useRef } from 'react'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import { AllProduct } from '../../Data/AllProduct'
import './Cart.scss'
import CartItem from './CartItem'
import { Toast } from 'primereact/toast';
import { Value } from '../../Data/DataSava';
export default function Cart() {
  document.title = 'Cart'

  const {cart}=useContext(Value);
  const toast = useRef(null);
  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Removed success', detail:'The product was removed', life: 1000});
}
  return (
    
   <Container fuild className='cart'>
        <Toast ref={toast} />
    <div lg={12} className='fs-2 checkout text-center pb-3 f2-medium '>
        <div className=' me-5 '> 
          TOTAL:
          <span className='text-danger'> $20</span>
        </div>
     <Button variant='warning' className='checkoutbutton'>Check out </Button>
      </div>
    <Row>
      
    
      {cart.map((item,index)=>(
        <Col lg={6} md={12} xs={12}>
          <CartItem item={item} show={showSuccess}/>
        </Col>
      ))}
       
    </Row>
   </Container>
  )
}
