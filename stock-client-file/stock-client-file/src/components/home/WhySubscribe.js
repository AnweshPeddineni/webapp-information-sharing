import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import TimeImg from "../../images/time.svg";
import InvestImg from "../../images/invest.svg";
import GlobeImg from "../../images/img-2.png";
import EaseImg from "../../images/easy.svg";
import BestImg from "../../images/best.svg";
import BetterImg from "../../images/return.svg";
import fundamentalsImg from "../../images/fundamentals-image.png";

const WhySubscribe = () => {
  return (
    <div className="why-subscribe section_padding">
      <Container>
        <h2 className="text-center font-weight-bold">
          Why should you subscribe ?
        </h2>
        <Row>
          <Col md={4} sm={6}>
            <Card>
              <Card.Body className="text-center">
                <Image src={TimeImg} fluid />
                <h4 className="mt-4">Saves Your Time</h4>
                <p>
                  One can save the time it takes to finding companies to invest
                  in
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card>
              <Card.Body className="text-center">
                <Image src={InvestImg} fluid />
                <h4 className="mt-4">Safe way to start individual investing</h4>
                <p>
                  As many investors tend to make mistakes and end up making
                  losses in early stages
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card>
              <Card.Body className="text-center">
                <Image src={GlobeImg} fluid />
                <h4 className="mt-4">Globally diversified investments</h4>
                <p>I invest in companies listed in India and U.S</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card>
              <Card.Body className="text-center">
                <Image src={EaseImg} fluid />
                <h4 className="mt-4">Easy to use</h4>
                <p>Our web application is user friendly</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card>
              <Card.Body className="text-center">
                <Image src={fundamentalsImg} fluid />
                <h4 className="mt-4">Fundamentals driven investing</h4>
                <p>Fundamentals are my focus in every investment i make</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card>
              <Card.Body className="text-center">
                <Image src={BetterImg} fluid />
                <h4 className="mt-4">Better Returns</h4>
                <p>
                  I research and invest with a sole objective of profit making{" "}
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhySubscribe;
