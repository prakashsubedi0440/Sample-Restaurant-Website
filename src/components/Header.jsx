import React from "react";
import {Navbar,Nav, NavDropdown} from 'react-bootstrap';


function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Navbar.Brand id="title" href="#home">
            <img
                alt=""
                src="images/logo.jpg" //react knows the image folder is in public directory
                width="30"
                height="30"
                className="d-inline-block"
            />{' '}
                Rakas
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#about">About</Nav.Link>

                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#about">Lunch Menu</NavDropdown.Item>
                                                
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">Dinner Menu</NavDropdown.Item>
                    </NavDropdown>

                    
                    <Nav.Link href="#link">Gallery</Nav.Link>
                    <Nav.Link href="#link">Contact</Nav.Link>
                    
                </Nav>  
                
            </Navbar.Collapse>
        </Navbar>
        
    );
}

export default Header;