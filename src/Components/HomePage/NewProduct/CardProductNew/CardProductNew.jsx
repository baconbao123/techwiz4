
import React from 'react'
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa'
import "./CardProductNew.scss"
function CardProductNew({item}) {
  return (
    <div>
          <Link to='/all'>
            <Card className="card-new-product" style={{backgroundColor:'#fff !important'}} id='card-mb'>
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
                <Card.Body className='card-body-mb'>
                    <div className="card-price-shopping-product">
                        <span className="card-price-product">${item.price}</span>
                        <span className="card-shopping-product">Add to card</span>
                    </div>
                </Card.Body>
            </Card>
        </Link>
    </div>
  )
}

export default CardProductNew