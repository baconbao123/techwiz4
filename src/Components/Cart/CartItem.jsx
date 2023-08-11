import React, { useState } from 'react'
import './CartItem.scss'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsDashLg } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from 'react-router-dom'
export default function CartItem({ item }) {
  console.log(item);
  const [number, setNumber] = useState(1)
  const handleChange = (e) => {
    const value = e.target.value;


    const sanitizedValue = value.replace(/[^0-9]/g, '');
    if (parseInt(sanitizedValue) / 1 === parseInt(sanitizedValue)) {
      if (parseInt(sanitizedValue) >= 0) {

        setNumber(parseInt(sanitizedValue));
      }
    }

    else {

      setNumber(sanitizedValue);


    }
  };
  return (
    <Row className='cart-item mb-5 mt-5 '>
      <Col lg={4} md={4} sm={3}>
        <img src={item.img[0].img1} alt="" className='cart-img' />
      </Col>
      <Col lg={8}md={8} sm={9} className=''>
        <section>

          <div className='mt-3 fs-2 fw-bold'>
            {item.name}
          </div>
          <div className='mt-2'>
            <span className='fs-5 fw-medium me-3'> Category:</span> <span className='text'> {item.category}</span>
          </div>
          <div className='mt-2'>
            <span className='fs-5 me-3 fw-medium'>Origin:</span >   <span className='text'>{item.origin}</span>
          </div>
          <div className='mt-2 fs-4'>
            <span className='fs-5 me-3'>Price:</span>   {item.price} $
          </div>

          <div className='mb-3 mt-3'>
            <div>
            <div className='item-number ' onClick={() => setNumber(number - 1)} >
              <BsDashLg />
            </div>


            <input className='d-inline number-number ' type="number" accept='number' name="" value={number} onChange={(e) => handleChange(e)} />
            <div className='item-number  ' onClick={() => setNumber(number + 1)}>
              <AiOutlinePlus />
            </div>
          
            
          </div>
          </div>
            <Button variant='success button-remove' className='ms-2'>Remove from your card</Button>
            <br/>
          <div className='mt-2  mb-3 fs-4   '>
             <div>
             <span className='fs-5 me-3'>Total:</span>  <span className='text-danger'>  {item.price * number} $</span>  
             </div>
              <Link to={ `/shop/all/${item.id}`}>
                <span className='fs-6 ms-5 text-primary view'>View detail</span></Link>
            </div>


        </section>
      </Col>
    </Row>
  )
}
