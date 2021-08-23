import React from 'react';
import AppLogin from '../../components/login/AppLogin';
import '../../styles/Styles.css'

import styled from 'styled-components';

const Body = styled.div`
background-color: var(--color-black);
color: var(--color-white);
font-family: var(--font-family);  
display: flex;
flex-direction:column;
align-items: center;`


const Login = () => {
    return (
        <Body>
            <AppLogin/>
        </Body>
    )
}

export default Login;