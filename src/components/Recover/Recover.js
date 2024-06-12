import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Recover.css';

const Recover = () => {
    return (
        <Container id='onlineclass'>
            <Row className="my-4">
                <Col>
                    <h2>How to Recover from a Hike</h2>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <ul className="list-unstyled">
                        <li className="mb-4 d-flex align-items-center">
                            <Image src={require('./hiking.png')} roundedCircle className="icon-image" />
                            <div className="ms-3">
                                <p>- Lorem ipsum</p>
                                <p>- Dolor sit amet consectetur</p>
                                <p>- Adipiscing elit aptent</p>
                                <p>- Torquent, interdum</p>
                            </div>
                        </li>
                        <li className="mb-4 d-flex align-items-center">
                            <Image src={require('./bag.png')} roundedCircle className="icon-image" />
                            <div className="ms-3">
                                <p>- Fusce etiam augue</p>
                                <p>- Dignissim at euismod</p>
                                <p>- Libero montes</p>
                                <p>- Adipiscing elit aptent</p>
                                <p>- Torquent, interdum</p>
                            </div>
                        </li>
                        <li className="mb-4 d-flex align-items-center">
                            <Image src={require('./hill.png')} roundedCircle className="icon-image" />
                            <div className="ms-3">
                                <p>- Libero montes</p>
                                <p>- Adipiscing elit aptent</p>
                                <p>- Torquent, interdum</p>
                            </div>
                        </li>
                    </ul>
                </Col>
                <Col md={6} className="text-center">
                    <Image src={require('./recover.jpeg')} roundedCircle className="profile-image" />
                    <h3 className="mt-3">Make sure your gear fits</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default Recover;
