import React from "react";
import {
  Navbar,
  NavDropdown,
  Container,
  Offcanvas,
  Nav,
  LinkContainer,
} from "react-bootstrap/";

import "./Navigation.css";

function Navigation(props) {
  return (
    <div>
      <Navbar id="main-nav-bar" bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Annie Courney</Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Project Links
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="https://acourney.github.io/MyTamagotchi/">
                  MyTamagotchi
                </Nav.Link>

                <Nav.Link href="https://dmhelper.netlify.app/">
                  DM Helper
                </Nav.Link>

                <Nav.Link href="https://ram-electronics.netlify.app/">
                  RAM Electronics
                </Nav.Link>

                <Nav.Link href="https://tripme-app.netlify.app/">
                  TripMe
                </Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link
                  id="link-to-resume"
                  to="https://docs.google.com/document/d/e/2PACX-1vQcdlwPxM4v2b3msINRfwJnnDOqDZ2AlsDvrgwd-EpoVYMfVU3OgmOzVvJqOGkccnksm5NqXdz4-6v9/pub"
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
