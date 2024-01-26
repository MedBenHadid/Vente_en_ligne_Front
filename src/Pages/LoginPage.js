// src/pages/LoginPage.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import LoginForm from '../Components/LoginForm';
import AuthService from '../Services/AuthService';

const LoginPage = ({ history }) => {
  const handleLogin = (username, password) => {
    
    // Perform authentication
    // AuthService.login(username, password);

    // Redirect to the home page after successful login
    history.push('/');
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Login</Card.Title>
              <LoginForm onLogin={handleLogin} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
