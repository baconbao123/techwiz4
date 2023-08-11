import React from 'react'
import {Container,Row,Col,Button,Form} from 'react-bootstrap'
import { AllProduct } from '../../Data/AllProduct'
import './Cart.scss'
import CartItem from './CartItem'
export default function Cart() {
  return (
   <Container fuild className='cart'>
    <div lg={12} className='fs-2 checkout text-center pb-3 f2-medium '>
        <div className=' me-5 '> 
          TOTAL:
          <span className='text-danger'> $20</span>
        </div>
     <Button variant='warning' className='checkoutbutton'>Check out </Button>
      </div>
    <Row>
      
    
      {AllProduct.map((item,index)=>(
        <Col lg={6} md={12}>
          <CartItem item={item}/>
        </Col>
      ))}
       
    </Row>
   </Container>
  )
}
