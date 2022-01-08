import React from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Card,
  Form,
  Button,
} from "react-bootstrap";
import ContactBanner from "../images/contact.svg";
import contactImage from "../images/contact-image.png";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";
import linkedIn from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";

const Contact = () => {
  return (
    <div className="contact-us">
      <div className="section_padding contact-us-banner hero-section">
        <Container>
          <Row className="align-items-center justify-content-center">
            <Col md={4} sm={12}>
              <h1 className="banner-head">Contact</h1>
            </Col>
            <Col md={6} sm={12}>
              <Image src={contactImage} className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_padding contact-details">
        <Container>
          <Row className="align-items-center">
            <Col md={4} sm={12}>
              <Card>
                <Card.Body className="text-center">
                  <HiOutlinePhone />
                  <h3>Call Us</h3>
                  <Card.Text>+91 9916860469</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card>
                <Card.Body className="text-center">
                  <HiOutlineMail />
                  <h3>Email</h3>
                  <Card.Text>anwesh.peddineni@gmail.com</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} sm={12}>
              <Card>
                <Card.Body className="text-center">
                  <HiOutlineLocationMarker />
                  <h3>Location : </h3>
                  <Card.Text>Hyderabad</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <section id="socialIcons" style={{ padding: "3em 0" }}>
        <div className="section_padding contact-details">
          <Container>
            <Row className="align-items-center justify-content-center">
              <Col md={12} sm={12}>
                <ul className="d-flex justify-content-center">
                  <li className="list-inline-item">
                    <a
                      href="https://www.linkedin.com/in/anwesh-peddineni-7014b2b0/"
                      target="_blank"
                    >
                      <img src={linkedIn} alt="" />
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a
                      href="https://twitter.com/AnweshPeddineni"
                      target="_blank"
                    >
                      <img src={twitter} alt="" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <img src={facebook} alt="" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <img src={instagram} alt="" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" target="_blank">
                      <img src={youtube} alt="" />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <div className="section_padding">
        <Container>
          <h2 className="text-center mb-4 font-weight-bold">
            {" "}
            Drop your number here to receive a callback
          </h2>
          <Row className="justify-content-center">
            <Col md={8} sm={12}>
              <Form>
                {/* <div className="py-4"></div> */}
                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formBasicNumber">
                  <Form.Control type="tel" placeholder="Contact Number" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={5} placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
