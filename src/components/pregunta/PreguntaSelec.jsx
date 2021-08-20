import React, { Component } from 'react';
import styled from 'styled-components';
import '../../styles/Styles.css';



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
const PreguntaSelect = styled.div`
 
        
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        margin-top: 13px;
        cursor: pointer;
        top: 12px;
        letter-spacing: 0.005em;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
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
  &:focus-within {
            border-color: var(--color-green);
        }
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
     position: absolute;
    opacity: 0;
    cursor: pointer;
    `
    const Span = styled.span`
    position: absolute;
    top: 12px;
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


const preguntasDB = 'https://gist.githubusercontent.com/gejocad/b07d390e21f55663e95c7ff741884414/raw/71ea594519317104f500611611a9837148f5fcf0/preguntasSelecDB.json';


 class PreguntaSelec extends Component {
    state = {
        preguntas: [
          {
            id:  "",
            avatar: "",
            pregunta: "",
            res1: "",
            res2: "",
            res3: "",
            resCorrect: ""
          }
        ],
        cuenta: 0
      }

      componentDidMount() {
  
        fetch(preguntasDB).then(res => res.json())
          .then(res => {
            this.setState({
              preguntas: res.preguntas
            }, this.activador);
        });
      }

      activador = () => {
        const { preguntas } = this.state;
        
        if(preguntas.length > 0) {
          const cuenta = Math.floor(Math.random() * preguntas.length);
          this.setState({
            cuenta
          })
        }
      }
    render() {
        const { preguntas, cuenta } = this.state;
        const check = "0";
        const pregunta = preguntas[cuenta];

        return (
            <ContenedorPrincipal>
                  <Pregunta>
                    <Avatar src={pregunta.avatar} alt="calcelar" border="0" />
                    <PreguntaTexto>{pregunta.pregunta}</PreguntaTexto>
                </Pregunta>
                <Preguntas>
                    <Container className="custom-radio-checkbox"><PreguntaSelect>{pregunta.res1}</PreguntaSelect>
                        <Input className="custom-radio-checkbox__input" type="radio" name="answer"/>
                        <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio"/>
                    </Container>
                </Preguntas>
                <Preguntas>
                   <Container className="custom-radio-checkbox"><PreguntaSelect>{pregunta.res2}</PreguntaSelect>
                        <Input className="custom-radio-checkbox__input" type="radio" name="answer"/>
                        <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio"/>
                    </Container>
                </Preguntas>
                <Preguntas>
                    <Container className="custom-radio-checkbox"><PreguntaSelect>{pregunta.res1}</PreguntaSelect>
                        <Input className="custom-radio-checkbox__input" type="radio" name="answer"/>
                        <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio"/>
                    </Container>
                </Preguntas>
        </ContenedorPrincipal>
        )
    }
}

export default PreguntaSelec;
