import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Proshop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home"><i className="fas fa-shopping-cart mr-1"></i>Cart</Nav.Link>
              <Nav.Link href="#link"><i className="fas fa-user mr-1"></i>Sign In</Nav.Link>
            </Nav>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
