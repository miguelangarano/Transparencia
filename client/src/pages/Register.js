import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginCard from '../components/LoginCard';
import { Container, Row, Col } from 'reactstrap';

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Hola register</h1>
        <Container>
          <Row>
            <Col></Col>
            <Col><LoginCard></LoginCard></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
