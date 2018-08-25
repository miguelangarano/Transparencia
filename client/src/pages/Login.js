import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginCard from '../components/LoginCard';
import { Container, Row, Col } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div>
        
        <Container>
          <Row align="center">
            <Col><LoginCard pushing={this.props.history}></LoginCard></Col>
          </Row>
        </Container>
      </div>
    );
  }
}


export default Login;
