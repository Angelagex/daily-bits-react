import React from 'react'
import styled from 'styled-components';
import '../../styles/Styles.css'




const Barra = styled.div`
margin: 15px;
display: flex;
flex-direction: row;
width: 100%;
height: 13px;
justify-content: space-between;
`
const ContCancel = styled.p`

margin: 15px;
color: var(--color-white);
`


const ContVida = styled.p`
display: flex;
flex-direction: row;  
width: 15px;
height: 20px;
margin: 15px;
color: var(--color-white);
`




const SignosVitales = () => {

      return (
          <>
          <ContCancel>
              <img src="https://i.ibb.co/X3wnbvp/calcelar.png" alt="calcelar" border="0" />
            </ContCancel>
            <Barra>
              <img src="https://i.ibb.co/BVXNy8s/Progress-4.png" alt="Progress" border="0" />
            </Barra>
            <ContVida>
            <img src="https://i.ibb.co/pZhJP23/corazon.png" alt="corazon"/>4
            </ContVida>
          </>
      )
  
}
export default SignosVitales