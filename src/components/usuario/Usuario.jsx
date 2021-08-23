import React,{useState, useEffect} from 'react'

import styled from 'styled-components';
import AddUsers from '../login/AddUser';
import MostrarUser from '../login/MostrarUser';


import Cookies from 'universal-cookie';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import '../../styles/Styles.css'
const cookies= new Cookies();
const Usuario = (props) => {

    const Container = styled.div`
    
        padding-top: 5vw;
        padding-right: 4vw;
        padding-left: 4vw;
        margin-bottom: 4vh;
    `
    const Container2 = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        color: #FFFFFE;
        justify-content: flex-start;

        &>h2 {
            font-weight: 600;
            font-size: 22px;
            line-height: 30px;
            text-align: left;
            letter-spacing: 0.0015em;
            color: #FFFFFE;
            margin: 0;
            text-indent: 1vw;
        }
    `
    const Flex = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding-left: 13vw;
        padding-right: 13vw;
        margin-top: 2vh;
    `
const Img =styled.img`
 width:100px;
    height:100px;
    border-radius:160px;
    
`
;
    const Flex2 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.005em;
        width: 80%;
        margin-top: 4vh;

        &>h5 {
font-family: var(--font-family);  
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            margin-top: 2vh;
            margin-bottom: 0;
            color:white;
        }

        &>p {
            
            
font-family: var(--font-family);  
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            margin-top: 0.5vh;
            color:white;
        }

        &>a {
            
font-family: var(--font-family);  
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-decoration: none;
            color: #EF4565;
        }
    `
    
  

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
console.log(cookies.get('id',{path:"/"}));
console.log(cookies.get('nombre',{path:"/"}));
console.log(cookies.get('apellidos',{path:"/"}));
console.log(cookies.get('username',{path:"/"}));
console.log(cookies.get('imageUrl',{path:"/"}));
const cerrarSesion=()=>{
    cookies.remove('id', {path: "/"});
    cookies.remove('nombre', {path: "/"});
    cookies.remove('apellidos', {path: "/"});
    cookies.remove('username', {path: "/"});
    cookies.remove('imageUrl',{path:"/"});
    window.location.href="./login";
  }

    return (
        <Container>
            <Container2>
                <h2>Perfil</h2>
            </Container2>
            <Flex >
                <Flex2>
                    <Img src={cookies.get('imageUrl')} alt="" />
                    <h5>{cookies.get('nombre')} {cookies.get('apellidos')}</h5>
                    <p>{cookies.get('username')}</p>
                    <a  href="/login" onClick={()=>cerrarSesion()} >Cerrar Sesión</a>
                </Flex2>
            </Flex>
        </Container>
    )
}

export default Usuario
