import React, { useContext } from 'react';
import styled from 'styled-components';
import '../../styles/Styles.css';
import ThemeContext from "../../Context/theme";

const ContenedorPrincipal = styled.div`

box-sizing: border-box;
`

const Pregunta = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: row;`

const Avatar = styled.img`
    width: 112px;
    height: 238px;
    margin-top: 30px;

`
const PreguntaTexto = styled.h1`
border-width: 2px;
`

const Preguntas = styled.a`
    display: flex;
  position:relative;
  color: var(--color-white);  
  background: var(--color-neutral);
  border-color: var(--color-white);
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  border-radius: 4px;
  width: 328px;
  height: 56px;
  margin-top: 15px; 
  padding-left: 15px;
  text-decoration: none;
`
const Container = styled.label`
    
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-top: 13px;
    cursor: pointer;

    letter-spacing: 0.005em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;`

    const Input = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    `
    const Span = styled.span`
    position: absolute;
    right: 8px;
    height: 25px;
    width: 25px;
    background-image:url("https://gejocad.github.io/DailyBits/img/radio-button.png");
    border-radius: 50%;   
    `



export default function PreguntaSelec()  {
    
        const theme = useContext(ThemeContext);
        return (
            <ContenedorPrincipal style={theme}>
                <Pregunta>
                    <Avatar src="https://i.ibb.co/Wcx3y78/avatar-1.png" alt="calcelar" border="0" />
                    <PreguntaTexto>Prueba pregunta</PreguntaTexto>
                </Pregunta>
                <Preguntas>
                    <Container>
                        <Input/>Pregunta 1
                        <Span/>
                    </Container>
                </Preguntas>
                <Preguntas>
                    <Container>
                        <Input/>Pregunta 2
                        <Span/>
                    </Container>
                </Preguntas>
                <Preguntas>
                    <Container>
                        <Input/>Pregunta 3
                        <Span/>
                    </Container>
                </Preguntas>
            </ContenedorPrincipal>
        );
    
}

