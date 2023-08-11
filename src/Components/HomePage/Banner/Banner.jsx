import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Baner.scss";
function Banner() {
  const items = [
    {
      title: "Bringing Nature Home",
      subTitle:
        "Create a green sanctuary with amazing plants, so that every day you can breathe in fresh air and enjoy inner peace and  tranquility.",
      img: "banner1.png",
      link:'/shop/all/tree/bonsai'
    },
    {
      title: "Transform Your Space with Plants",
      subTitle:
        "Create a green sanctuary with amazing plants, so that every day you can breathe in fresh air and enjoy inner peace and  tranquility.",
      img: "banner2.png",
      link:'/shop/tool'
    },
    {
      title: "Unlock the Power of Plants",
      subTitle:
        "Create a green sanctuary with amazing plants, so that every day you can breathe in fresh air and enjoy inner peace and  tranquility.",
      img: "banner3.png",
      link:'/shop/fertilizer'
    },
  ];
  return (
    <div className="container  d-lg-blog d-md-block">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <Carousel data-bs-theme="dark"  >
            {items.map((item, index) => (
              <Carousel.Item key={index} interval={5000}>
                <div className="row banner-warrper">
                  <div className="col-lg-6 col-md-6 content-left">
                    <div className="row">
                      <div className="col-lg-10 col-md-12 banner-text">
                        <h2>{item.title}</h2>
                        <p>{item.subTitle}</p>
                        <Link to ={item.link}>
                          <button className="btn btn-primary mt-4">
                            Shop Now
                          </button>
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
                  </div>

                  <div className="col-lg-5 col-md-6 img-banner">
                    <img
                      src={require(`../../../assets/Layout_img/${item.img}`)}
                      alt=""
                      className="banner-right-img w-100"
                    />
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Banner;
