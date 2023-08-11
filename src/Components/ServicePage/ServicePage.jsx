import React ,{useEffect} from "react";
import "./ServicePage.scss";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import AOS from "aos";

function ServicePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const imgDV1 = [
    { img: "dv1.jpg" },
    { img: "dv2.jpg" },
    { img: "dv3.jpg" },
    { img: "dv4.jpg" },
  ];
  const imgDV2 = [{ img: "qt1.jpg" }, { img: "qt2.jpg" }, { img: "qt3.jpg" }];
  return (
    <>
      <div className="service-main container">
        <section className="workshop row">
          <div className="wsh-content col-lg-6 col-md-6 col-sm-12" data-aos='fade-up'>
            <p className="mb-4">Team Buding</p>
            <h3>TERRARIUM WORKSHOP</h3>
            <span className="d-block">
              Are you looking for nature-based activities to enhance your
              experience or to reconnect with yourself after the hustle and
              bustle of daily life? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Necessitatibus quibusdam atque, libero nihil
              magni odio corporis voluptatibus totam reprehenderit optio
              doloribus velit sunt soluta dolor cumque. Sunt consectetur odit
              veniam! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus quibusdam atque, libero nihil magni odio corporis
              voluptatibus totam reprehenderit optio doloribus velit sunt soluta
              dolor cumque. Sunt consectetur odit veniam!
            </span>
            <div>
              <Link to="/service/1">
                <button className="btn btn-more">Explore</button>
              </Link>
            </div>
          </div>
          <div className="wsh-silde col-lg-6 col-md-6 col-sm-12">
            <Carousel className="slide-wsh" fade>
              {imgDV1.map((item, idx) => (
                <Carousel.Item className="item-slide" interval={1500} key={idx}>
                  <img
                    src={require(`./imgService/${item.img}`)}
                    className="img-slide w-100"
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </section>
      </div>
      <div className="bg-gift">
        <div className="container">
          <section className=" container workshop row gift-service" data-aos='fade-up'>
            <div className="wsh-silde col-lg-6 col-md-6 col-sm-12">
              <Carousel className="slide-wsh" fade>
                {imgDV2.map((item, idx) => (
                  <Carousel.Item
                    className="item-slide"
                    interval={2000}
                    key={idx}
                  >
                    <img
                      src={require(`./imgService/${item.img}`)}
                      className="img-slide w-100"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="wsh-content col-lg-6 col-md-6 col-sm-12">
              <p className="mb-4">Customer</p>
              <h3>GREEN GIFTS </h3>
              <span className="d-block">
                Are you looking for nature-based activities to enhance your
                experience or to reconnect with yourself after the hustle and
                bustle of daily life? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Necessitatibus quibusdam atque, libero nihil
                magni odio corporis voluptatibus totam reprehenderit optio
                doloribus velit sunt soluta dolor cumque. Sunt consectetur odit
                veniam! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Necessitatibus quibusdam atque, libero nihil magni odio
                corporis voluptatibus totam reprehenderit optio doloribus velit
                sunt soluta dolor cumque. Sunt consectetur odit veniam!
              </span>
              <div>
                <Link to="/service/2">
                  <button className="btn btn-more ">Explore</button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="bg-decor mb-5">
        <div className="container">
          <section className=" container workshop row gift-service">
            <div className="wsh-content col-lg-6 col-md-6 col-sm-12" data-aos='fade-up'>
              <p className="mb-4">Decord</p>
              <h3> GREEN DERCORATION </h3>
              <span className="d-block">
                Are you looking for nature-based activities to enhance your
                experience or to reconnect with yourself after the hustle and
                bustle of daily life? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Necessitatibus quibusdam atque, libero nihil
                magni odio corporis voluptatibus totam reprehenderit optio
                doloribus velit sunt soluta dolor cumque. Sunt consectetur odit
                veniam! Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Necessitatibus quibusdam atque, libero nihil magni odio
                corporis voluptatibus totam reprehenderit optio doloribus velit
                sunt soluta dolor cumque. Sunt consectetur odit veniam!
              </span>
              <div>
                <Link to="/service/3">
                  <button className="btn btn-more btn-more">Explore</button>
                </Link>
              </div>
            </div>
            <div className="wsh-silde col-lg-6 col-md-6 col-sm-12">
              <Carousel className="slide-wsh" fade>
                {imgDV2.map((item, idx) => (
                  <Carousel.Item
                    className="item-slide"
                    interval={2000}
                    key={idx}
                  >
                    <img
                      src={require(`./imgService/${item.img}`)}
                      className="img-slide w-100"
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ServicePage;