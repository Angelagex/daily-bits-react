import React from 'react'
import styled from 'styled-components';
import '../../styles/Styles.css';
import { Link } from 'react-router-dom';


const Container = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: row;
width: auto;

progress[value] {
  appearance: none;
  ::-webkit-progress-bar {
    height: 10px;
    width: 240px;
    border-radius: 20px;
    background: #eee;
  }
  ::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background: var(--color-green);
  }
}`


const Barra = styled.div`
margin: 15px;
display: flex;
flex-direction: row;
width: 100%;
height: 13px;
justify-content: space-between;
`
const ContCancel = styled(Link)`

margin-top: 10px;
color: var(--color-white);
`


const ContVida = styled.p`
display: flex;
flex-direction: row;  
width: 15px;
height: 20px;
margin: 10px;
transform:translateX(65px);
color: var(--color-white);
`


 

const SignosVitales = () => {

 let barras = localStorage.getItem('barras')
 
 let vidas = localStorage.getItem('vidas')

  return (
    
      <Container>
          <ContCancel to="/">
              <img src="https://i.ibb.co/X3wnbvp/calcelar.png" alt="calcelar" border="0" />
            </ContCancel>
            <Barra>
              <progress value={barras} max="10"  alt="Progress" border="0" />
            </Barra>
            <ContVida>
            <img src="https://i.ibb.co/pZhJP23/corazon.png" alt="corazon"/>{vidas}
            </ContVida>
          
          </Container>
  );
};
 
export default SignosVitales;