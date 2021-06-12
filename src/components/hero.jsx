import React from 'react';
import Container from 'react-bootstrap/container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

const setNavClose = () => {
    this.setState({ navExpanded: false });
  }

const Hero = (props) => {
  
    
    return (
       
        <Container className="p-0" fluid={true}>
            <Navbar expand="sm" className="nav-container" onToggle={setNavExpanded} expanded={false}>
                <Navbar.Brand>
                    <Nav.Link>Hi</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto" onClick={setNavClose}>
                    <Nav.Link>Hola</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
      </Container>
      
    )
}

export default Hero;