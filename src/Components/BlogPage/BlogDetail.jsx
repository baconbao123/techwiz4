import React from 'react'
import './BlogDetail.scss'
import {Container,Row,Col} from 'react-bootstrap'
import blogDetail from '../../assets/Layout_img/BlogDetail.png'
import { BreadCrumb } from 'primereact/breadcrumb';
import { AiOutlineHome,AiOutlineSearch } from "react-icons/ai";
export default function BlogDetail({item}) {
  const items=[{label:'Blog',url:'/blog'},{label:item.name,url:`/blog/${item.id}`}];
  const home = { icon: <AiOutlineHome/>, url: '/' }
  return (
    <Container fluid className='blog-detail'>
      <Row>
    
    
    <img src={blogDetail} alt="" className='logo-baner'/>
   
      </Row>

      <Container className='mt-5 mb-5'>
      <BreadCrumb model={items} home={home} className='mt-3' />
        <Row className='mt-5 mb-5 text-center'>
          <div className='item-name mb-2 fs-1'>
            {item.name}
          </div>
          <div className='item-time text-center'>{item.time}</div>
        </Row>
        <Row className='content'>
          {item.content}
        </Row>
      </Container>
    </Container>
  )
}

