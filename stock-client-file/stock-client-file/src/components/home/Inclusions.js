import React from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
//

const Inclusions = () => {
  return (
    <div className="inclusions section_padding">
      <Container>
        <Row className="align-items-center mb-4">
          <Col md={6} sm={12}>
            <div className="inclusions-list">
              <h3>What you get</h3>
              <ul>
                <li>My India, US portfolio details</li>
                <li>
                  Buy/sell alerts in my portfolio will be sent to subscribers
                  through Email &amp; Dashboard
                </li>
                <li>My personal views and updates on my portfolio</li>
                <li>Dedicated blog for paid subscribers to learn investing</li>
              </ul>
            </div>
          </Col>
          <Col md={6} sm={12}>
            <div className="exclusions-list">
              <h3>What you do not get</h3>
              <ul>
                <li> Short term trading tips</li>
                <li> Customized or personalized advice</li>
                <li> Research report will not be published </li>
                <li> Stocks specific queries will not be answered</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Inclusions;
