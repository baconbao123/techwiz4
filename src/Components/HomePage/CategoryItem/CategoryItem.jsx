import React, { useEffect } from "react";
import "./CatergoryItem.scss";
import { Link } from "react-router-dom";
function CategoryItem() {
  const itemCategorys = [
    {
      title: "Plants",
      subtitle: "",
      img: "plant.png",
      link: "/shop/all/tree/bonsai",
    },
    {
      title: "Tools",
      subtitle: "",
      img: "tool.png",
      link: "/shop/tool",
    },
    {
      title: "Fertilize",

      img: "phan.png",
      link: "/shop/fertilizer",
    },
  ];
  return (
    <div
      className="row mb-3 container container-category-item m-auto"
      style={{ marginTop: "35px !important" }}
    >
      {itemCategorys.map((item, index) => (
        <div className="col-md-4 col-lg-4" key={index}>
          <Link to={item.link} className="overlay-img">
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
