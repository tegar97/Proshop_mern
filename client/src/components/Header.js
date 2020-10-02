import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Proshop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link ><i className="fas fa-shopping-cart mr-1"></i>Cart</Nav.Link>

              </LinkContainer>
              <LinkContainer to="/signin">
               <Nav.Link ><i className="fas fa-user mr-1"></i>Sign In</Nav.Link>
              
              </LinkContainer>
            </Nav>
      
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Header
