import '../Header.css'
import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#intro">CG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Albums">Albums</Nav.Link>
            <Nav.Link href="#songs">Songs</Nav.Link>          </Nav>
        </Container>
      </Navbar>
      <br />
      <h1>Conan Gray</h1>
    </div>
  )
}

export default Header
