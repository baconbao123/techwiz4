import React from "react";
import { Link, useLocation,useNavigate } from 'react-router-dom';
function Footer() {
  return (

    <footer className="footer container">
        <section className='ft-contenGt row'>
            <div className="col-lg-3" >
                <img src={require(`../../../assets/Layout_img/Logo_header.png`)} alt="logo"/>
                <p className="sub-logo">Create a green sanctuary with amazing plants, so that every day you can breathe in fresh air and enjoy inner peace and tranquility.</p>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <ul>
                        <li><Link>Product</Link></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
              
            </div>
        </section>
        <section className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 ft-bottom">
                
            </div>
        </section>
    </footer>
  );
}

export default Footer;
