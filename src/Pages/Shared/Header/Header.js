import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../Assests/Images/logo/WILDQUESTLENS-Logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="success"
      className="shadow p-3 mb-5 bg-body rounded"
      Loginvariant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={CustomLink} to="/">
          <img src={logo} className="w-100" alt="WildQuestLens Logo"></img>
          {/*  <img
            src={logo}
            // className="d-inline-block align-top rounded-pill"
            alt=""
          /> */}
          {/* <p>WildQuestLens</p> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-5 me-auto">
            <Nav.Link as={CustomLink} to="/home" href="#home">
              Home
            </Nav.Link>
            <Nav.Link as={CustomLink} to="/blogs" href="#blog">
              Blogs
            </Nav.Link>
            <Nav.Link
              as={CustomLink}
              to="/about"
              className="text-black font-bolder"
            >
              About
            </Nav.Link>
            <Nav.Link
              as={CustomLink}
              to="/contact"
              className="text-black font-bolder"
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link
              as={CustomLink}
              to="/signin"
              className="text-black font-bolder"
            >
              Signin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
