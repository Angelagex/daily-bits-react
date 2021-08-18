import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import styled ,{createGlobalStyle} from 'styled-components';
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'
import AddUsers from './AddUser';
import Cookies from 'universal-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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

border-collapse: collapse;
width: 100%;`
	



const Th=styled.th`
padding:15px;
width: 25%;
text-align: left;
vertical-align: top;
`;

const Td=styled.td`


  width: 25%;
  text-align: left;
  
`;

const Thead=styled.thead`


border-bottom: solid 5px #0F362D;
color: white;

`;
	
const Tr=styled.tr`

text-align:left;

color: white;
width:50%;
`;

const Img =styled.img`
 width:100px;
    height:100px;
    border-radius:160px;
    `


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
  cookies.remove('imageUrl',{path:"/"});
  window.location.href="./login";
}

return (
  <>
  <GlobalStyle />
  <FontAwesomeIcon icon={faSignOutAlt} onClick={()=>cerrarSesion()}  style={{ fontSize:"30px",color:"white"}}></FontAwesomeIcon>
    {
      user.map(users => {
        return (
          <>
            <Table key={users.id}>
            
            

      <Thead>Datos del Usuario</Thead>
      <tr style={{position:"absolute", marginLeft:"140px",fontSize:"30px",color:"white"}}>  <FontAwesomeIcon icon={faTrash} 
                onClick={() => handleDelete(users.id)}>
                
              </FontAwesomeIcon> 
              <Link style={{textDecoration:"none", fontSize:"30px",color:"white",marginLeft:"5px", }}
                to={`/edit/${users.id}`} 
                
              ><FontAwesomeIcon icon={faPenSquare}></FontAwesomeIcon> </Link>
               </tr><br />
			<Tr><Th>Nombres: </Th>
				<Td>{users.nombre}</Td>
			</Tr>
			<Tr><Th>Apellidos: </Th> 
				<Td>{users.apellidos}</Td>
			</Tr>
      <Tr><Th>Nombre de Usuario: </Th>
				<Td>{users.username}</Td>
			</Tr>
      <Tr><Th>Foto de Perfil: </Th>
				<Td><Img
                    
                    src={users.imageUrl}
                    
                    
                  />
             
            </Td>
			</Tr>
      <br />
      <br />
      
            
      </Table>
          
           </>
           

              

          

            
          
        )
      })
    }

  </>
)
}

export default Inicio