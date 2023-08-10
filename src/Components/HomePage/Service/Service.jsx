import React from 'react'
import leftimg from '../../../assets/Layout_img/service 1.png'
import pic3 from '../../../assets/Layout_img/image_11-removebg-preview.png'
import pic2 from '../../../assets/Layout_img/image_10-removebg-preview (1).png'
import pic1 from '../../../assets/Layout_img/image_9-removebg-preview.png'

import { Container, Row, Col } from 'react-bootstrap'

import './Service.scss'
export default function Service() {
    return (
        <div className='service mb-5 ' >
            <Container className='contain pt-5 pb-5' >
                <Row>

                    <Col lg={4} className=''>
                        <img src={leftimg} alt="" className='img-service' />
                    </Col>
                    <Col lg={8} className='content'>
                        <div>
                            <div className='title1 fw-medium fs-3'>Open To Nature</div>
                            <div className='text1'>“ PlantPalace always pioneering to bring a green environment" to everyone. Contributing to making life easier - fresher than flowers - more in harmony with the environment.”</div>
                        </div>
                        <Row>
                            <Col lg={4} className='text-center'>
                                <img src={pic1} className='mb-3' />
                                <div className='title2 fw-medium'>TERRARIUM WORKSHOP</div>
                                <div className='text2'>Are you looking for nature-based activities to enhance your experience or to reconnect with yourself after the hustle and bustle of daily life?</div>
                            </Col>
                            <Col lg={4} className='text-center'>
                                <img src={pic2} className='mb-3' />
                                <div className='title2 fw-medium'>GREEN GIFTS </div>
                                <div className='text2'>Creative green gifts are waiting for you to present to your loved ones, dear ones, and valued partners on special occasions.</div>
                            </Col>
                            <Col lg={4} className='text-center'>
                                <img src={pic3} className='mb-3' />
                                <div className='title2 fw-medium'> GREEN DERCORATION</div>
                                <div className='text2'>A small corner in your house
                                    lacks greenery? Lacks vitality? Don't have time?  PlantPalace take care of it
                                    for you!</div>
                            </Col>
                        </Row>
                        <div className='mt-5 button-service d-inline-block'>Show all services</div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}