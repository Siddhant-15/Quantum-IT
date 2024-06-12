import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Places.css';
import mountainLoopImg from './1.jpeg';
import nationalParkImg from './2.jpeg';
import canyonTrailImg from './3.jpeg';

const PlacesToVisit = () => {
    return (
        <Container className="my-5">
            <h2 className="text-center">Places to Visit in Autumn</h2>
            <Row className="mt-4">
                <Col md={4} className="text-center mb-4">
                    <Image src={mountainLoopImg} roundedCircle className="place-image" />
                    <h5 className="mt-3">Mountain Loop</h5>
                    <p>Lorem ipsum sit amet, consectetur adipiscing...</p>
                    <p><strong>Location</strong> 0.3 miles.</p>
                </Col>
                <Col md={4} className="text-center mb-4">
                    <Image src={nationalParkImg} roundedCircle className="place-image" />
                    <h5 className="mt-3">National Park</h5>
                    <p>Lorem ipsum dolor amet, consectetur adipiscing...</p>
                    <p><strong>Location</strong> 0.2 miles.</p>
                </Col>
                <Col md={4} className="text-center mb-4">
                    <Image src={canyonTrailImg} roundedCircle className="place-image" />
                    <h5 className="mt-3">Canyon Trail</h5>
                    <p>Lorem ipsum dolor sit consectetur adipiscing...</p>
                    <p><strong>Location</strong> 0.6 miles.</p>
                </Col>
            </Row>
            <div className="text-center">
                <Button variant="outline-primary">See More</Button>
            </div>
        </Container>
    );
};

export default PlacesToVisit;
