import React from "react";
import { Container, Col, Navbar, Nav, Button } from "react-bootstrap";

function Head(props) {
  return (
    <Navbar expand="lg">
      <Container
        className="text-center my-3"
      >
        <Navbar.Brand href="/" className="mx-auto">
          <h3 className="display-6">
            <span style={{ color: "black" }}>Binary</span>
          </h3>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Col md={1}>
            <Nav.Link className=" display-3" 
              href="#location"
              style={{ fontSize: "2vh",   }}
            >
              Location
            </Nav.Link>
          </Col>
          <Col md={1}>
            <Nav.Link className="display-5"  
              href="#contact"
              style={{ fontSize: "2vh",   }}
            >
              Contact
            </Nav.Link>
          </Col>
          <Col md={1}>
            <Nav.Link className=" display-5" 
              href="#about"
              style={{ fontSize: "2vh",  }}
            >
              About
            </Nav.Link>
          </Col>

          <Col md={2}>
            <Nav.Link className=" display-5" 
              href="#about"
              style={{ fontSize: "3vh",  }}
            >
              <Button size="sm" variant="outline-dark" className="mx-2" style={{ borderRadius : "20px"}}>Login</Button>
              <Button size="sm" className="btn-dark" style={{ borderRadius : "20px"}}>Signup</Button>
            </Nav.Link>
          </Col>

        </Navbar.Collapse>
      </Container>
      <hr />
    </Navbar>
  );
}

export default Head;
