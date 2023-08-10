import React, { useEffect } from "react";
import "./CatergoryItem.scss";
import { Link } from "react-router-dom";
function CategoryItem() {
  const itemCategorys =  [
    {
      title: "Plants",
      subtitle:
        "The Nobel Prize in Literature is awarded by the Swedish Academy, Stockholm, Sweden.",
      img: "plant.png",
    },
    {
      title: "Tools",
      subtitle:
        "The Nobel Prize in Chemistry is awarded by the Royal Swedish Academy of Sciences, Stockholm, Sweden.",
      img: "tool.png",
    },
    {
      title: "Fertilize",

      img: "phan.png",
    },
  ];
  return (
    <div className="row mb-3 container container-category-item m-auto" style={{marginTop:'35px !important'}}>
      {itemCategorys.map((item, index) => (
        <div className="col-md-4 col-lg-4" key={index}>
          <Link
            className="overlay-img"
          >
            <img
              src={require(`../../../assets/Layout_img/${item.img}`)}
              alt={item.title}
              
            />
            <div className="overlay"></div>
            <div className="des text-center text-light">
              <h1 className="title">{item.title}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryItem;
