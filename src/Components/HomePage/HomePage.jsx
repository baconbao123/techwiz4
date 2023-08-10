import React from "react";
import Banner from "../HomePage/Banner/Banner";
import Carousel from "react-bootstrap/Carousel";
import "./HomePage.scss";
import './CarePlant/CarePlant'
import CarePlant from "./CarePlant/CarePlant";
import  Service from "./Service/Service"
function HomePage() {
  return (
    <div className="container-fuild home-page-warper" >
      <Banner/>
      <CarePlant/>
      <Service />
    </div>
  );
}

export default HomePage;
