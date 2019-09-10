import React from "react";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar: React.FunctionComponent<{}> = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Stock Tracker</Navbar.Brand>
      <Nav className="mr-auto">
        <LinkContainer to="/">
          <Nav.Link>Companies</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/track-new">
          <Nav.Link>Track new company</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
