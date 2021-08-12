import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cursos = () => {

    const Body = styled.section`
    background-color: #16161A;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    box-sizing: border-box;
    width:100%;
    height:100vh;
    `
    const Container1 = styled.div`
    padding-top: 5vw;
    padding-right: 4vw;
    padding-left: 4vw;
    margin-bottom: 4vh;

    &.flex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: #FFFFFE;
    }
    &>div.flex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: #FFFFFE;
    }
    `

    const Container2 = styled.div`
    padding-left: 13vw;
    padding-right: 13vw;
    margin-top: 2vh;

    &.flex {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: #FFFFFE;
    }
    `

    const Linka = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFE;
    font-family: Nunito;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.005em;
    color: #FFFFFE;
    
    &.html{
        width: 80%;
        margin-top: 4vh;
    }

    &.icons{
        width: 50%;
        margin-top: 4vh;
    }

    &>p{
        margin-top: 1vh;
    }
    
    `

    return (
        <Body>
             <Container1>
                <div className="flex">
                    <p>Practica tus conocimientos en la categoría que prefieras</p>
                </div>
                <Container2 className="flex">
                    <Linka to="/pregunta" className="html" id="html">
                        <img src="https://i.ibb.co/K9f7rb0/html.png" alt="" />
                    </Linka>
                    <Linka to="/pregunta" className="icons flex2" id="css">  
                        <img src="https://i.ibb.co/ZJ0cVxg/css.png" alt="" />
                    </Linka>
                    <Linka to="/pregunta" className="icons flex2" id="js">
                        <img src="https://i.ibb.co/MPbrqRp/js.png" alt="" />
                    </Linka>
                    <Linka to="/" className="icons flex2">
                        <img src="https://i.ibb.co/nQX5Rmz/ux.png" alt="" />
                    </Linka>
                    <Linka to="/" className="icons flex2">
                        <img src="https://i.ibb.co/yh2Rtg0/figma.png" alt="" />
                    </Linka>
                </Container2>
            </Container1>
        </Body> 
    )
}

export default Cursos
