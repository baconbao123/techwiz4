import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from 'react-icons/fa'
import './CardProduct.scss'
import { BsPlusLg } from "react-icons/bs";
export const CardProduct = ({items,option}) => {
    console.log(option);
    const navigate=useNavigate()
    const handleClick=()=> {
        navigate(`/shop/all/${option+'/'+items.id}`)
    }
    return (
       
            <Card className="card-product" >
                <Card.Title className="card-title-product" onClick={()=>handleClick()}>
                {items.tag ? <span className="span-best-seller">{items.tag}</span> : null}
                    <div className="card-name-catergory-product">
                        <span className="card-name-product">{items.name}</span>
                        <span className="card-catergory-product">Catergory: {items.category}</span>
                    </div>
                    <span className="icon-wishlist">
                        <FaRegHeart />
                    </span>
                </Card.Title>
                <Card.Img className='card-img-1' src={items.img[0].img1}  onClick={()=>handleClick()} />
                <Card.Body>
                    <div className="card-price-shopping-product">
                    <span className="card-price-product">${items.price}</span>
                        <div className="  fui-button-shiny-2 card-shopping-product"> <BsPlusLg/> Add to card </div>
                    </div>
                </Card.Body>
            </Card>
    )
}
