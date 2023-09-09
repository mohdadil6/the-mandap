import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './btn.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../CustomNavbar/CustomNavbar.css';

// Import FontAwesome CSS and the hamburger icon
import 'font-awesome/css/font-awesome.min.css';

const CustomNavbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Add a scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `custom-navbar ${scrolling ? 'scrolled' : ''}`;

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" fixed="top" className={navbarClasses}>
      <Container>
        <Navbar.Brand as={Link} to="/" className='home'>
          <img 
            src={logo}
            alt="logo"
            width="75"
            height="75"
            className="d-inline-block align-top"
          />
          the mandapp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/" className="nav-link" exact>
              <span className="navbar-text">Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-link">
              <span className="navbar-text">Services</span>
            </Nav.Link>
            <NavDropdown title="More" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/about">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/contact">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://instagram.com/themandap2023">
                Instagram
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link className="btn" href="tel:+91 8821 088 288">
              CALL US<span>: +91 8821 088 288 </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
