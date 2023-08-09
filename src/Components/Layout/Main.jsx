import React from "react";
import TopBar from "./TopBar/TopBar";
import Footer from "./Footer/Footer";
import { Container } from "react-bootstrap";
export default function Main() {
  return (
    <Container fluid>
      <TopBar></TopBar>
      <Footer />
    </Container>
  );
}
