import React from "react";
import "./SellerProducts.scss";
import { Col } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import { SlideCardImg } from "../../Layout/Products/ProductDetails/SlideImg/SlideCardImg";
import {FaAngleDoubleRight} from 'react-icons/fa'
import { Link } from "react-router-dom";
function SellerProduct() {
  return (
    <section className="seller-product">
      <div className="container">
        <div className="title-product">
          <div className="title-name">Seller Products</div>
          <div className="btn-category">
            <button className="btn-choose" style={{backgroundColor:'transparent'}}>Choose:</button>
            <Link to="/d">
              <button className="btn btn-c btn-color-1">Plants</button>
            </Link>
            <Link>
              {" "}
              <button className="btn  btn-c btn-color-2">Tools</button>
            </Link>
            <Link>
              <button className="btn btn-c  btn-color-3">Fertilize</button>
            </Link>
          </div>
        </div>
        <div>
          <div className="img-div">
            <AliceCarousel
              mouseTracking
              items={SlideCardImg}
              responsive={{
                0: { items: 4 },
                768: { items: 3 },
                1440: { items: 4 },
              }}
            />
          </div>
        </div>
        <div className="btn-conteiner">
          <Link to="/all-product" className="btn-content btn text-light">
            <span className="btn-title">All Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SellerProduct;
