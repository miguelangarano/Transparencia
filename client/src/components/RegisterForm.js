import React, {Component} from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
}from 'reactstrap';
import axios from 'axios';

class RegisterForm extends Component{

    state={
        correo:'',
        nombre:'',
        fechaNac:'',
        ocupacion:'',
        pais:'',
        ciudad:''
    }


    onCrearClick(){
        axios.post('/api/users',{
            correo:this.state.correo,
            nombre:this.state.nombre,
            fechaNac:this.state.fechaNac,
            ocupacion:this.state.ocupacion,
            pais:this.state.pais,
            ciudad:this.state.ciudad
        }).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    handleCorreo(event){
        this.setState({
            correo:event.target.value
        })
    }

    handleNombre(event){
        this.setState({
            nombre:event.target.value
        })
    }

    handleFecha(event){
        this.setState({
            fechaNac:event.target.value
        })
    }

    handleOcupacion(event){
        this.setState({
            ocupacion:event.target.value
        })
    }

    handlePais(event){
        this.setState({
            pais:event.target.value
        })
    }

    handleCiudad(event){
        this.setState({
            ciudad:event.target.value
        })
    }



    render(){
        return(
            <Form>
                <FormGroup>
                    <Label>Correo</Label>
                    <Input type='email' placeholder='micorreo@correo.com' onChange={this.handleCorreo.bind(this)}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input type="text" placeholder="Nombre Completo" onChange={this.handleNombre.bind(this)} />
                </FormGroup>
                <FormGroup>
                    <Label>Fecha de Nacimiento</Label>
                    <Input type="text" placeholder="Fecha de Nacimiento" onChange={this.handleFecha.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Ocupacion</Label>
                    <Input type="text" placeholder="Ocupacion" onChange={this.handleOcupacion.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Pais</Label>
                    <Input type="text" placeholder="Pais" onChange={this.handlePais.bind(this)}/>
                </FormGroup>
                <FormGroup>
                    <Label>Ciudad</Label>
                    <Input type="text" placeholder="Ciudad" onChange={this.handleCiudad.bind(this)}/>
                </FormGroup>
                <Button color='primary' onClick={()=>this.onCrearClick()}>Crear Perfil</Button>
            </Form>
        );
    }
}

export default RegisterForm;