import React from "react";
import { Col, Container, Image, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BannerImG from "../images/portfolio2.svg";
import Subscribe from "../images/subsccription2.svg";
import Dashboard from "../images/admin2.svg";
import EmailAlert from "../images/alert.svg";
import Validity from "../images/validity.svg";
import { UsChart } from "../components/charts/ChartHome";
import usPortfolio from "../images/us-portfolio.png";

const IndianStockPortfolio = () => {
  return (
    <div className="services">
      <div className="ind-stock-banner hero-section section_padding">
        <Container>
          <Row className="align-items-center">
            <Col md="6" sm={12}>
              <h1>Follow US Stock</h1>
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
                transaction details of US listed company stocks I Buy or Sell
                with their percentage allocation in my personal portfolio. As
                and when you subscribe, you will have access to all the past
                data from the start of the service from June 2021.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md="8" sm={12} className="sm-order-1">
              <p>
                After subscription you will be able to access a separate dash
                board to see my US stock portfolio, where you can find the
                current month transaction list in detail and my consolidated
                portfolio. In my current month transaction you will be able to
                see month wise stock buy or sell transactions with date,
                purchase/sell price and portfolio allocation. In my consolidated
                portfolio you will be able to see the name of the companies,
                average purchase price of each company’s stock, allocation and
                cash holding percentage. Occasionally I will share general views
                or updates on my portfolio.
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
                Buy/Sell transactions in my US portfolio will be shared on the
                same day through Email, SMS alert and Dash board on the website
                will also be updated accordingly on the same day. For
                subscribers in India SMS and Email alerts will be sent and for
                subscribers outside India only Email alerts will be sent.
              </p>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col md="8" sm={12} className="sm-order-1">
              <p>
                This service also comes with a 1 year validity period and unless
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
            <Col md={6}>
              <img className="img-fluid" src={usPortfolio} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="text-center">
                Motivation behind investing in US stocks
              </h2>
              <p>
                My motivation behind starting investing in US stocks is to make
                the investing more diversified. And because of this there will
                be more number of companies to choose from, which makes the
                investing broader and better.
              </p>
              <p>
                There are many technology companies listed on the US stock
                exchanges than in India. So there will be more options to invest
                in Innovative and technology companies in US. And also there are
                many product and service oriented companies in US which have a
                global presence. All these options to choose from may give a
                chance to invest in shares of some of the best companies in the
                world.
              </p>
              <p>
                My methods of investing and analysis will be the same as I do
                for Indian stocks. I put 40% of my total allocation in US stocks
                and 60% in Indian stocks.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default IndianStockPortfolio;
