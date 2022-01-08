import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import StockVector from "../../images/data.svg";
import { Link } from "react-router-dom";

const HomePageHeroSection = () => {
  return (
    <div className="hero-section section_padding">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12}>
            <div>
              <h1>Grow your money in a simplified way</h1>
              <p class="f20 text-muted">
                Follow India and US stock portfolio of Anwesh Peddineni, receive
                buy/sell transactions through Email &amp; Dashboard
              </p>
              <p className="mt-3 f18 text-muted">Start growing along now!</p>
            </div>
            {/* <div className="buttons-hero-section mt-5">
              <Link className="hero-button-dark btn mr-4" to="/login">
                Login
              </Link>
              <Link
                to="/signup"
                className="hero-button-dark btn btn-outline-dark"
              >
                Sign Up
              </Link>
            </div> */}
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div>
              <Image src={StockVector} className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageHeroSection;
