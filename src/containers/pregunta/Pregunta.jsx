import React from 'react';
import SignosVitales from '../../components/pregunta/SignosVitales';
import Comprobar from '../../components/pregunta/Comprobar';
import styled from 'styled-components';
import '../../styles/Styles.css';
import PreguntaSelec from '../../components/pregunta/PreguntaSelec'



const Body = styled.body`
background-color: var(--color-black);
color: var(--color-white);
font-family: var(--font-family);  
display: flex;
flex-direction:column;
align-items: center;

`
const Div = styled.div`
display: flex;
flex-direction: row;
height: 20px;
justify-content: space-between;
`



const App = () => {
    return (
        <Body>
            <Div>
            <SignosVitales/><Comprobar/>
            </Div>
            <PreguntaSelec/>
            
        </Body>
    );
}

export default App;