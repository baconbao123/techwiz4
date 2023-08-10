import React,{useEffect, useState,useRef} from 'react';
import { Container, Row,Col,Form } from 'react-bootstrap';
import './TopBar.scss'
import logo from '../../../assets/Layout_img/Logo_header.png'
import { TopNav } from '../../../Data/TopNav';
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart,AiOutlineUser,AiOutlineMenuUnfold,} from "react-icons/ai";

import {Link} from 'react-router-dom';

export default function ItemTopBar2({child1}) {
    const [showMenu2,setShowMenu2]=useState(false)
  return (
    <section key={child1.id}  >
    <Link to={child1.linkChild} onClick={()=>setShowMenu2(!showMenu2)} >
      <div className='item-menu item-menu-child'>
        {child1.nameChild1}
        {child1.child&&child1.child.length>0?(<BsChevronDown className='ms-1'/>):''}

        
      </div>
    </Link>
    {child1.child&&child1.child.length>0? (
       <section className={`container-child2 ${showMenu2?'d-block':'d-none'}`}>
               {child1.child.map((child2)=> (
                   <section>
                       <Link to={child2.link}>
                           <div className='item-menu-child2 item-menu-child'>
                               {child2.nameChild2}
                           </div>
                       </Link>
                   </section>
               ))}
       </section>  
    ):''}
   </section>
  )
}