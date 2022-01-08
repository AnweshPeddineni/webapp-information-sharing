import React from "react";
import { Col, Container, Row, Card, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServiceImg from "../../images/stockj.svg";
import WhySubscribe from "./WhySubscribe";
import { IndianChart, UsChart } from "../charts/ChartHome";
import indianPortfolio from "../../images/indian-portfolio.png";
import usPortfolio from "../../images/us-portfolio.png";

const Services = () => {
  return (
    <div className="services section_padding">
      <Container>
        <Row className="align-items-center">
          <Col md={12}>
            <h2 className="text-center font-weight-bold mb-4">
              About the service
            </h2>
          </Col>
          <Col md={6} sm={12}>
            <Image src={ServiceImg} className="img-fluid" />
          </Col>
          <Col md={6} sm={12}>
            <p className="text-justify">
              The service was started simply with the idea of making people’s
              investments grow along with mine. Many people want to invest in
              the stock market but don’t have the time to research and find the
              right kind of companies to invest in. But investing in stocks is a
              great way to build long term wealth if it is done with a proper
              plan and strategy.
            </p>
            <p className="text-justify">
              I am a full time investor. By subscribing to the services you can
              follow my India stock portfolio, US stock portfolio at a small
              annual subscription fee. This can make your investing easier,
              saves your time and most importantly grows your money in the long
              term.
            </p>
          </Col>
        </Row>
        <WhySubscribe />
        <div className="section_padding">
          <Row>
            <Col md={12} sm={12}>
              <h2 className="text-center font-weight-bold mt-4">
                Objectives and Returns
              </h2>
              <p>
                My India portfolio has produced a return of 98% in 2020. My
                objective is to produce an average CAGR of 25 to 30% going
                forward, both for my India portfolio and US portfolio.
              </p>
            </Col>
            <Col md={6} sm={12}>
              <div className="us-portfolio-chart">
                <img className="img-fluid" src={indianPortfolio} alt="" />
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className="us-portfolio-chart">
                <img className="img-fluid" src={usPortfolio} alt="" />
              </div>
            </Col>
          </Row>
        </div>
        <Row className="my-5 justify-content-center">
          <Col md="6" sm={12}>
            <Card className="mycards">
              <Card.Body>
                <Card.Title>Follow my India Stock Portfolio</Card.Title>
                <Card.Subtitle>1 year subscription at</Card.Subtitle>

                <div className="mb-4 text-bold">
                  <div className="main-price red"> ₹ 1,799</div>
                  <div className="discount-pricing">
                    <span className="text-muted">
                      <del>₹ 7,799.00</del>
                    </span>
                    <span className="red ml-4">Save ₹ 6,000.00 (77%)</span>
                  </div>
                  <div className="mt-2"> Including 18% GST</div>
                </div>
                <Link href="" className="paybtn mt-3">
                  Buy Now
                </Link>
                <Link href="#!" className="paybtn outlinbtn">
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md="6" sm={12}>
            <Card className="mycards">
              <Card.Body>
                <Card.Title>Follow my US Stock Portfolio</Card.Title>
                <Card.Subtitle>1 year subscription at</Card.Subtitle>

                <div className="mb-4 text-bold">
                  <div className="main-price red"> ₹ 1,399</div>
                  <div className="discount-pricing">
                    <span className="text-muted">
                      <del>₹ 7,399.00</del>
                    </span>
                    <span className="red ml-4">Save ₹ 6,000.00 (81%)</span>
                  </div>
                  <div className="mt-2"> Including 18% GST</div>
                </div>
                <Link href="" className="paybtn mt-3">
                  Buy Now
                </Link>
                <Link href="#!" className="paybtn outlinbtn">
                  Know More
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="text-center">
            <Link className="btn hero-button-dark mt-3">Buy Both</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
