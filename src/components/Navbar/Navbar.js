import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';

function MyNavbar() {
    return (
        <Navbar expand="lg" className="custom-navbar fixed-top">
            <Navbar.Brand href="#home" className='alpha d-flex align-items-center'>
                <img src={require('./logo.png')} alt="Logo" className="logo" />
                <h3 className="ml-2">Hiking</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav className="menu">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#class">Class</Nav.Link>
                    <Nav.Link href="#promo">Promo</Nav.Link>
                    <Nav.Link href="#onlineclass">Online Class</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
