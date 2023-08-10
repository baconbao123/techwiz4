import React from "react";
import { Card } from "react-bootstrap";
import { FaRegHeart } from 'react-icons/fa'
import butterfly2 from '../../../../../assets/image/floweringshrubs/2.Butterfly_Bush.png';
import './CardProduct.scss'

export const CardProduct = ({props}) => {
    return (
        <Card className="card-product">
            <Card.Title className="card-title-product">
                <span className="span-best-seller">{props.tag}</span>
                <div className="card-name-catergory-product">
                    <span className="card-name-product">{props.name}</span>
                    <span className="card-catergory-product">Catergory: {props.category}</span>
                </div>
                <span className="icon-wishlist">
                    <FaRegHeart />
                </span>
            </Card.Title>
            <Card.Img src={props.img} />
            <Card.Body>
                <div className="card-price-shopping-product">
                    <span className="card-price-product">${props.price}</span>
                    <span className="card-shopping-product">Add to card</span>
                </div>
            </Card.Body>
        </Card>

    )
}
