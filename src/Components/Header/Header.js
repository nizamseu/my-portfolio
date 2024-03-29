import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import resume from "../../data/Nizam Uddin React Frontend Developer.pdf";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="menu">
        <Link className="brandName" to="/">
          Nizam Uddin
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/home"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/blog"}>Blog</Link>

            <Nav.Link
              target="_blank"
              href={
                "https://drive.google.com/file/d/1-fMfsqR89PrXKEhK9GM-WiPTdxraisnc/view?usp=sharing"
              }
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
