import React,{Component} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import axios from 'axios'
import Cookies from 'universal-cookie'

import logologin from './img/logologin.svg'
import {Link} from 'react-router-dom'
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
const LoginPasswordA=styled.button`

color: #2CB67D;
`;

const LoginRegistrar=styled.button`
color: #2CB67D;
display: inline;
    text-decoration: none;`;


const url='http://localhost:4000/usuarios';

const cookies= new Cookies();
class AppLogin extends Component {
    state={form:{
        username: '',
        password: ''
    }
    
}
componentDidMount(){
    if(cookies.get('email')){
        window.location.href="./home";
    }
}
handleChange= async e=>{
   await this.setState({
        form:{
            ...this.state.form, [e.target.name]:e.target.value

        }
    })}
 Login=async()=>{
await axios.get(url, {params:{username:this.state.form.email, password:this.state.form.password}}).then( response=>{
    return  response.data;}).then(response=>{
        if(response.length>0){
            let respuesta=response[0];
            cookies.set('id',respuesta.id,{path:"/"});
            cookies.set('nombre',respuesta.nombre,{path:"/"});
            cookies.set('apellidos',respuesta.apellidos,{path:"/"});
            cookies.set('username',respuesta.username,{path:"/"});
            alert(`Bienvenido ${respuesta.nombre}`)
            window.location.href="./home";
        }else{
            alert('El usuario o la contraseña es incorrecta');
        }
    })

 
 .catch(error=>{
     console.log(error);
 }) 

}
   render(){
    return (
        <>
        <GlobalStyle />
      
      <LoginForm>
       
        <LoginFlex>
          
            <figure>
                   
                    <img src={logologin} id="logo" alt="" />
               
                </figure>
            
            <ButtonLoginH1>Iniciar Sesión</ButtonLoginH1>
        
        </LoginFlex>
      
       <LoginButton onClick={()=>this.Login()}><img src="https://i.ibb.co/pWcj0z0/icon-google.png" alt="icon" srcSet="" /> 
       <LoginH1G>Continuar con Google</LoginH1G></LoginButton>

        <HrLogin />
        
        <LoginLabel htmlFor="username"><LoginFlex>
           
            <LoginLabelP>Nombre de Usuario</LoginLabelP>

            <LoginEmail type="text" name="username" id="username" placeholder="Ingrese su Correo Electrónico"  onChange={this.handleChange}  required ></LoginEmail><br /><br />
           
            <LoginLabelP>Contaseña</LoginLabelP>

            <LoginEmail type="password" name="password" onChange={this.handleChange} id="password" placeholder="Ingrese su Contraseña"   required ></LoginEmail><br /><br />

           <Link to="/home" id="contraseña"><LoginPasswordA>¿Se te olvidó tu contraseña?</LoginPasswordA></Link> <br />
            <br />
            <p>¿Aún no tienes cuenta? <Link to="/registro" id="register"><LoginRegistrar>Inscribirse</LoginRegistrar></Link></p>
        </LoginFlex> </LoginLabel>
    </LoginForm>
        </>
    )
}
}
export default AppLogin
