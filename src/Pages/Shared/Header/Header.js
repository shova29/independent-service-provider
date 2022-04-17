import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assests/Images/logo/WILDQUESTLENS-Logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="header-nav shadow p-3 mb-5 bg-white rounded"
      Loginvariant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={CustomLink} to="/">
          <img
            src={logo}
            className="bg-body w-100"
            alt="WildQuestLens Logo"
          ></img>
          {/*  <img
            src={logo}
            // className="d-inline-block align-top rounded-pill"
            alt=""
          /> */}
          {/* <p>WildQuestLens</p> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-5 me-auto fw-bold">
            <Nav.Link as={CustomLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs">
              Blog
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="fw-bold">
            <Nav.Link as={CustomLink} to="/signin">
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
