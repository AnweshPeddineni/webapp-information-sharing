import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import BrokerageImg from "../images/brokerage.svg";
// import Zerodha from "../images/zerodha.svg";
// import Vested from "../images/vested.svg";
import ZerodhaLogo from "../images/zerodha.png";
import VestedLogo from "../images/vested.png";
import { Link } from "react-router-dom";
const Brokerage = () => {
  return (
    <div className="brokerage ">
      <div className="section_padding hero-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={4} sm={12}>
              <h1>Brokerages</h1>
            </Col>
            <Col md={6} sm={12}>
              <Image className="img-fluid" src={BrokerageImg} />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="indian-brokerage section_padding">
        <Container>
          <Row className="justify-content-center">
            {/* <Col md={4} sm={12}>
              <Image src={Zerodha} className="img-fluid" />
            </Col> */}
            <Col md={12} sm={12}>
              <p>
                If you don’t have a Demat account already, for Investing in
                India we recommend online brokerage Zerodha. You can open your
                Zerodha account by clicking the open account button below.
              </p>
              <Row className="justify-content-center">
                <Col md={6}>
                  <div className="inner_content rounded p-4 border">
                    <div className="text-center logo-broker">
                      <Image src={ZerodhaLogo} className="img-fluid" />
                    </div>
                    <ul className="broker-points">
                      <li>India's largest online broker</li>
                      <li>Advance tech platform</li>
                      <li>Zero brokerage</li>
                      <li>Account opening is completely online</li>
                      <br />
                    </ul>
                    <div className="text-center">
                      <a
                        href="https://zerodha.com/open-account?c=YU6071"
                        className="hero-button-dark"
                        target="_blank"
                      >
                        Open Account
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <div className="section_padding">
            <hr />
          </div>
          <Row className="justify-content-center">
            <Col md={12} sm={12}>
              <p>
                For investing in the US we recommend online brokerage Vested
                finance. Open your vested account today by clicking the open
                account button below and get $5 credited to your vested account.
                (Bank will take forex transaction charges of up to 2% when you
                fund your vested account)
              </p>
              <Row className="justify-content-center mt-3">
                <Col md={6}>
                  <div className="inner_content rounded p-4 border">
                    <div className="text-center logo-broker">
                      <Image src={VestedLogo} className="img-fluid" />
                    </div>
                    <ul className="broker-points">
                      <li>Invest in US stocks from India</li>
                      <li>Responsive Tech Platform</li>
                      <li>Fractional investing</li>
                      <li>Zero Brokerage</li>
                      <li>Easy and online account opening</li>
                    </ul>
                    <div className="text-center">
                      <a
                        href="https://app.vested.co.in/referrals?code=PEAN60469"
                        className="hero-button-dark"
                        target="_blank"
                      >
                        Open Account
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* <Col md={4} sm={12}>
              <Image src={Vested} className="img-fluid" />
            </Col> */}
          </Row>
          <Row>
            <Col md={12}>
              <p className="mt-5">
                You can also choose any other online brokerages accorText
                Boxding to your interest, brokerages mentioned above are
                recommendations from our side.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Brokerage;
