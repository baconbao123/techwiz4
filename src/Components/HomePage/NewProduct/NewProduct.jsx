import React from "react";
import "./NewProducts.scss";
import { Col } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import { SlideCardImg } from "../../Layout/Products/ProductDetails/SlideImg/SlideCardImg";
import {FaAngleDoubleRight} from 'react-icons/fa'
import { Link } from "react-router-dom";
function NewProduct() {
  return (
    <section className="new-product">
      <div className="container">
        <div className="title-product row">
          <div className="title-name col-lg-6 col-md-6 col-sm-12">New Products</div>
          <div className="btn-category col-lg-6 col-md-6 col-sm-12">
            <button className="btn-choose">Choose:</button>
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

export default NewProduct;
