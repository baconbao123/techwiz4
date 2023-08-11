import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import { FaRegHeart } from 'react-icons/fa'
import './CardProduct.scss'

export const CardProduct = ({items}) => {
    return (
       
            <Card className="card-product">
                <Card.Title className="card-title-product">
                {items.tag ? <span className="span-best-seller">{items.tag}</span> : null}
                    <div className="card-name-catergory-product">
                        <span className="card-name-product">{items.name}</span>
                        <span className="card-catergory-product">Catergory: {items.category}</span>
                    </div>
                    <span className="icon-wishlist">
                        <FaRegHeart />
                    </span>
                </Card.Title>
                <Card.Img className='card-img-1' src={items.img[0].img1} />
                <Card.Body>
                    <div className="card-price-shopping-product">
                        <span className="card-price-product">${items.price}</span>
                        <span className="card-shopping-product">Add to card</span>
                    </div>
                </Card.Body>
            </Card>
        
    )
}
