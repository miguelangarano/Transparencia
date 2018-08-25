import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LoginCard from './components/LoginCard';
import AppNavbar from './components/AppNavbar';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Container styles={styles.containerStyle}>
          <Row style={styles.rowStyle}>
            <Col></Col>
            <Col><LoginCard></LoginCard></Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const styles={
  rowStyle:{
    margin: 'auto',
    //backgroundColor: 'red'
  },
  containerStyle:{
    paddingTop: 30,
    margin: 'auto',
    backgroundColor: 'blue'
  }
}

export default App;
