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
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Margherit.jpg' height='250' width='250' />
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
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Fresh_Veggie.jpg' height='250' width='250' />
              <Card.Body>
                <Card.Title>FRESH VEGGIE</Card.Title>
                <Card.Title>₹ 335</Card.Title>
                <Card.Text>
                  Delicious combination of Onion and Capsicum, a Veggie lover pick.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg' height='250' width='250' />
              <Card.Body>
                <Card.Title>VEGGIE PARADISE</Card.Title>
                <Card.Title>₹ 395</Card.Title>
                <Card.Text>
                  Perfect combination of Goldern Corn, Black Olives, Capsicum and Red Paprika
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
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Pepper_Barbeque.jpg' height='250' width='250' />
              <Card.Body>
                <Card.Title>PEPPER BARBECUE CHICKEN</Card.Title>
                <Card.Title>₹ 335</Card.Title>
                <Card.Text>
                  Pepper Barbecue chicken for that extra zing.
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/Non-Veg_Supreme.jpg' height='250' width='250' />
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
              <Card.Img variant="top" src='https://www.dominos.co.in/files/items/IndianChickenTikka.jpg' height='250' width='250' />
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
        <br />
        <h1>Pizza Fever</h1>
        <h5>We not only deliver Pizzas but also deliver happiness. Your happiness is our earning</h5>
        <hr />
        <h4>
          THANK YOU, VISIT AGAIN
        </h4>
        <h7>
          © Pizza Fever | 2020
        </h7>
        <br />
        <br />
      </div>
    </div>
  );
}

export default App;
