import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Assests/Images/logo/WILDQUESTLENS-Logo.png";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="white"
      className="shadow p-3 mb-5 bg-body rounded"
      Loginvariant="dark"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          {/* <img src={logo} className="w-25 h-25" alt=""></img> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/about" className="text-black font-bolder">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-black font-bolder">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
