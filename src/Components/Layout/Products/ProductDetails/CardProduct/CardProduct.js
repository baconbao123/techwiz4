import React from "react";
import { Card } from "react-bootstrap";
import { FaRegHeart } from 'react-icons/fa'
import butterfly2 from '../../../../../assets/image/floweringshrubs/2.Butterfly_Bush.png';
import './CardProduct.scss'

export const CardProduct = ({props}) => {
    return (
        <Card className="card-product">
            <Card.Title className="card-title-product">
                <span className="span-best-seller">{prop.tag}</span>
                <div className="card-name-catergory-product">
                    <span className="card-name-product">Plan Flower</span>
                    <span className="card-catergory-product">Catergory: outdoor</span>
                </div>
                <span className="icon-wishlist">
                    <FaRegHeart />
                </span>
            </Card.Title>
            <Card.Img src={butterfly2} />
            <Card.Body>
                <div className="card-price-shopping-product">
                    <span className="card-price-product">$65.00</span>
                    <span className="card-shopping-product">Add to card</span>
                </div>
            </Card.Body>
        </Card>

    )
}
