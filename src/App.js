import React from 'react';
import pizzalogo from './images/pizza.png';
import pizzaHori1 from './images/pizzaHori-1.jpg';
import pizzaHori2 from './images/pizzaHori-2.jpg';
import pizzaHori3 from './images/pizzaHori-3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Form, Nav, FormControl, Button, NavDropdown, Carousel, Container, Col, Row, Card } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">
          <img
            src={pizzalogo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="Pizza logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Regular</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Combo</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Super Sale</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </Navbar>

      <Carousel interval={3500}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizzaHori1}
            height="500"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizzaHori2}
            height="500"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pizzaHori3}
            height="500"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <br />

      <div className='text-center'>
        <h1>
          Veg Pizza
        </h1>
      </div>
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizzaHori1} height='200' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizzaHori2} height='200' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizzaHori3} height='200' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <br />

      <div className='text-center'>
        <h1>
          Non-Veg Pizza
        </h1>
      </div>
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizzaHori1} height='200' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizzaHori2} height='200' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pizzaHori3} height='200' />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
}

export default App;
