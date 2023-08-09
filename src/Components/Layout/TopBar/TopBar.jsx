import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './TopBar.scss'
import logo from '../../../assets/Layout_img/Logo_header.png'
export default function TopBar() {
  return (
    <>
      <Row >
      <section className='top-bar'>
        <Container>

      <Row>

      <Col md={3} className=''>
      
      <img src={logo} className='logo-header' />
      </Col>
      <Col md={9} >
      
      </Col>
      </Row>
        </Container>
      </section>
      
      </Row>
    </>
  )
}
