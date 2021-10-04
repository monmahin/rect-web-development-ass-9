import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo.png'

const Header = () => {
    const activeStyle={fontWeight:"600",textDecoration:"none",color:"White"}
    return (
 
            <Navbar className="fixed-top" bg="dark" expand="lg">
  <Container >
 <NavLink style={activeStyle} to="/home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top mx-3"
        alt="React Bootstrap logo"
      />Home</NavLink>
    

    
      <Nav className="ms-auto" >
        
        <Nav.Link><NavLink style={activeStyle} to="/services">Services</NavLink></Nav.Link>
        <Nav.Link><NavLink style={activeStyle} to="/about">About Us</NavLink></Nav.Link>
        <Nav.Link><NavLink style={activeStyle} to="/contact">Contact Us</NavLink></Nav.Link>
      </Nav>
    
  </Container>
</Navbar>
        
    );
};

export default Header;