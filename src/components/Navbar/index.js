import React from "react";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

const StyledNavbar = styled(Navbar)`
  background-color: #3b3a30;
`

export default function NavBar() {
  return (
    <>
      <StyledNavbar expand="lg">
        <Navbar.Brand href="#home">MOAlves Aplicativos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://twitter.com/Marcelo_O_Alves">
              Twitter
            </Nav.Link>
            <Nav.Link href="https://github.com/mafeal">GitHub</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    </>
  );
}
