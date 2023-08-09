import React,{useEffect, useState,useRef} from 'react';
import { Container, Row,Col,Form } from 'react-bootstrap';
import './TopBar.scss'
import logo from '../../../assets/Layout_img/Logo_header.png'
import { TopNav } from '../../../Data/TopNav';
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineSearch,AiOutlineHeart,AiOutlineShoppingCart,AiOutlineUser,AiOutlineMenuUnfold,} from "react-icons/ai";
import {Link} from 'react-router-dom';
export default function TopBar() {
  const nav=TopNav;
  const  [showSearch,setShowSearch]=useState(false);
  const [showMenu,setShowMenu]=useState(false);
  const [showMenu1,setShowMenu1]=useState(false);
  const InputRef=useRef();
  useEffect(()=>{
    const handleClickOutSide=(e)=> {
      if(InputRef.current&&!InputRef.current.contains(e.target)) {
        setShowSearch(false)
      }
    }
    document.addEventListener('click',handleClickOutSide);
    return ()=> {
      document.removeEventListener('click',handleClickOutSide)
    }

  },[])
  return (
    <>
      <Row className='m-0 p-0'>
      <section className='top-bar  top-bar-md p-0 m-0'>
        <Container>

      <Row>

      <Col md={3} className='container-logo'>
      
      <img src={logo} className='logo-header' />
      </Col>
      <Col md={7} className='d-flex justify-content-around align-items-center fw-bold fs-6'>
        {nav.map((item,index)=> (
       <section className='item'>
         <Link to={item.link}>
          <section id={item.id} className='item-nav d-inline-flex'>
            
           {item.name}
             {item.child&&item.child.length?(<BsChevronDown className='fs-5 ms-1 mt-1'/>):''}
             {item.child&&item.child.length>0?(
          <section className='child1' id={index}>
          
            {item.child.map((childItem,index)=> (
              <section className='container-child'>
                <Link to={childItem.linkChild}>
              <div id={childItem.id} className='item-child'>
               
               {childItem.nameChild1}
               </div>
               </Link>
                {childItem.child&&childItem.child.length>0?(
                  <section className='item-child2'>
                    {childItem.child.map((itemChild2)=>(
                       <Link to={itemChild2.link}>  
                      <div className='item-child3'>
                     {itemChild2.nameChild2}
                      </div>
                      </Link>
                    ))}
                  </section>
                ):''}
               </section>
            ))}
          </section>
        ):''}
        
        </section >
        </Link>
       </section>
        ))}
      </Col>
      <Col lg={2} className='d-flex align-items-center  fs-3 justify-content-around'>
            <section className='item-search' ref={InputRef}>

            <AiOutlineSearch className='item-icon' onClick={()=>setShowSearch(true)}/>
            <Form.Control className={`${showSearch?'':'d-none'} search-input`}>

            </Form.Control>
            </section>
            <AiOutlineHeart className='item-icon'/>
            <AiOutlineShoppingCart className='item-icon'/>
            <AiOutlineUser className='item-icon' />
      </Col>
      </Row>
        </Container>
      </section>


      <section className='top-bar-sm p-0' >
        <section className='p-0 m-0 container-wrapper'>
          <Row className={`${showMenu===true?'d-flex':'d-none'} menu-top p-0 m-0`}>
              <Col className='menu-content p-0 '  xs={6} sm={5} md={5}>
              <img src={logo} alt="" className='logo-menu'/>

                      <section>
                        {nav.map((item)=> (
                         <section key={item.id}>
                         <Link to={item.link}>
                   
                         <div className='item-menu'>
                         {item.icon}
                          <span className='ms-2'> {item.name}</span>
                          {item.child&&item.child.length>0?(<BsChevronDown className='ms-1'/>):''}
                           </div>
                         </Link>
                         {item.child&&item.child.length>0?(
                          <section className={`container-child1 ${showMenu1?'d-flex':'d-none'}`}>
                            {item.child.map((child1)=>(
                             <section key={child1.id} >
                              <Link to={child1.linkChild}>
                                <div className='item-menu item-menu-child'>
                                  {child1.nameChild1}
                                  {child1.child&&child1.child.length>0?(<BsChevronDown className='ms-1'/>):''}
                                </div>
                              </Link>
                             </section>
                            ))}
                          </section>
                         ):''}
                        
                         </section>
                        ))}
                      </section>

              </Col>
              <Col className='layout p-0' md={7} sm={7} xs={6} onClick={()=>setShowMenu(false)}> 
                   
                      
              </Col>
          </Row>
          <Row className='m-0'>
          <Col className='container-header p-0 m-0'>
          <section className='d-inline-block fs-1 show-menu' onClick={()=>setShowMenu(true)}>
           <AiOutlineMenuUnfold/>
           </section>
           <img src={logo} alt="" className='logo-header'/>
          </Col>
          </Row>
        </section>
      </section>
      </Row>
    </>
  )
}
