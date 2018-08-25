import React, {Component} from 'react';
import{
    Card,
    CardBody,
    CardTitle, 
    Button,
    Container,
    FormGroup,
    Input
}from 'reactstrap';
import '../pages/Home.css';

class LoginCard extends Component{

    onLoginClick=()=>{
        
    }


    render(){
        return(
            <div>
                <Container>
                    <h2>Ingresa tus credenciales</h2>
                    <Card align="center" className='card'>
                        <CardBody>
                            <CardTitle>Correo</CardTitle>
                                <FormGroup>
                                    <Input type="email" name="email" id="email" placeholder="micorreo@correo.com" />
                                </FormGroup>
                            <CardTitle>Contraseña</CardTitle>
                                <FormGroup>
                                    <Input type="password" name="password" id="password" placeholder="*********" />
                                </FormGroup>
                            <Button color="primary" size="sm" block onClick={()=>this.onLoginClick()}>Iniciar Sesión</Button>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
    
}

export default LoginCard;