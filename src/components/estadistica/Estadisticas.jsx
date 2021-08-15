import React from 'react'
import styled from 'styled-components';
import {  createGlobalStyle  } from 'styled-components';
import { useHistory } from 'react-router-dom'

import Swal from 'sweetalert2'
import '../../styles/Styles.css'
const Estadisticas = () => {
    return (
        <div class="container">
            <div class="flex" id="sectitle">
                <h2>Estadísticas</h2>
                <p>Los últimos 7 días <img src="media/flecha.svg" alt="" /></p>
            </div>
            <div class="flex container2">
                <div class="flex2"> 
                    <img src="media/horas.svg" alt="" />
                    <p>Tiempo de estudio (horas)</p>
                    <input type="number readonly" value="1" id="horasjugadas" />
                </div>
                <div class="flex2"> 
                    <img src="media/respuestas.svg" alt="" />
                    <p>Respuestas contestadas</p>
                    <input type="number readonly" value="40" id="totalcontestadas" />
                </div>
                <div class="flex2"> 
                    <img src="media/respuestas.svg" alt="" />
                    <p>Respuestas correctas</p>
                    <input type="number readonly" value="20" id="respuestascorrectas" />
                </div>
                <div class="flex2"> 
                    <img src="media/respuestas.svg" alt="" />
                    <p>Respuestas incorrectas</p>
                    <input type="number readonly" value="20" id="respuestasincorrectas" />
                </div>
            </div>
        </div>
    )
}

export default Estadisticas
