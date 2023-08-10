import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Baner.scss";
function Banner() {
  const items = [
    {
      title: "Growing Beautiful Plants at Home",
      subTitle:
        "Create a green sanctuary with amazing plants, so that every day you can breathe in fresh air and enjoy inner peace and  tranquility.",
      img: "image_6-rv.png",
    },
    {
      title: "Growing Beautiful Plants at Home",
      subTitle:
        "Create a green sanctuary with amazing plants, so that every day you can breathe in fresh air and enjoy inner peace and  tranquility.",
      img: "image-7.png",
    },
    {
      title: "Growing Beautiful Plants at Home",
      subTitle:
        "Create a green sanctuary with amazing plants, so that every day you can breathe in fresh air and enjoy inner peace and  tranquility.",
      img: "img-tool.png",
    },
  ];
  return (
    <div className="container">
      <div className="row">
        <Carousel data-bs-theme="dark">
          {items.map((item, index) => (
            <Carousel.Item>
              <div className="row banner-warrper">
                <div className="col-lg-6 row content-left">
                  <div className="col-lg-10 banner-text">
                    <h2>{item.title}</h2>
                    <p>{item.subTitle}</p>
                    <Link>
                      <button className="btn btn-primary mt-4">Shop Now</button>
                    </Link>
                  </div>
                  <div className="col-lg-2 banner-img-slide">
                    <img
                      srcSet={require(`../../../assets/Layout_img/banner-img.png`)}
                      alt=""
                      className=" img-left d-none d-lg-block "
                    />
                  </div>
                </div>

                <div className="col-lg-5 img-banner">
                  <img
                    src={require(`../../../assets/Layout_img/${item.img}`)}
                    alt=""
                    className="banner-right-img"
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;
