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
const Container = styled.label.attrs((/* props */) => ({ tabIndex: 0 }))`

    
    & > Input.custom-radio-checkbox__input {
        display: none;
        }

    & > Span.custom-radio-checkbox__show {
        display: inline-block;
        margin-left: auto;
        width: 25px;
        height: 25px;
        margin-right: 1rem;
        background-size: cover;
        }
    `

    const Input = styled.input`
    `
    const Span = styled.span`
    position: absolute;
    right: 8px; 
    height: 25px;
    width: 25px;
    border-radius: 50%;   

    & {
        background-image: url("https://gejocad.github.io/DailyBits/img/radio-button.png");    
        }
    ${Input}:checked + &{
        background-image: url("https://gejocad.github.io/DailyBits/img/radio-button-active.png");
    }
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
                    <Container className="custom-radio-checkbox">Pregunta 1
                        <Input className="custom-radio-checkbox__input" type="radio" name="answer"/>
                        <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio"/>
                    </Container>
                </Preguntas>
                <Preguntas>
                   <Container className="custom-radio-checkbox">Pregunta 2
                        <Input className="custom-radio-checkbox__input" type="radio" name="answer"/>
                        <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio"/>
                    </Container>
                </Preguntas>
                <Preguntas>
                    <Container className="custom-radio-checkbox">Pregunta 3
                        <Input className="custom-radio-checkbox__input" type="radio" name="answer"/>
                        <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio"/>
                    </Container>
                </Preguntas>
            </ContenedorPrincipal>
        );
    
}

