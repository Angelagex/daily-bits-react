import React,{Component} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import axios from 'axios';
import uuid from 'react-uuid'
import Swal from 'sweetalert2'


import logologin from '../img/logologin.svg'
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #16161A;
    
  }
`
const LoginFlex =styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFE;

 
`;
const LoginForm= styled.form`
    padding-top: 8vw;
    padding-right: 4vw;
    padding-left: 4vw;
`;

const LoginButton=styled.button`
background: #EF4565;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 6px 18px;

position: static;
border-radius: 4px;
margin-top: 1vh;
text-decoration: none;
color: #FFFFFE;
&:hover{
    background: #c2324c;
}

@media only screen and (max-width: 767px){
    width:100%
}
`;

const ButtonLoginH1=styled.h1`

    margin-top: 5vh;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
      
    
    `;

const HrLogin=styled.hr`
border: 1px solid #94A1B2;
margin-top: 2vh;`;


const LoginLabel=styled.label`
color: #FFFFFE;
padding-left: 4vw;
padding-right: 4vw;`;

const LoginLabelP=styled.p`
align-self: flex-start;
    text-indent: 4vw;`;
const LoginEmail=styled.input` 
padding: 12px 16px;
border-radius: 4px;
position: static;

font-size: 16px;
line-height: 24px;
@media only screen and (max-width: 767px){
    width:90%
}`;
const LoginRegistrar=styled.a`
color: #2CB67D;
display: inline;
box-shadow: none    
text-decoration: none;`
    ;

const LoginH1G=styled.h2`
font-size: 16px;
text-align:center;
margin-left:6px;
`;
const url='http://localhost:4000/data';


export default class Registro extends Component {
        constructor(){
            super();
            this.state={
                data:[],
                form:{
                    
                    nombre:'',
                    apellidos:'',
                    username:'',
                    password:''
                         
                }
            }

        }
    handleChangeR = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form) 
    }
    
RegistrarUsuario=async() =>{
    await axios.post(url,{
        id:uuid,
        nombre: this.state.form.nombre,
        apellidos: this.state.form.apellidos,
        username: this.state.form.username,
        password: this.state.form.password
    }).then(response=>{
        if(response.length>0 && response.status === 200){
            
            Swal.fire(
                    'Usuario Creado',
                    'El usuario se Creo correctamente',
                    'success'
                )
            
            }else {
                Swal.fire({
                    type: 'error',
                    title: 'Error',
                    text: 'Hubo un error, vuelve a intentarlo'
                })
        }
        
        
    }).catch(error=>{
        
        console.log(error.message);
        Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
    })
}
handlePrevent= e=>{
    e.preventDefault();
}
    render() {
        return (
            <>
            <GlobalStyle />
          <LoginForm onSubmit={this.handlePrevent}>
            <LoginFlex>
                <figure>
                        <img src={logologin} id="logo" alt="" />
                    </figure>
                
                <ButtonLoginH1>Registro</ButtonLoginH1>
            </LoginFlex>
           
    
            <HrLogin />
            <LoginLabel htmlFor="nombre">
                <LoginLabelP>Nombre</LoginLabelP>
                <LoginEmail type="text" name="nombre" id="nombre" placeholder="Nombres"  onChange={this.handleChangeR}  required ></LoginEmail><br /><br />

            <LoginLabel htmlFor="apellidos">
                <LoginLabelP>Apellidos</LoginLabelP>
                <LoginEmail type="text" name="apellidos" id="apellido_paterno" placeholder="Apellidos"  onChange={this.handleChangeR}  required ></LoginEmail><br /><br />
                 
            
            <LoginLabel htmlFor="username"><LoginFlex>
                <LoginLabelP>Nombre de Usuario </LoginLabelP>
                <LoginEmail type="text" name="username" id="username" placeholder="Ingrese Nombre de usuario"  onChange={this.handleChangeR}  required ></LoginEmail><br /><br />
                <LoginLabelP>Contaseña</LoginLabelP>
                <LoginEmail type="password" name="password" onChange={this.handleChangeR} id="password" placeholder="Ingrese su Contraseña"   required ></LoginEmail><br /><br />
                <LoginButton onClick={()=>this.RegistrarUsuario()}> <LoginH1G>Registrar</LoginH1G></LoginButton>
                <LoginRegistrar href="/" id="register">Regresar</LoginRegistrar>
                <br />
                
            </LoginFlex> </LoginLabel></LoginLabel></LoginLabel>
        </LoginForm>
            </>
        )
    }
}
