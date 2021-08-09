import React from 'react'
import styled from 'styled-components';
import '../../styles/Styles.css'






const Barra = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 13px;
justify-content: space-between;
`

const ContVida = styled.p`

color: var(--color-white);
transform: translateY(-5px);
`




const NavBar = () => {

      return (
          <>
          <ContVida>
              <img src="https://i.ibb.co/X3wnbvp/calcelar.png" alt="calcelar" border="0" />
            </ContVida>
            <Barra>
              <img src="https://i.ibb.co/BVXNy8s/Progress-4.png" alt="Progress" border="0" />
            </Barra>
            <ContVida>
            <img src="https://i.ibb.co/pZhJP23/corazon.png" alt="corazon"/>4
            </ContVida>
          </>
      )
  
}
export default NavBar