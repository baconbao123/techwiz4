import React from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import ScrollToTop from "../../Common/ScrollToTop";
import ContactBar from "../../Common/ContactBar/ContactBar";
import Home from "../HomePage/HomePage";
import { Container } from "react-bootstrap";

export default function Main() {
  return (
    <>
    <Container fluid>
      <TopBar></TopBar>
      <Home/>
      <ScrollToTop/>
      <ContactBar/>
      {/* <Footer /> */}
    </Container>
     
     </>
  );
}
