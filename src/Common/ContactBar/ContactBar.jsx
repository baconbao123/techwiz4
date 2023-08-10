import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactBar.scss";
import "aos/dist/aos.css";
import AOS from "aos";
function ContactBar() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [social, setSocial] = useState();
  const soccial = [
    { icon: "3.png", content: "Facebook", link: "" },
    { icon: "1.png", content: "Address", link: "" },
    { icon: "2.png", content: "  012345678 ", link: "" },
    { icon: "4.png", content: "Feedback ", link: "" },
  ];
  return (
    <>
      <div className="contact-bar d-none d-lg-flex d-md-flex" data-aos="fade-right">
        <ul>
          {soccial.map((item, index) => (
            <Link to={item.content} key={index} className="link ">
              {" "}
              <li className="">
                <img
                  src={require(`../../assets/Layout_img/${item.icon}`)}
                  alt="icon"
                  className="icon"
                />
                <span className="text-left">{item.content}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
        <ul className="contact-bar-mb d-flex d-lg-none d-md-none"  style={{listStyle:'none'}}>
          {soccial.map((item, index) => (
            <Link to={item.content} key={index} className="link ">
              {" "}
              <li className="">
                <img
                  src={require(`../../assets/Layout_img/${item.icon}`)}
                  alt="icon"
                  className="icon"
                />
              </li>
            </Link>
          ))}
        </ul>
     
    </>
  );
}

export default ContactBar;