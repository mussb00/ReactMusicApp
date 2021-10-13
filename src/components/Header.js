import '../Header.css'
import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>CG</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link to="/About">About</Nav.Link>
              <Nav.Link to="/Albums">Albums</Nav.Link>
              <Nav.Link to="/Album/:songs">Songs</Nav.Link>
              </Nav>
          </Container>
        </Navbar>
      <h1>Conan Gray</h1>
    </>
  )
}

export default Header
