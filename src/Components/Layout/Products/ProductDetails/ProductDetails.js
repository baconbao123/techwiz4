import React, { useState } from "react";
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import { Rating } from "primereact/rating";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { CardProduct } from "./CardProduct/CardProduct";
import { SlideCardImg } from "./SlideImg/SlideCardImg";

import './ProductDetails.scss';
import { BsCartCheck } from 'react-icons/bs'
import imghowtoplant from '../../../../assets/image/techwiz.png'
import avatar from '../../../../assets/image/avtar5.jpg'



const ProductDetail = () => {
    const [countProduct, setCountProduct] = useState(0)
    const [ratingOrtherUser, setRatingOrtherUser] = useState(null);
    const [ratingUser, setRatingUser] = useState(null);
    const [commentValue, setCommentValue] = useState('');
    const [nameComment, setNameComment] = useState('')
    const [checked, setChecked] = useState(false);

    const handleClickAddProduct = () => {
        setCountProduct(countProduct + 1)
    }

    const handleClickSubProduct = () => {
        setCountProduct(countProduct - 1)
    }

    return (
        <div className='products-details-master'>
            <Container>
                <div className='products-details-div'>
                    <Row>
                        <Col lg={12} md={5} sm={12} xs={12}>
                            <div className="breadcrum-posi">
                                Home/
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={5} md={5} sm={12} xs={12}>
                            <div className="name-plant">Butterfly</div>
                            <div className="img-div">
                               <AliceCarousel 
                                mouseTracking 
                                items={SlideCardImg} 
                                responsive={{
                                    0: { items: 1 },
                                    768: { items: 1 },
                                  }}
                            />
                            </div>

                        </Col>
                        <Col lg={1} md={1} className="d-none d-sm-none d-md-block d-lg-block"></Col>
                        <Col lg={6} md={6} sm={12} xs={12}>
                            <div className="description-plan">
                                <strong className="label-smalltext">Size: </strong> <span className="smalltext-des">18cm-20cm</span> <br /><br />
                                <strong className="label-smalltext">Origin: </strong> <span className="smalltext-des">VietNam</span> <br /><br />
                                <strong className="label-smalltext">Planting: </strong>
                                <span className="smalltext-des">8/10</span> <br /><br />
                                <strong className="label-smalltext">Light: </strong>
                                <span className="smalltext-des">3/5</span> <br /><br />
                                <strong className="label-smalltext">Butterfly hedging: </strong >
                                <span className="smalltext-des">Thunbergii Atropurpurea are compact and slow growing, so ideal for low but superb prickly/security hedges</span> <br /><br />
                                <strong className="label-smalltext">Catergory: </strong>
                                <span className="smalltext-des">Indoor</span> <br /><br />
                                <strong className="label-smalltext">Price: </strong>
                                <span className="smalltext-des">$65.0 </span> <br /><br />
                                <div className="add-product-div">
                                    
                                    <div>
                                        <button className="button-count" onClick={handleClickSubProduct}>-</button>
                                        <InputText value={countProduct} className="input-count"/>
                                        <button className="button-count" onClick={handleClickAddProduct}>+</button>
                                    </div>
                                    <div>
                                        <Button className="buynow">Buy Now</Button>{' '}

                                    </div>
                                    <div>
                                        <Button className="icon-buynow">
                                            <BsCartCheck />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <span className='label-howto'>How to plan</span>
                    <div className="howtoplant-div">
                        <Row>
                            <Col lg={5} md={5} sm={12} xs={12}>
                                <img src={imghowtoplant} alt="how to plant" className="img-howtoplant" style={{width: '100%', height:'100%', objectFit: 'cover', borderRadius: '68px'}}></img>
                            </Col>
                            <Col lg={1} md={1} className="d-none d-sm-none d-md-block d-lg-block"></Col>
                            <Col lg={5} md={5} sm={12} xs={12}>
                                <div className="description-howtoplant">
                                    <strong className="label-smalltext">Eviroment: </strong> <span className="smalltext-des">easily grown on any soil  </span> <br /><br />
                                    <strong className="label-smalltext">Water: </strong> <span className="smalltext-des">Two time a day in the morning and afternoon</span> <br /><br />
                                    <strong className="label-smalltext">Tree pruning: </strong>
                                    <span className="smalltext-des">Every time we take care of the tree, we should also observe the overall view and trim the yellow leaves</span> <br /><br />
                                    <strong className="label-smalltext">Fertilize: </strong>
                                    <span className="smalltext-des">Use with water-soluble fertilizers, follow the mixing instructions
                                    </span><br /><br />
                                    <strong className="label-smalltext">Sick tree: </strong >
                                    <span className="smalltext-des">Follow the instructions</span>
                                </div>
                            </Col>
                        </Row>
                        <span className="label-review" style={{ marginBottom: '40px' }}>Review</span>
                        <Row style={{ padding: '0px 45px' }}>
                            <div className="review-div">
                                <Col lg={1} md={1} sm={1} xs={1}>
                                    <img src={avatar} alt="avatar" className="avatar-review" />
                                </Col>
                                <Col lg={11} md={11} sm={11} xs={11}>
                                    <Rating value={ratingOrtherUser} onChange={(e) => setRatingOrtherUser(e.value)} cancel={false} className="rating-other-user"/>
                                    <div className="rating-other-user-des">
                                        <div className="content-review">Beautiful tree</div>
                                        <div className="author-review" >Phuong Anh</div>
                                        <div className="date-review" >Tue 2023/07/21</div>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </div>
                    <Row>
                        <div className="your-review-div">
                            <Row style={{ padding: '0px 40px' }}>
                                <Col lg={4} md={4} sm={4} xs={4}>
                                    <div className="d-flex">
                                        <span className="your-review-label" >Your review</span>
                                        <span>
                                            <Rating value={ratingUser} onChange={(e) => setRatingUser(e.value)} cancel={false} style={{ paddingLeft: '20px' }} />
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ padding: '0px 40px' }}>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="your-comment-label">Your Comment</div>
                                    <div style={{ marginTop: '10px' }}>
                                        <InputTextarea autoResize value={commentValue} onChange={(e) => setCommentValue(e.target.value)} style={{ width: '100%', borderRadius: '40px' }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ padding: '0px 40px' }}>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="your-name-lable">Your name</div>
                                    <div>
                                        <InputText value={nameComment} onChange={(e) => setNameComment(e.target.value)} style={{ width: '100%', borderRadius: '40px' }} />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="your-name-lable">Your Email</div>
                                    <div>
                                        <InputText value={nameComment} onChange={(e) => setNameComment(e.target.value)} style={{ width: '100%', borderRadius: '40px' }} />
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ padding: '0px 40px', marginTop: '10px' }}>
                                <Col>
                                    <div className="d-flex align-items-center">
                                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked} />
                                        <label htmlFor="ingredient4" className="ml-2" style={{ fontSize: '20px', marginLeft: '10px' }}>Save my information for the next comment</label>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ padding: '0px 40px', marginTop: '10px' }}>
                                <Col lg={3} md={3} sm={3} xs={3}>
                                    <Button variant="primary">Send</Button>
                                </Col>
                            </Row>

                        </div>
                    </Row>
                    <span className="label-similar">Similar Product</span>
                    <Row style={{ marginBottom: '40px' }}>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <CardProduct />
                        </Col>
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <CardProduct />
                        </Col> 
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <CardProduct />
                        </Col> 
                        <Col lg={3} md={3} sm={6} xs={12}>
                            <CardProduct />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetail;