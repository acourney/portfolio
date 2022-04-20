import React from "react";
import {
  Navbar,
  NavDropdown,
  Container,
  Offcanvas,
  Nav,
  LinkContainer,
} from "react-bootstrap/";

import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";

import "./Navigation.css";

function Navigation(props) {
  return (
    <div>
      <Navbar id="main-nav-bar" expand={false}>
        <Container fluid>
          <Navbar.Brand id="navbar-brand" href="#">
            Annie Courney
          </Navbar.Brand>

          <Navbar.Toggle id="navbar-toggle" aria-controls="offcanvasNavbar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="whitesmoke"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>{" "}
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton className="btn-close-white">
              <h5 id="offcanvasNavbarLabel">Project Links</h5>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link
                  className="offscreen-nav-link"
                  href="https://acourney.github.io/MyTamagotchi/"
                >
                  MyTamagotchi
                </Nav.Link>

                <Nav.Link
                  className="offscreen-nav-link"
                  href="https://dmhelper.netlify.app/"
                >
                  DM Helper
                </Nav.Link>

                <Nav.Link
                  className="offscreen-nav-link"
                  href="https://ram-electronics.netlify.app/"
                >
                  RAM Electronics
                </Nav.Link>

                <Nav.Link
                  className="offscreen-nav-link"
                  href="https://tripme-app.netlify.app/"
                >
                  TripMe
                </Nav.Link>
                <NavDropdown.Divider id="dropdown-divider" />
                <Nav.Link
                  className="offscreen-nav-link"
                  id="link-to-resume"
                  href="https://docs.google.com/document/d/e/2PACX-1vSOmcHMjS-0ih_vdwmQth6bom60H0-KxZd_ISLFXAkO3wQto0QFWA5xuNRfha9eB2EL4MzloDoB99Hd/pub"
                >
                  View Resume
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
