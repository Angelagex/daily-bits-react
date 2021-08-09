import React,{Component} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import axios from 'axios';
import uuid from 'react-uuid'



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

const LoginH1G=styled.h2`
font-size: 16px;
text-align:center;
margin-left:6px;
`
const url='http://localhost:4000/usuarios';


export default class Registro extends Component {
        constructor(){
            super();
            this.state={
                data:[],
                form:{
                    id:'',
                    nombres:'',
                    apellidos:'',
                    username:'',
                    password:''

                }
            }

        }
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form) 
    }
    
RegistrarUsario=async() =>{
    await axios.post(url,{
        id:uuid,
        nombre: this.state.form.nombre,
        apellidos: this.state.form.apellidos,
        email: this.state.form.email,
        password: this.state.form.password
    }).then(response=>{
        if(response.length>0){
        alert('usuario registrado');}
         else{
            alert('no se pudo registrar el usuario, intentelo nuevamente')
        }

    }).catch(error=>{
        
        console.log(error.message);
    })
}

    render() {
        return (
            <>
            <GlobalStyle />
          <LoginForm>
            <LoginFlex>
                <figure>
                        <img src={logologin} id="logo" alt="" />
                    </figure>
                
                <ButtonLoginH1>Registro</ButtonLoginH1>
            </LoginFlex>
           <LoginButton onClick={()=>this.Login()}><img src="https://i.ibb.co/pWcj0z0/icon-google.png" alt="" srcSet="" /> <LoginH1G>Continuar con Google</LoginH1G></LoginButton>
    
            <HrLogin />
            <LoginLabel htmlFor="nombre">
                <LoginLabelP>Nombre</LoginLabelP>
                <LoginEmail type="text" name="nombre" id="nombre" placeholder="Nombres"  onChange={this.handleChange}  required ></LoginEmail><br /><br />

            <LoginLabel htmlFor="apellidos">
                <LoginLabelP>Apellidos</LoginLabelP>
                <LoginEmail type="text" name="apellidos" id="apellido_paterno" placeholder="Apellidos"  onChange={this.handleChange}  required ></LoginEmail><br /><br />
                 
            
            <LoginLabel htmlFor="email"><LoginFlex>
                <LoginLabelP>Correo Electrónico</LoginLabelP>
                <LoginEmail type="email" name="email" id="username" placeholder="Ingrese su Correo Electrónico"  onChange={this.handleChange}  required ></LoginEmail><br /><br />
                <LoginLabelP>Contaseña</LoginLabelP>
                <LoginEmail type="password" name="password" onChange={this.handleChange} id="password" placeholder="Ingrese su Contraseña"   required ></LoginEmail><br /><br />
                <LoginButton onClick={()=>this.RegistrarUsario()}> <LoginH1G>Registrar</LoginH1G></LoginButton>
                <br />
                
            </LoginFlex> </LoginLabel></LoginLabel></LoginLabel>
        </LoginForm>
            </>
        )
    }
}
