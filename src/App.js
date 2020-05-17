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
          Veg Pizzas
        </h1>
      </div>
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Margherit.jpg' height='250' />
              <Card.Body>
                <Card.Title>Margherita</Card.Title>
                <Card.Title>₹ 199</Card.Title>
                <Card.Text>
                  A hugely popular margherita, with a deliciously tangy single cheese topping
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Fresh_Veggie.jpg' height='250' />
              <Card.Body>
                <Card.Title>FRESH VEGGIE</Card.Title>
                <Card.Title>₹ 335</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg' height='250' />
              <Card.Body>
                <Card.Title>VEGGIE PARADISE</Card.Title>
                <Card.Title>₹ 395</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <br />

      <div className='text-center'>
        <h1>
          Non-Veg Pizzas
        </h1>
      </div>
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg' height='250' />
              <Card.Body>
                <Card.Title>PEPPER BARBECUE CHICKEN</Card.Title>
                <Card.Title>₹ 335</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg' height='250' />
              <Card.Body>
                <Card.Title>Non Veg Supreme</Card.Title>
                <Card.Title>₹ 570</Card.Title>
                <Card.Text>
                  Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/IndianChickenTikka.jpg' height='250' />
              <Card.Body>
                <Card.Title>Indi Chicken Tikka</Card.Title>
                <Card.Title>₹ 570</Card.Title>
                <Card.Text>
                  The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <div className="Footer">
        <h1>Demo</h1>
      </div>

    </div>
  );
}

export default App;
