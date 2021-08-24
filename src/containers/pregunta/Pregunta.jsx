import React from 'react';
import SignosVitales from '../../components/pregunta/SignosVitales';import styled from 'styled-components';
import PreguntaSelec from '../../components/pregunta/PreguntaSelec'
import ThemeContext, { themes } from "../../Context/theme";



const Body = styled.div`
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
margin-right: 80px;
`



const Pregunta = () => {
    return (
        <ThemeContext.Provider value={themes}>
        <Body>
            <Div>
            <SignosVitales/>
            </Div>
            <PreguntaSelec/>
        </Body>
        </ThemeContext.Provider>
    );
}

export default Pregunta;
