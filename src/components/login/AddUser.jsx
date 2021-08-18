import React,{useState} from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import uuid from 'react-uuid'
import { ProFileUpload } from '../../selectors/ProfileUpload'
import Swal from 'sweetalert2'
import '../../styles/Styles.css'

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
const LoginImg= styled.input`
 height: 34px;
    padding: 6px 12px;
    border-radius: 17px;
    background-color:#9875F3;
    color: white;
    width: 170px;
    text-align: center;
    line-height: 22px;
    cursor: pointer;
    
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
    width:40%
}
`;

const ButtonLoginH1=styled.h1`

    margin-top: 5vh;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 39px;
      
    
    `;
const LoginLabelPImg= styled.label`
 height: 34px;
    padding: 6px 12px;
    border-radius: 17px;
    background-color:#9875F3;
    color: white;
    width: 170px;
    text-align: center;
    line-height: 22px;
    cursor: pointer;
    
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
box-shadow: none;    
text-decoration: none;`
    ;

const LoginH1G=styled.h2`
font-size: 16px;
text-align:center;
margin-left:6px;
`;
const url='https://apidaily.herokuapp.com/data';

const AddUsers = ({ users }) => {

    const history = useHistory()
    let proFileUrl = []
    const [user, setUser] = useState({
        id: "",
        
        nombre: "",
        apellidos: "",
        username:"",
        password:"",
        imageUrl: ""
    })

    const { id, nombre,apellidos,username, password,imageUrl} = user
    

    const handleInputChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        ProFileUpload(file).then(response => {
            document.getElementById('imageUrl').value = response;
            proFileUrl = response
            console.log(response);
        }).catch(error => {
            console.log(error.message);
        })
    }

    const handlePictureClick = () => {
        document.querySelector('#fileProfile').click();
    }


    const AddUser = async () => {


        try {
            const resultado = await axios.post(`https://apidaily.herokuapp.com/data`, {
                id:uuid,
                nombre: nombre,
                apellidos:apellidos,
                username: username,
                password:password,
                imageUrl: proFileUrl
                
            });

            if (resultado.status === 201) {
                Swal.fire(
                    'Usuario Creado',
                    'El Usuario se creo correctamente',
                    'success'
                )
                history.push('/login')
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error, vuelve a intentarlo'
            })
        }

    }
   const  handlePrevent= e=>{
        e.preventDefault();
    }



    return (
        <>
        <GlobalStyle />
      <LoginForm onSubmit={handlePrevent}>
        <LoginFlex>
            <figure>
                    <img src={logologin} id="logo" alt="" />
                </figure>
            
            <ButtonLoginH1>Registro</ButtonLoginH1>
        </LoginFlex>
       

        <HrLogin />
        <LoginLabel htmlFor="nombre"><LoginFlex>
            <LoginLabelP>Nombre</LoginLabelP>
            <LoginEmail type="text" name="nombre" id="nombre" placeholder="Nombres"  onChange={handleInputChange}  required ></LoginEmail><br /><br /></LoginFlex>

        <LoginLabel htmlFor="apellidos"><LoginFlex>
            <LoginLabelP>Apellidos</LoginLabelP>
            <LoginEmail type="text" name="apellidos" id="apellido_paterno" placeholder="Apellidos"  onChange={handleInputChange}  required ></LoginEmail><br /><br /> </LoginFlex>
             
        
        <LoginLabel htmlFor="username"><LoginFlex>
            <LoginLabelP>Nombre de Usuario </LoginLabelP>
            <LoginEmail type="text" name="username" id="username" placeholder="Ingrese Nombre de usuario"  onChange={handleInputChange}  required ></LoginEmail><br /><br /> </LoginFlex>
            <LoginFlex><LoginLabelP>Contaseña</LoginLabelP>
            <LoginEmail type="password" name="password" onChange={handleInputChange} id="password" placeholder="Ingrese su Contraseña"   required ></LoginEmail><br /><br />
            <LoginFlex>
                    <LoginImg
                        id="fileProfile"
                        type="file"
                        name="file"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}

                        ></LoginImg></LoginFlex>
                        <LoginImg
                        type="button"
                       
                        onClick={handlePictureClick}
                        value="Selecciona una Imagen" 
                    /> 
                    <LoginEmail  
                    name="imageUrl"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={handleInputChange} style={{ display: 'none' }}>
                    </LoginEmail><br /><br />
            <LoginButton onClick={()=>AddUser()} > <LoginH1G>Registrar</LoginH1G></LoginButton><br />
            <LoginRegistrar href="/login" id="register">Regresar</LoginRegistrar></LoginFlex> 
            <br />
            
        </LoginLabel></LoginLabel></LoginLabel>
    </LoginForm>
        </>
    )
}

export default AddUsers
