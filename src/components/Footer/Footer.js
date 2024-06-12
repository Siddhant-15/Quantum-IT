import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer mt-5 py-2 bg-dark" id='contact'>
            <Container>
                <Row>
                    <Col md={4} className="mb-3">
                        <h5>About</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="d-flex align-items-center">
                            <Image src={require('./logo.png')} className="footer-logo" />
                            <span className="ms-2">Hiking <span className="text-primary bg-light">Life</span></span>
                        </div>
                    </Col>
                    <Col md={2} className="mb-3">
                        <h5>About</h5>
                        <ul className="list-unstyled">
                            <li>Team</li>
                            <li>Join us</li>
                            <li>Ethic</li>
                            <li>Goals</li>
                        </ul>
                    </Col>
                    <Col md={2} className="mb-3">
                        <h5>Company</h5>
                        <ul className="list-unstyled">
                            <li>Team</li>
                            <li>Join us</li>
                            <li>Ethic</li>
                            <li>Goals</li>
                        </ul>
                    </Col>
                    <Col md={2} className="mb-3">
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li>Mail</li>
                            <li>Join us</li>
                            <li>Phone Number</li>
                            <li>Message</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
