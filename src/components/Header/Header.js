import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo.png'
import banner from './header.jpg'
import './Header.css'
const Header = () => {
    const activeStyle={fontWeight:"600",textDecoration:"none",color:"White"}
    return (
 
      <div>
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

        <div className="containers">
        <img className="img-fluid" src={banner} alt="Notebook" style={{width:"100%"}} />
         <div className="content">
        <h5>WELCOME TO WEB DEVELOPMENT COURSE</h5>
            <p>WEB DEVELOPMENT TUTORIALS & COURSES</p>
            <hr className="w-25 h-2 ms-2 border border-3 my-1 border-warning"/>
        </div>
        </div>
        
     </div>
        
    );
};

export default Header;