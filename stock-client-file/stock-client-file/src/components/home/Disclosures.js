import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Disclosures = () => {
  return (
    <div className="disclosures section_padding">
      <Container>
        <Row>
          <Col md={12}>
            <h3>Disclosures:</h3>
            <p className="text-justify">
              The service is not an offer to sell or solicitation to buy any
              securities. Anwesh Peddineni will not be liable for any losses
              incurred or investment(s) made or decisions taken/or not taken
              based on the information provided herein.
            </p>
            <p className="text-justify">
              The information contained herein does not constitute a personal
              recommendation or take in to account the investment objectives,
              financial situations, or needs of individual investors. Before
              acting on any information, investors should consider whether it is
              suitable for their particular circumstances. Information herein is
              believed to be reliable but Anwesh Peddineni does not warrant its
              completeness or accuracy and expressly disclaims all warranties
              and conditions of any kind, whether express or implied. The
              performance data quoted represents past performance and does not
              guarantee future results.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Disclosures;
