import React from 'react';
import Animacion from '../../components/login/AddUser'

import styled from 'styled-components';

const Body = styled.div`
background-color: var(--color-black);
color: var(--color-white);
font-family: var(--font-family);  
display: flex;
flex-direction:column;
align-items: center;`

const Registro = () => {
    return (
        <Body>
            <Animacion/>
        </Body>
    )
}

export default Registro