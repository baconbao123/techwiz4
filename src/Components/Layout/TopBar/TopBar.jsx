import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './TopBar.scss'
import logo from '../../../assets/Layout_img/Logo_header.png'
import { TopNav } from '../../../Data/TopNav';
import { BsChevronDown } from "react-icons/bs";
import logoMb from '../../../assets/Layout_img/logo-mb.png'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser, AiOutlineMenuUnfold, } from "react-icons/ai";
import ItemTopBar from './ItemTopBar';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import BottomBar from './BottomBar';
import "aos/dist/aos.css";
import AOS from "aos";
import Login from '../../Authenticate/Login';
import { Toast } from 'primereact/toast';
export default function TopBar() {
  
  const nav = TopNav;
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchMb, setShowSearchMb] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu1, setShowMenu1] = useState(false);
  const [listShow, setListShow] = useState([])
  const [isLogin,setIslogin]=useState(false)
  const [showLogin,setShowLogin]=useState(false);
  const InputRef = useRef();
  const InputRefMb = useRef();
  const toast = useRef(null);
  const showSuccess = () => {
      toast.current.show({severity:'success', summary: ' Sign in Success', detail:'Enjoy your day', life: 1000});
  }
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (InputRef.current && !InputRef.current.contains(e.target)) {
        setShowSearch(false)
      }
    }
   
    document.addEventListener('click', handleClickOutSide);
   
    return () => {
      document.removeEventListener('click', handleClickOutSide)
    
    }

  }, [])
  useEffect(() => {
     const handleClickOutSideMb = (e) => {
      if (InputRefMb.current && !InputRefMb.current.contains(e.target)) {
        setShowSearchMb(false)
      }
    }
    
    document.addEventListener('click', handleClickOutSideMb);
    return () => {
      document.removeEventListener('click', handleClickOutSideMb)
    }

  }, [])
  const handleSetShow = (item) => {
    setListShow([...listShow, item]);
    setShowMenu1(true)
    console.log(listShow);
  }

  return (
    <>
      <Row className='m-0 p-0'>
      <Toast ref={toast} />
        <section className='top-bar  top-bar-md p-0 m-0'>
          <Container>

            <Row>

              <Col md={3} className='container-logo'>

                <img src={logo} className='logo-header' />
              </Col>
              <Col md={7} className='d-flex justify-content-around align-items-center fw-bold fs-6'>
                {nav.map((item, index) => (
                  <section className='item'>
                    <Link to={item.link}>
                      <section id={item.id} className='item-nav d-inline-flex'>

                        {item.name}
                        {item.child && item.child.length ? (<BsChevronDown className='fs-5 ms-1 mt-1' />) : ''}
                        {item.child && item.child.length > 0 ? (
                          <section className='child1' id={index} >

                            {item.child.map((childItem, index) => (
                              <section className='container-child'    >
                                <Link to={childItem.linkChild}>
                                  <div id={childItem.id} className='item-child' data-aos='fade'>

                                    {childItem.nameChild1}
                                  </div>
                                </Link>
                                {childItem.child && childItem.child.length > 0 ? (
                                  <section className='item-child2'>
                                    {childItem.child.map((itemChild2) => (
                                      <Link to={itemChild2.link}>
                                        <div className='item-child3'>
                                          {itemChild2.nameChild2}
                                        </div>
                                      </Link>
                                    ))}
                                  </section>
                                ) : ''}
                              </section>
                            ))}
                          </section>
                        ) : ''}

                      </section >
                    </Link>
                  </section>
                ))}
              </Col>
              <Col lg={2} className='d-flex align-items-center  fs-3 justify-content-around'>
                <section className='item-search' ref={InputRef}>

                  <AiOutlineSearch className='item-icon' onClick={() => setShowSearch(true)} />
                  <Form.Control placeholder='Search' className={`${showSearch ? '' : 'd-none'} search-input`}>

                  </Form.Control>
                </section>
                <AiOutlineHeart className='item-icon' />
                <AiOutlineShoppingCart className='item-icon' />
              <Link to={`${isLogin?"/setting":''}`}>
              <AiOutlineUser className='item-icon'  onClick={()=> setShowLogin(true)} />
              </Link>
              </Col>
            </Row>
          </Container>
        </section>


        <section className='top-bar-sm p-0' >
          <section className='p-0 m-0 container-wrapper'>
            <Row className={`${showMenu === true ? 'd-flex' : 'd-none'} menu-top p-0 m-0`}>
              <Col className='menu-content p-0 ' xs={7} sm={5} md={5}>
                <img src={logo} alt="" className='logo-menu' />
            
                <section>
                  {nav.map((item) => (
                    <ItemTopBar item={item} />
                  ))}
                </section>

              </Col>
              <Col className='layout p-0' md={7} sm={7} xs={5} onClick={() => setShowMenu(false)}>


              </Col>
            </Row>
            <Row className='m-0'>
              <Col className='container-header p-0 m-0'>
                <section className='d-inline-block fs-1 show-menu' onClick={() => setShowMenu(true)}>

                  <AiOutlineMenuUnfold />

                </section>
                
             
                <InputGroup className={`${showMenu?'d-none':'input-search'}`}>
                <InputGroup.Text><AiOutlineSearch/></InputGroup.Text>
                <Form.Control placeholder='Search'></Form.Control>
                </InputGroup>
               <div className='d-flex fs-2 function'>
                <div  ref={InputRefMb} className='d-flex'>
                  
              <AiOutlineSearch onClick={()=>setShowSearchMb(true)} className='icon-search'/>
               <Form.Control  placeholder='Search' className={`${showSearchMb ? '' : 'd-none'} search-input`}/>
           
                </div>
               <AiOutlineHeart/>
               <AiOutlineShoppingCart/>
               <AiOutlineUser />
               </div>
              </Col>
              
            </Row>
          </section>
        </section>
        <Login show={showLogin} setShow={setShowLogin} showSuccess={showSuccess} />
        <BottomBar />
      </Row>
    </>
  )
}
