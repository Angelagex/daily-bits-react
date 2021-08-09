import React from 'react'
import styled from 'styled-components';
import '../../styles/Styles.css'


const Contenedor = styled.div`
position:absolute;
  align-items: center;
 justify-content: space-between;
 align-content: center;
 
 bottom: 95px;
 
`


const Button = styled.button`


position:absolute;
width: 328px;
height: 50px; 
color: var(--color-white);
bottom: 16px;
margin-top: 20px;
background: #D4CAF3;
border-radius: 16px;

`




const Comprobar = () => {

      return (
          <>
            <Contenedor>
                <Button>COMPROBAR</Button>
            </Contenedor>
          </>
      )
  
}
export default Comprobar


