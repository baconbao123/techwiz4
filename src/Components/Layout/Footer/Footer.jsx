import React from "react";
import { Link, useLocation,useNavigate } from 'react-router-dom';
import './Footer.scss'

function Footer() {
  return (

    <footer className="footer container d-none d-lg-block d-md-block">
        <section className='ft-content row'>
            <div className="col-lg-3 col-md-4 ft-content-child-1" >
                <img src={require(`../../../assets/Layout_img/Logo_header.png`)} alt="logo" className="d-none d-lg-block d-md-block img-md"/>
                
                <p className="sub-logo d-none d-lg-block d-md-block img-md">Create a green sanctuary with amazing plants, so that every day you can breathe in fresh air and enjoy inner peace and tranquility.</p>
            </div>
            <div className="col-lg-9 col-md-8 row ft-content-child-2">
                <div className="col-lg-3 col-md-3 ft-content-child-3">
                    <ul>
                        <li className="tilte-content">Shop</li>
                        <li><Link>Plants</Link></li>
                        <li><Link>Tools</Link></li>
                        <li><Link>Fertilize</Link></li>         
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 ft-content-child-3">
                    <ul>
                        <li className="tilte-content">Servive</li>
                        <li><Link>Terrarium workshop</Link></li>
                        <li><Link>Green Gifts</Link></li>
                        <li><Link>Green dercoration</Link></li>         
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 ft-content-child-3">
                    <ul>
                        <li className="tilte-content">Resources</li>
                        <li><Link>Blog</Link></li>        
                    </ul>
                </div>
                <div className="col-lg-3 col-md-3 ft-content-child-3">
                    <ul>
                        <li className="tilte-content">Customer support policy</li>
                        <li><Link>Terms</Link></li>        
                        <li><Link>Privacy</Link></li>        
                    </ul>
                </div>
              
            </div>
        </section>
        <section className="row ">
            <div className="col-lg-12 col-md-12 col-sm-12 ft-bottom">
                <span className="" style={{color:'gray'}}>©2023 PlantPalece. All rights reserved.</span>
            </div>
        </section>
    </footer>
  );
}

export default Footer;
