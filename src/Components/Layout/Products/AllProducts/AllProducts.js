import React, { useState } from "react";
import { Row, Col, Button, Form, Dropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import bannerallpro from '../../../../assets/Layout_img/banner-allpro.png'
import './AllProducts.scss'
import { AllProduct } from "../../../../Data/AllProduct";
import { InputText } from "primereact/inputtext";
import { CardProduct } from "../ProductDetails/CardProduct/CardProduct";
import ProductDetail from "../ProductDetails/ProductDetails";

const productList = AllProduct
console.log(productList);


const AllProducts = () => {
    const [categoryName, setCategoryName] = useState('All Product')
    const [searchValue, setSearchValue] = useState('')
    const [currentDisplayProduct, setCurrentDisplayProduct] = useState(8)



    return (

        <div className="allproduct-master">
            <div className="banner-allproduct">
                <img src={bannerallpro} className="img-banner" />
                <span className="name-cataegory">{categoryName}</span>
            </div>
            <div className="allproduct-div">
                <div className="container">
                    <Row className="filter-div">
                        <Col lg={2}>
                            <Form.Select className="form-select-catalog" aria-label="Category">
                                <option checked>Category</option>
                                <option>Bonsai</option>
                                <option>Flowering Shrubs</option>
                                <option>Inddor</option>
                                <option>Outdoor</option>
                                <option>Succulents</option>
                            </Form.Select>
                        </Col>
                        <Col lg={2}>
                            <Form.Select className="form-select-catalog">
                                <option checked>Price</option>
                                <option>20</option>
                                <option>30</option>
                            </Form.Select>
                        </Col>
                        <Col lg={6}></Col>
                        <Col lg={2}>
                            <InputText value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="input-filter" />
                        </Col>
                    </Row>
                    <div className="plant-div">
                        <span className="label-catelogy">Plants</span>

                        <div className="card-of-cate">
                            <Row>
                                {productList.map((items, index) => (
                                    <Col lg={3} key={index} className="mt-4">
                                        <Link to='/shop/all/:id'>
                                            <CardProduct items={items}/>
                                        </Link>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts

