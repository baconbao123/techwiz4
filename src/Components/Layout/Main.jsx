import React from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import ScrollToTop from "../../Common/ScrollToTop";
import ContactBar from "../../Common/ContactBar/ContactBar";
import Home from "../HomePage/HomePage";
import { Container } from "react-bootstrap";
import {Routes,Route} from 'react-router-dom'
import {AllRoutes} from '../../Routes/AllRoutes'
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
      </Routes>
      <ContactBar/>
      {/* <Footer /> */}
    </Container>
     
     </>
  );
}
