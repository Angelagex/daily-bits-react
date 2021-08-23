import React from 'react'
import styled from 'styled-components';
import '../../styles/Styles.css'
const Estadisticas = () => {

const Container = styled.div`
    padding-top: 5vw;
    padding-right: 4vw;
    padding-left: 4vw;
    margin-bottom: 4vh;
`
const Sectitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #FFFFFE;
    justify-content: flex-start;
    & h2 {
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

const Subcontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #FFFFFE;
    margin-top: 2vh;
`

const Section = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    border: 1px solid #94A1B2;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 3vh;
    font-family: Nunito;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */
    letter-spacing: 0.005em;
    & input {
        width: 12vw;
        background: none;
        border: none;
        margin-left: auto;
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFE;
        text-align: center;
    }
    & input#respuestascorrectas {
        color: #2CB67D;
    }
    & input#respuestasincorrectas {
        color: #EF4565;
    }
    & p {
        text-indent: 2vw;
    }
    
`



    return (
        <Container>
            <Sectitle>
                <h2>Estadísticas</h2>
                <p>Los últimos 7 días <img src="media/flecha.svg" alt="" /></p>
            </Sectitle>
            <Subcontainer>
                <Section class="flex2"> 
                    <img src="media/horas.svg" alt="" />
                    <p>Tiempo de estudio (horas)</p>
                    <input type="number readonly" value="1" id="horasjugadas" />
                </Section>
                <Section class="flex2"> 
                    <img src="media/respuestas.svg" alt="" />
                    <p>Respuestas contestadas</p>
                    <input type="number readonly" value="40" id="totalcontestadas" />
                </Section>
                <Section class="flex2"> 
                    <img src="media/respuestas.svg" alt="" />
                    <p>Respuestas correctas</p>
                    <input type="number readonly" value="20" id="respuestascorrectas" />
                </Section>
                <Section class="flex2"> 
                    <img src="media/respuestas.svg" alt="" />
                    <p>Respuestas incorrectas</p>
                    <input type="number readonly" value="20" id="respuestasincorrectas" />
                </Section>
            </Subcontainer>
        </Container>
    )
}

export default Estadisticas