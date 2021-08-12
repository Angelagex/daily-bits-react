import React from 'react'
import styled from 'styled-components';

const Usuario = () => {

    const Container = styled.div`
        padding-top: 5vw;
        padding-right: 4vw;
        padding-left: 4vw;
        margin-bottom: 4vh;
    `
    const Container2 = styled.div`
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        color: #FFFFFE;
        justify-content: flex-start;

        &>h2 {
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
    const Flex = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding-left: 13vw;
        padding-right: 13vw;
        margin-top: 2vh;
    `

    const Flex2 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 22px;
        text-align: center;
        letter-spacing: 0.005em;
        width: 80%;
        margin-top: 4vh;

        &>h5 {
            font-family: Inter;
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 24px;
            margin-top: 2vh;
            margin-bottom: 0;
        }

        &>p {
            font-family: Inter;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 24px;
            margin-top: 0.5vh;
        }

        &>a {
            font-family: Inter;
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            text-decoration: none;
            color: #EF4565;
        }
    `

    return (
        <Container>
            <Container2>
                <h2>Perfil</h2>
            </Container2>
            <Flex >
                <Flex2>
                    <img src="https://i.ibb.co/MNfqxSW/user.png" alt="" />
                    <h5>Francisco Javier</h5>
                    <p>francisco.javier@gmail.com</p>
                    <a href="http://127.0.0.1:5500/Daily%20Bits/loading.html">Cerrar Sesión</a>
                </Flex2>
            </Flex>
        </Container>
    )
}

export default Usuario
