import React from "react";
import { Col, Container, Image, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImG from "../images/portfolio1.svg";
import Subscribe from "../images/subscription.svg";
import Dashboard from "../images/admin.svg";
import EmailAlert from "../images/messageOrEmail.svg";
import Validity from "../images/subscribe1.svg";
import { IndianChart } from "../components/charts/ChartHome";
import indianPortfolio from "../images/indian-portfolio.png";

const IndianStockPortfolio = () => {
  return (
    <div className="services">
      <div className="ind-stock-banner hero-section section_padding">
        <Container>
          <Row className="align-items-center">
            <Col md="6" sm={12}>
              <h1>Follow India Stock</h1>
              <h2>Portfolio Of</h2>
              <h2>
                <span>Anwesh Peddineni</span>
              </h2>
            </Col>
            <Col md="6" sm={12}>
              <Image src={BannerImG} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding">
        <Container>
          <Row className="align-items-center">
            <Col md="4" sm={12} className="sm-order-2">
              <Image src={Subscribe} className="img-fluid" />
            </Col>
            <Col md="8" sm={12} className="sm-order-1">
              <p>
                By subscribing to this service you will keep receiving
                transaction details of India listed company stocks I Buy or Sell
                with their percentage allocation in my personal portfolio. As
                and when you subscribe, you will have access to all the past
                data from the start of the service from June 2021.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md="8" sm={12} className="sm-order-1">
              <p>
                After subscription you will be given access to the dash board on
                the website where you can find the current month transaction
                list in detail and my consolidated portfolio. In my current
                month transaction list you will be able to see month wise stock
                buy or sell transactions with date, purchase/sell price and
                portfolio allocation. In my consolidated portfolio you will be
                able to see the name of the companies, average purchase price of
                each company’s stock, allocation and cash holding percentage.
                Occasionally I will share general views or updates on my
                portfolio.
              </p>
            </Col>
            <Col md="4" sm={12} className="sm-order-2">
              <Image src={Dashboard} className="img-fluid" />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md="4" sm={12} className="sm-order-2">
              <Image src={EmailAlert} className="img-fluid" />
            </Col>
            <Col md="8" sm={12} className="sm-order-1">
              <p>
                Buy/Sell transactions will be shared on the same day through
                Email, SMS alert and Dash board on the website will also be
                updated accordingly. For subscribers in India SMS and Email
                alerts will be sent and for subscribers outside India only E
                mail alerts will be sent.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md="8" sm={12} className="sm-order-1">
              <p>
                The service comes with a 1 year validity period and unless
                renewed the access will be revoked after the expiry date. After
                expiry, if not renewed then there will be no web access and buy
                alert. Only sell alert will be sent via Email. To take full
                advantage of the service we encourage you to renew your
                subscription after expiry to continue getting full portfolio
                allocation display with every buy/sell alert.
              </p>
            </Col>
            <Col md="4" sm={12} className="sm-order-2">
              <Image src={Validity} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
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
            <Col md={6}>
              <img className="img-fluid" src={indianPortfolio} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding">
        <Container>
          <Row>
            <Col md={12}>
              <h3 className="text-danger">Note :</h3>
              <p>
                Please note that this is an Investment information sharing
                service and not a financial advisory service or Investment
                advisory service. No future predictions of a stock or its price
                targets will be given, research reports will not be published
                and stock specific queries will not be answered. Occasionally I
                will share my personal views/updates on my portfolio.{" "}
              </p>
              <p>
                It is not mandatory for any of the subscribers to buy or sell
                any stock. The service will just notify what Anwesh Peddineni is
                buying and selling in his personal portfolio in his personal
                capacity.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default IndianStockPortfolio;
