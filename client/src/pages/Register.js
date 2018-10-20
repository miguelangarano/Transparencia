import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from '../components/RegisterForm';
import { Container, Row, Col } from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Hola register</h1>
        <Container>
          <Row>
            <Col></Col>
            <Col><RegisterForm></RegisterForm></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
