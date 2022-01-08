import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import RefundImg from "../images/refund.svg";
const RefundPolicy = () => {
  return (
    <div className="refundPolicy">
      <div className="section_padding hero-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={4} sm={12}>
              <h1>Refund Policy</h1>
            </Col>
            <Col md={6} sm={12}>
              <div className="text-center">
                <Image src={RefundImg} width="80%" fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text-center section_padding">
        <h2 className="text-center">No Refunds for payments made. </h2>
      </div>
    </div>
  );
};

export default RefundPolicy;
