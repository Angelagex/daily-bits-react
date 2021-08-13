import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const Navbar = styled.div`
    position: fixed;
    background: #232E35;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 69px;
    left: 0px;
    bottom: 0px;
    margin-top: 4vh;
    `;

    const NavItem = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    `;
    const btns = [
        "https://i.ibb.co/yR3zjZr/home-active.png",
        "https://i.ibb.co/6bHp5kC/home.png",
        "https://i.ibb.co/25yC00q/estadisticas.png",
        "https://i.ibb.co/JzcHxw2/estadisticas-activo.png",
        "https://i.ibb.co/DwzpnWb/perfil.png",
        "https://i.ibb.co/98TTS6g/perfil-activo.png"
    ]

    const [btnStyle, setBtnStyle] = useState([btns[0], btns[2], btns[4]]);
    
    const HandlerFunction = (a,b,c) => {
       
     setBtnStyle(btns[a],btns[b],btns[c])
     console.log(btns[a], btns[b], btns[c])  
    }


    return (
    
    <Navbar>
        <NavItem to="/" id="homediv" onClick={() => HandlerFunction(0,2,4)}>
            <img src={btnStyle[0]} id="homebtn" alt="" />
        </NavItem>
        <NavItem to="/metrics" id="metricsdiv" onClick={() => HandlerFunction(1,2,3)}>
            <img src={btnStyle[1]} id="metricsbtn" alt="" />
        </NavItem>
        <NavItem to="/profile" id="perfildiv" onClick={() => HandlerFunction(1,3,4)}>
            <img src={btnStyle[2]} id="perfilbtn" alt="" />
        </NavItem>
    </Navbar>
    
    )
}

export default Navbar
