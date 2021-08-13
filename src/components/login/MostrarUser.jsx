import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import styled ,{createGlobalStyle} from 'styled-components';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import AddUser from './AddUser';
import Cookies from 'universal-cookie';
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





const LoginButton=styled.button`
background: #EF4565;
display: flex;
flex-direction: column;
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
    width: 20%
}
`;
const LoginButton1=styled.button`
background: #EF4565;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6px 18px;

position: relative;

border-radius: 4px;
margin-top: 1vh;
text-decoration: none;
color: #FFFFFE;
&:hover{
    background: #c2324c;
}

@media only screen and (max-width: 767px){
    width: 100%
}
`;
const LoginButton2=styled.button`
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
    width: 100%
}
`;
const Table=styled.table`
	text-align: left;
border-collapse: collapse;
width: 100%;`
	



const Th=styled.th`
padding: 20px;

  &:hover
  	background-color: #369681;
	color: white;
`;

const Td=styled.td`
padding: 20px;
&:hover
  	background-color: #369681;
	color: white;
`;

const Thead=styled.thead`
text-align:right;
border-bottom: solid 5px #0F362D;
color: white;
margin-left:10px;
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
  const url = `https://apidaily.herokuapp.com/data`
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

        const url = `https://apidaily.herokuapp.com/data/${id}`;
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
  <LoginButton2 onClick={()=>cerrarSesion()} >Cerrar Sesion</LoginButton2>
    {
      user.map(users => {
        return (
          <LoginFlex key={users.id}>
            <Table>
            
            

      <Thead>Datos del Usuario</Thead>
			<tr><Th>Nombres: </Th>
				<Td>{users.nombre}</Td>
			</tr>
			<tr><Th>Apellidos: </Th> 
				<Td>{users.apellidos}</Td>
			</tr>
      <tr><Th>Nombre de Usuario: </Th>
				<Td>{users.username}</Td>
			</tr>
      
      
             
            </Table>
            

            <LoginButton 
                onClick={() => handleDelete(users.id)}>
                eliminar
              </LoginButton> 
              
               
           
           

              

              <Link
                to={`/edit/${users.id}`} 
                
              ><LoginButton1  >editar </LoginButton1></Link>

            
          </LoginFlex>
        )
      })
    }

  </>
)
}

export default Inicio