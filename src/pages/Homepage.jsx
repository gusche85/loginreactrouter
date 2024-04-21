import React from 'react';
import { Navbar, Nav, Container, Carousel } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Navbar className="bg-body-none mb-3">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          
          
            <Nav className="justify-content-end">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="">Login</Nav.Link>
            </Nav>
          
        </Container>
      </Navbar>

      <Container><Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/images/slide1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="src/images/slide2.png"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel></Container>
    </div>
  );
};

export default HomePage;
