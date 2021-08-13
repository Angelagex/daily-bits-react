import React,{Component} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import axios from 'axios'
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'
import logologin from '../img/logologin.svg'
import '../../styles/Styles.css'
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
const LoginPasswordA=styled.a`
box-shadow: none;
color: #2CB67D;
`;

const LoginRegistrar=styled.a`
color: #2CB67D;
display: inline;
box-shadow: none;    
text-decoration: none;`
    ;


const url='https://apidaily.herokuapp.com/data';





    const cookies= new Cookies();
    class AppLogin extends Component {
    state={form:{
        username: '',
        password: ''
    }
    
}
componentDidMount(){
    if(cookies.get('username')){
        window.location.href="./";
        
    }
}
handleChange= async e=>{
   await this.setState({
        form:{
            ...this.state.form, [e.target.name]:e.target.value
            
        }
     
    })};
  
handlePrevent= e=>{
    e.preventDefault();
}
  
 Login=async()=>{
await axios.get(url, {params:{username:this.state.form.username, password:this.state.form.password}}).then( response=>{ 
    return  response.data;}).then(response=>{
        if(response.length>0){
            let respuesta=response[0];
            cookies.set('id',respuesta.id,{path:"/"});
            cookies.set('nombre',respuesta.nombre,{path:"/"});
            cookies.set('apellidos',respuesta.apellidos,{path:"/"});
            cookies.set('username',respuesta.username,{path:"/"});
            
            localStorage.setItem("isAuth", "true")
            Swal.fire(
                'Has iniciado sesion',
                `Bienvenido ${respuesta.nombre}`,
                'success'
            )
            localStorage.setItem("isAuth", "si")
            window.location.href="./";
            
        }else{
            alert('El usuario o la contraseña es incorrecta');
        }
    }).catch(error=>{
     console.log(error);
 }) 
console.log(this.state.value)
}
render(){
    return (
        <>
        <GlobalStyle />
      
      <LoginForm onSubmit={this.handlePrevent}>
       
        <LoginFlex>
          
            <figure>
                   
                    <img src={logologin} id="logo" alt="" />
               
                </figure>
            
            <ButtonLoginH1>Iniciar Sesión</ButtonLoginH1>
        
        </LoginFlex>
      
       <LoginButton  onClick={()=>this.Login()}><img src="https://i.ibb.co/pWcj0z0/icon-google.png" alt="icon" srcSet="" /> 
       <LoginH1G>Continuar con Google</LoginH1G></LoginButton>

        <HrLogin />
        
        <LoginLabel htmlFor="username"><LoginFlex>
           
            <LoginLabelP>Nombre de Usuario</LoginLabelP>

            <LoginEmail type="text" name="username" id="username" placeholder="Ingrese su Correo Electrónico" value={this.state.username}  onChange={this.handleChange}  required ></LoginEmail><br /><br />
           
            <LoginLabelP>Contaseña</LoginLabelP>

            <LoginEmail type="password" name="password" onChange={this.handleChange} id="password" value={this.state.password} placeholder="Ingrese su Contraseña"   required ></LoginEmail><br /><br />

           <LoginPasswordA href="/home" id="contraseña">¿Se te olvidó tu contraseña?</LoginPasswordA> <br />
            <br />
            <p>¿Aún no tienes cuenta? <LoginRegistrar href="/registro" id="register">Inscribirse</LoginRegistrar></p>
        </LoginFlex> </LoginLabel>
    </LoginForm>
        </>
    )
}
    }
export default AppLogin;

   
