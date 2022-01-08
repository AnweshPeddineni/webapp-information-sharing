import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import firebase from "firebase/app";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const { user } = useSelector((state) => ({ ...state }));

  const handleLogout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    history.push("/login");
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Home</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Services"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
            >
              <NavDropdown.Item>
                <LinkContainer to="/indian-stock-portfolio">
                  <Nav.Link>Follow My India Stock Portfolio</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <LinkContainer to="/us-stock-portfolio">
                  <Nav.Link>Follow My US Stock Portfolio</Nav.Link>
                </LinkContainer>
              </NavDropdown.Item>
            </NavDropdown>
            <LinkContainer to="/approach">
              <Nav.Link>Approach</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/faqs">
              <Nav.Link>FAQ’s</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/brokerage">
              <Nav.Link>Brokerage</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
            {!user && (
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {!user && (
              <LinkContainer className="sign-up-nav" to="/register">
                <Nav.Link>Sign Up</Nav.Link>
              </LinkContainer>
            )}

            {user && (
              <NavDropdown
                title={user.email && user.email.split("@")[0]}
                id="navbarScrollingDropdown"
              >
                {user.role === "subscriber" ? (
                  <NavDropdown.Item key="subscriber">
                    <Link to="/user/history">Dashboard</Link>
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item key="admin">
                    <Link to="/admin/dashboard">Admin Dashboard</Link>
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
