import React from "react";
import "./NewProducts.scss";
import { Row, Col } from "react-bootstrap";
import AliceCarousel from "react-alice-carousel";
import { SlideCardImg } from "../../Layout/Products/ProductDetails/SlideImg/SlideCardImg";
import { FaAngleDoubleRight } from "react-icons/fa";
import { CardProduct } from "../../Layout/Products/ProductDetails/CardProduct/CardProduct";
import { AllProduct } from "../../../Data/AllProduct";
import { Link } from "react-router-dom";
function NewProduct() {
  return (
    <section className="new-product">
      <div className="container">
        <div className="title-product row">
          <div className="title-name col-lg-6 col-md-6 col-sm-12">
            New Products
          </div>
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
        <div className="plant-div">
          <div className="card-of-cate">
            <Row>
              {AllProduct.map((item, index) =>
                item.tag === "new" ? (
                  <Col lg={3} md={4} key={index} className="mt-4">
                    <CardProduct items={item} />
                  </Col>
                ) : null
              )}
            </Row>
          </div>
        </div>
        <div className="btn-conteiner mt-4">
          <Link to="/all-product" className="btn-content btn text-light">
            <span className="btn-title">All Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewProduct;
