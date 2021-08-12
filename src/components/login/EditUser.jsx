import React,{useEffect, useRef, useState} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import axios from 'axios';
import Cookies from 'universal-cookie'
import Swal from 'sweetalert2'

import { useHistory } from 'react-router-dom'

import logologin from '../img/logologin.svg'


const cookies= new Cookies();
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

const url='http://localhost:4000/data';
const EditUsers = (props) => {

    const nombreRef = useRef('');
    const apellidosRef = useRef('');
    const usernameRef = useRef('');
    const passwordRef = useRef('');


    const history = useHistory()
    const [users, setUsers] = useState([])
    

    const { id, nombre,apellidos, username, password } = users

    

    useEffect(() => {
      userInfo()
        .then(users => setUsers(users))
    })

  
    const userInfo = async () => {
      const url = `http://localhost:4000/data/${props.match.params.id}`
      const res = await axios.get(url)
      const data = await res.data
      console.log("Editar",data)
      return data
    }
  const  handleChange = async e => {
        setUsers({
            ...users,
            [ e.name ]: e.value

        });
        
    }
    const editarUsuario = async e => {
        
        const nuevoUser = usernameRef.current.value,
            nuevoNombre = nombreRef.current.value,
            nuevoApellidos = apellidosRef.current.value,
            nuevoPassword = passwordRef.current.value

        const editarUser = {
            id,
            username:nuevoUser, 
             
            nombre:nuevoNombre, 
            apellidos:nuevoApellidos,
            passsword:nuevoPassword
        }

        
        try {
            const url = `http://localhost:4000/data/${props.match.params.id}`;
            const resultado = await axios.put(url, editarUser);

            if (resultado.status === 200) {
                Swal.fire(
                    'Usuario Editado',
                    'El usuario se editó correctamente',
                    'success'
                )
                
            }
            window.location.href="./usuarios";
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
        }
      
        history.push('/');

    }
   const handlePreventE= e=>{
        e.preventDefault();
    }
    
    const cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('apellidos', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href="./";
    }
    
      
        return (
            <>
            <GlobalStyle />
          <LoginForm onSubmit={handlePreventE}>
            <LoginFlex>
                <figure>
                        <img src={logologin} id="logo" alt="" />
                    </figure>
                    <LoginButton onClick={()=>cerrarSesion()} >Cerrar Sesion</LoginButton>
                <ButtonLoginH1>Editar Usuario</ButtonLoginH1>
            </LoginFlex>
           
    
            <HrLogin />
            <LoginLabel htmlFor="nombre">
                <LoginLabelP>Nombre</LoginLabelP>
                <LoginEmail type="text" name="nombre" id="nombre" defaultValue={users.nombre}  ref={nombreRef} onChange={handleChange}  required ></LoginEmail><br /><br />

            <LoginLabel htmlFor="apellidos">
                <LoginLabelP>Apellidos</LoginLabelP>
                <LoginEmail type="text" name="apellidos" id="apellido" ref={apellidosRef} defaultValue={users.apellidos}  onChange={handleChange}  required ></LoginEmail><br /><br />
                 
            
            <LoginLabel htmlFor="username"><LoginFlex>
                <LoginLabelP>Nombre de Usuario </LoginLabelP>
                <LoginEmail type="text" name="username" id="username" defaultValue={users.username} ref={usernameRef} onChange={handleChange}  required ></LoginEmail><br /><br />
                <LoginLabelP>Contaseña</LoginLabelP>
                <LoginEmail type="password" name="password" onChange={handleChange} ref={passwordRef} defaultValue={users.password} id="password"    required ></LoginEmail><br /><br />
                <LoginButton onClick={()=>editarUsuario()}> <LoginH1G>Editar</LoginH1G></LoginButton>
                <br />
                
            </LoginFlex> </LoginLabel></LoginLabel></LoginLabel>
            
        </LoginForm>
            </>
        )
    }

    export default EditUsers