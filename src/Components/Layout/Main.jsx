import React from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import ScrollToTop from "../../Common/ScrollToTop";
import ContactBar from "../../Common/ContactBar/ContactBar";
import Home from "../HomePage/HomePage";
import { Container } from "react-bootstrap";
import {Routes,Route} from 'react-router-dom'
import {AllRoutes} from '../../Routes/AllRoutes'
import NotFound from "./NotFound";
import {blog} from "../../Data/Blog";
import BlogDetail from "../BlogPage/BlogDetail";
export default function Main() {
  const allRoutes=AllRoutes;
  return (
    <>
    <Container fluid="true">
      <TopBar />
      <Routes>
        {allRoutes.map((item,index)=> 
        (
          <Route key={index} path={item.link} element={item.component} />
        ))}
          {blog.map((item,index)=> (
              <Route key={index} path={`/blog/${item.id}`} element={<BlogDetail item={item} />} />
          ))}
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <ContactBar/>
      <ScrollToTop/>
      <Footer />
    </Container>
     
     </>
  );
}
