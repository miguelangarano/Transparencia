import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from '../components/AppNavbar';
import { Container, Row, Col } from 'reactstrap';
import './Home.css';

class Home extends Component {

  state={
    pushing:this.props.history
  }
  

  render() {
    return (
      <div>
        <AppNavbar pushing={this.state.pushing}></AppNavbar>
        <Container className='container'>
          <Row>
            <Col><h1 align="center">Bienvenido a TRANSPARENCIA</h1></Col>
          </Row>
          <Row>
            <Col><br/><br/><br/><br/><p align="justify">Transparencia es una plataforma en la que la comunidad comparte, difunde, analiza y aprende las acciones gubernamentales tanto legales como económicas. Los expertos en cierta materia le explica a resto de la comunidad, no tan experta, sobre un tema en concreto para poder hacer una sociedad más informada y organizada.</p></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
