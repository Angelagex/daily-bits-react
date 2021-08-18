import React from 'react'
import styled from 'styled-components';
import Navbar from '../../components/home/Navbar'
import Usuario from '../../components/usuario/Usuario'

const Body = styled.div`
background-color: var(--color-black);
color: var(--color-white);
font-family: var(--font-family);  
display: flex;
flex-direction:column;
align-items: center;

`

const Perfil = () => {
    return (
        <Body>
            <Usuario/>
            <Navbar/>  
        </Body>
    )
}

export default Perfil 