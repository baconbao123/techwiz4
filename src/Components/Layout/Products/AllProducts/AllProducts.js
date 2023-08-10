import React, { useState } from "react";
import {Row, Col, Button, Form} from 'react-bootstrap'
import bannerallpro from '../../../../assets/Layout_img/banner-allpro.png'
import './AllProducts.scss'
import { AllProduct } from "../../../../Data/AllProduct";

const AllProducts = () => {
    const [categoryName, setCategoryName] = useState('All Product')

    return (
        
        <div className="allproduct-master">
            <div className="banner-allproduct">
                <img src={bannerallpro} className="img-banner" />
                <span className="name-cataegory">{categoryName}</span> 
            </div>
            <div className="allproduct-div">
                <div className="container">
                    <Row>
                        <Col lg={3}>
                            <Form.Select aria-label="Catalog">
                                {AllProduct.map((item, index) => (
                                    <option key={index}>{item.category}</option>

                                ))}
                            </Form.Select>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default AllProducts

