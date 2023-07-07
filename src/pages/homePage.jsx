import React from "react";

import {Row, Col, Container } from "react-bootstrap";
import NavBar from "../components/navBar";
import Category from "../components/category";
import Review from "../components/review";
import Jumbotron from "../components/jambotron";
import PostComments from "../components/postComments";

function HomePage() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <Container>
        <Row>
            <Col sm={9} >
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
