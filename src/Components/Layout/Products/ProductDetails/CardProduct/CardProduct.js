import React from "react";
import { Card } from "react-bootstrap";
import { FaRegHeart } from 'react-icons/fa'
import './CardProduct.scss'

export const CardProduct = ({item}) => {
    return (
        <Card className="card-product">
            <Card.Title className="card-title-product">
            {item.tag ? <span className="span-best-seller">{item.tag}</span> : null}
                <div className="card-name-catergory-product">
                    <span className="card-name-product">{item.name}</span>
                    <span className="card-catergory-product">Catergory: {item.category}</span>
                </div>
                <span className="icon-wishlist">
                    <FaRegHeart />
                </span>
            </Card.Title>
            <Card.Img className='card-img-1' src={item.img[0].img1} />
            <Card.Body>
                <div className="card-price-shopping-product">
                    <span className="card-price-product">${item.price}</span>
                    <span className="card-shopping-product">Add to card</span>
                </div>
            </Card.Body>
        </Card>

    )
}
