import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../../Assests/Images/logo/WILDQUESTLENS-Logo.png";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
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
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn btn-link text-black fw-bold text-decoration-none"
              >
                SignOut
              </button>
            ) : (
              <Nav.Link as={CustomLink} to="/signin">
                Signin
              </Nav.Link>
            )}
            {/* <Nav.Link
                  as={Link}
                  to="/login"
                  href="#memes"
                  className="text-white font-bolder"
                >
                  Login
                </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
