import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import linkedIn from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import youtube from "../../images/youtube.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="section_padding">
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <h6 className="text-uppercase font-weight-bold mb-4">
              Anwesh Peddineni
            </h6>
            <p className="font-italic text-muted">
              I am a full time investor. By subscribing to my services you can
              follow my India stock portfolio, US stock portfolio at a small
              annual subscription fee.
            </p>
            <ul className="d-flex mt-4 p-0">
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/in/anwesh-peddineni-7014b2b0/"
                  target="_blank"
                >
                  <img src={linkedIn} alt="" />
                </a>
              </li>

              <li className="list-inline-item">
                <a href="https://twitter.com/AnweshPeddineni" target="_blank">
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
          <Col lg={4} md={6}>
            <h6 className="text-uppercase font-weight-bold mb-4">
              Usefull Links
            </h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/indian-stock-portfolio" className="text-muted">
                  Indian Stock Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="us-stock-portfolio" className="text-muted">
                  US Stock Portfolio
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/approach" className="text-muted">
                  Approach
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/faqs" className="text-muted">
                  Faq's
                </Link>
              </li>
            </ul>
          </Col>
          <Col lg={4} md={6}>
            <h6 className="text-uppercase font-weight-bold mb-4">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/login" className="text-muted">
                  Login
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/register" className="text-muted">
                  Sign Up
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy-policy" className="text-muted">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms-and-conditions" className="text-muted">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/refund-policy" className="text-muted">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </Col>
          {/* <Col lg={3} md={6}>
            <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
            <p className="text-muted mb-4">
              For more interesting updates on Stock Investing, subscribe to my Newsletter
            </p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  aria-describedby="button-addon1"
                  className="form-control border-0 shadow-0"
                />
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link"
                  >
                    <FaPaperPlane />
                  </button>
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
