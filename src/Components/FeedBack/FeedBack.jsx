import React from "react";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import feedback from "./imgFedd/feedback.png";
import "./FeedBack.scss";
export default function FeedBack() {
  return (
    <div className="container">
      <Row className="feed-back-main">
        <Col
          sm={12}
          md={5}
          lg={5}
          className="mb-4 col-feedback d-flex align-items-center"
        >
          <img className="img-feedback w-100" src={feedback} />
        </Col>
        <Col
          sm={12}
          md={7}
          lg={7}
          className=" mb-4 d-flex justify-content-center col-feedback "
        >
          <Card className="card-feedback  m-2">
            <Card.Body className="card-feeback-body">
              <Card.Title className="text-center fw-bold">
                FeedBack Form
              </Card.Title>
              <Form>
                <Form.Group className="mt-3">
                  <Form.Label className="fw-bold">Phone :</Form.Label>
                  <Form.Control placeholder="01234567 *"/>
                </Form.Group>

                <Form.Group className="mt-3">
                  <Form.Label className="fw-bold">Email:</Form.Label>
                  <Form.Control placeholder="a@gmail.com" />
                </Form.Group>
              </Form>
              <Form.Group className="mt-3">
                <Form.Label className="fw-bold">Message :</Form.Label>
                <Form.Control as={"textarea"} rows={10} placeholder="" />
              </Form.Group>
              <div className=" text-center mb-3">
                <Button className="mt-4">Submit</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
