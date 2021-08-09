import React from 'react';
import NavBar from '../../components/pregunta/SignosVitales';
import Comprobar from '../../components/pregunta/Comprobar';
import styled from 'styled-components';
import '../../styles/Styles.css'



const Body = styled.body`
background-color: var(--color-black);
color: var(--color-white);
font-family: var(--font-family);  
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`
const Div = styled.div`
paddign-top: 15px;
display: flex;
flex-direction: row;
width: 50%;
height: 25px;
justify-content: space-between;`



const App = () => {
    return (
        <Body>
            <Div>
            <NavBar/>,
            <Comprobar/>
            </Div>
        </Body>
    );
}

export default App;