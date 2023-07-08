import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Category from "../components/category";
import Jumbotron from "../components/jambotron";
import NavBar from "../components/navBar";
import PostComments from "../components/postComments";
import Review from "../components/review";

function HomePage() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <Container>
        <Row>
          <Col sm={9}>
            <Row>
              <Category />
            </Row>
          </Col>

          <Col sm={3}>
            <Review />
            <PostComments />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default HomePage;
