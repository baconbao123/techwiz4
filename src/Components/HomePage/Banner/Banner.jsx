import React from "react";
import Carousel from "react-bootstrap/Carousel";

import "./Baner.scss";
function Banner() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="row banner-warrper">
          <div className="col-lg-6 row content-left">
            <div className="col-lg-10 banner-text">
              <h2 >Growing Beautiful Plants at Home</h2>
              <p>
                Create a green sanctuary with amazing plants, so that every day
                you can breathe in fresh air and enjoy inner peace and
                tranquility.
              </p>
              <button className="btn btn-primary">Shop Now</button>
            </div>
            <div className="col-lg-2 banner-img-slide">
              <img
                src={require(`../../../assets/Layout_img/banner-img.png`)}
                alt=""
                style={{}}
              />
            </div>
          </div>

          <div className="col-lg-6 img-banner">
            <img
              src={require(`../../../assets/Layout_img/image_6-rv.png`)}
              alt=""
              className="banner-right-img"
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
