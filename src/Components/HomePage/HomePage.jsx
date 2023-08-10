import React from "react";
import Banner from "../HomePage/Banner/Banner";
import Carousel from "react-bootstrap/Carousel";
import Statis from "./Statis/Statis";
import CategoryItem from "./CategoryItem/CategoryItem";
import NewProduct from "./NewProduct/NewProduct";

import SellerProduct from "./NewProduct copy/SellerProduct";
import Review from "./Review/Review";
import "./HomePage.scss";
import "./CarePlant/CarePlant";
import CarePlant from "./CarePlant/CarePlant";
import Service from "./Service/Service";
function HomePage() {
  return (
    <div className="container-fuild home-page-warper">
      <Banner />
      <Statis />
      <CategoryItem/>
      <NewProduct/>
      <CarePlant />
      <SellerProduct/>
      <Service />
      <Review/>
    </div>
  );
}

export default HomePage;
