import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import styled ,{createGlobalStyle} from 'styled-components';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import AddUser from './AddUser';
import Cookies from 'universal-cookie';

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
const TableIni=styled.table`

`


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
const cookies= new Cookies();
const Inicio = (props) => {

  const history = useHistory()
  const [user, setUser] = useState([])

  useEffect(() => {
    userInfo()
      .then(usuario => setUser(usuario))
  }, [])

  const userInfo = async() => {
  const url = `http://localhost:4000/data`
  const resp = await axios.get(url)
  const data = await resp.data
  console.log(data)
  return data
}

const eliminarUser= id => {
  console.log('eliminando', id);

  // TODO: Eliminar los registros
  Swal.fire({
    title: '¿Estas Seguro?',
    text: "Una vez eliminado un usuario no podras recuperarlo",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar',
    cancelButtonText: 'Cancelar'

  }).then(async (result) => {
    if (result.value) {
      try {

        const url = `http://localhost:4000/data/${id}`;
        const resultado = await axios.delete(url);
        if (resultado.status === 200) {
          Swal.fire(
            'Eliminado!',
            'El Usuario se ha eliminado',
            'success'
          )
          history.push('/')
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
  })
}


const handleDelete = (id) => {
  eliminarUser(id)
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
  <LoginButton onClick={()=>cerrarSesion()} >Cerrar Sesion</LoginButton>
    {
      user.map(users => {
        return (
          <LoginFlex key={users.id}>
            
            <table>
              <tr>
                <td>Nombres: {users.nombre}</td></tr><br />
               <tr> <td>Apellidos: {users.apellidos}</td></tr><br />
               <tr><td>Usuario: {users.username}</td>
                
                
              </tr>
            </table>
            <Link to="" >

              
               
            </Link>
           

              <LoginButton 
                onClick={() => handleDelete(users.id)}>
                eliminar
              </LoginButton> 
              

              <Link
                to={`/edit/${users.id}`}
                className="btn btn-success mr-2"
              ><LoginButton w={6} h={6} color="green.500" >editar </LoginButton></Link>

            
          </LoginFlex>
        )
      })
    }

  </>
)
}

export default Inicio