import React from 'react';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Homepage</Navbar.Brand>
          
          
            <Nav className="me-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Login</Nav.Link>
            </Nav>
          
        </Container>
      </Navbar>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomePage;
