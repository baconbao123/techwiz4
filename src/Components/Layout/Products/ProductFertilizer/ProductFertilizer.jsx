import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Container, Button, Card } from 'react-bootstrap';
import { Rating } from "primereact/rating";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { CardProduct } from "../ProductDetails/CardProduct/CardProduct";
import SlideCardImg from "../ProductDetails/SlideImg/SlideCardImg"


import './ProductFertilizer.scss';
import { BsCartCheck } from 'react-icons/bs'
import imghowtoplant from '../../../../assets/image/techwiz.png'
import avatar from '../../../../assets/image/avtar5.jpg'
import { FertilizeData } from "../../../../Data/AllProduct";

const productList = FertilizeData;

const ProductFertilizer = () => {
    const { id } = useParams();
    const product = productList.find((item) => item.id === Number(id));

    const [showCardList, setShowCardList] = useState(4)

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
                            <div className="name-plant">{product.name}</div>
                            <div className="img-div">
                                <SlideCardImg
                                    mouseTracking
                                    items={product.img}
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
                                <strong className="label-smalltext">Advantage: </strong> <span className="smalltext-des">{product.advantage}</span> <br /><br />
                                <strong className="label-smalltext">Usermanual: </strong> <span className="smalltext-des">{product.Usermanual}</span> <br /><br />
                                <strong className="label-smalltext">Price: </strong>
                                <span className="smalltext-des">${product.price}</span> <br /><br />
                                <div className="add-product-div">

                                    <div>
                                        <button className="button-count" onClick={handleClickSubProduct}>-</button>
                                        <InputText value={countProduct} className="input-count" />
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
                    <span className="label-review">Review</span>
                    <Row style={{ padding: '0px 45px' }}>
                        <div className="review-div">
                            <Col lg={1} md={1} sm={2} xs={2}>
                                <img src={avatar} alt="avatar" className="avatar-review" />
                            </Col>
                            <Col lg={11} md={11} sm={10} xs={10}>
                                <Rating value={ratingOrtherUser} onChange={(e) => setRatingOrtherUser(e.value)} cancel={false} className="rating-other-user" />
                                <div className="rating-other-user-des">
                                    <div className="content-review">Good!</div>
                                    <div className="author-review" >Phuong Anh</div>
                                    <div className="date-review" >Tue 2023/07/21</div>
                                </div>
                            </Col>
                        </div>
                    </Row>
                    <Row>
                        <div className="your-review-div">
                            <Row >
                                <Col lg={4} md={4} sm={4} xs={4}>
                                    <div className="d-flex">
                                        <span className="your-review-label" >Your review</span>
                                        <span>
                                            <Rating value={ratingUser} onChange={(e) => setRatingUser(e.value)} cancel={false} style={{ paddingLeft: '20px' }} />
                                        </span>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="your-comment-label">Your Comment</div>
                                    <div style={{ marginTop: '10px' }}>
                                        <InputTextarea autoResize value={commentValue} onChange={(e) => setCommentValue(e.target.value)}
                                            className="textarea-comment" />
                                    </div>
                                </Col>
                            </Row>
                            <Row >
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="your-name-lable">Your name</div>
                                    <div>
                                        <InputText value={nameComment} onChange={(e) => setNameComment(e.target.value)} className='input-comment' />
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="your-name-lable">Your Email</div>
                                    <div>
                                        <InputText value={nameComment} onChange={(e) => setNameComment(e.target.value)} className='input-comment' />
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '10px' }}>
                                <Col>
                                    <div className="d-flex align-items-center">
                                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked} />
                                        <label htmlFor="ingredient4" className="ml-2 rule-comment">Save my information for the next comment</label>
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '10px' }}>
                                <Col lg={3} md={6} sm={3} xs={3}>
                                    <Button variant="primary">Send</Button>
                                </Col>
                            </Row>

                        </div>
                    </Row>
                    <span className="label-similar">Similar Product</span>
                    <Row style={{ marginBottom: '40px' }}>
                        {productList.slice(0, showCardList).map((item) => (
                            <Col lg={3} md={6} sm={6} xs={12} className="mt-3">
                                <Link to={`/shop/all/fertilizer/${item.id}`}>
                                    <CardProduct items={item} />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
};


export default ProductFertilizer;