
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Image from './components/Image';

const firstName = "Ahmed"; // <-- Change to "" if you want to test fallback greeting

function App() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <Image />
              <Card.Title className="mt-3 text-center"><Name /></Card.Title>
              <Card.Text><Price /></Card.Text>
              <Card.Text><Description /></Card.Text>
            </Card.Body>
          </Card>

          <div className="text-center mt-4">
            <h4>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h4>
            {firstName && (
              <img
                src="https://via.placeholder.com/100.png?text=👋"
                alt="Greeting"
                className="mt-3 rounded-circle"
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
