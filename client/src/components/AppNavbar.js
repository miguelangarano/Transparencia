import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button
} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false,
    toLogin:false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  onClickLogin(){
      this.props.pushing.push('/login');
  }

  onClickRegister(){
    this.props.pushing.push('/register');
}

  render() {

    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Transparencia</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline color="primary" onClick={()=>this.onClickLogin()}>Ingresa</Button>
                </NavItem>
                <NavItem>
                  <Button outline color="success" onClick={()=>this.onClickRegister()}>Regístrate</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;