import React, { useState } from 'react'
import '../../styles/styleImg.css'
import angular from './media/angular.svg'
import kotlin from './media/kotlin.svg'
import vue from './media/vue.svg';
import windows from './media/windows.svg';
import css1 from './media/css1.jpg'
import css2 from './media/css2.png'
import css3 from './media/css3.png';
import css4 from './media/css4.png';
import Swal from 'sweetalert2'
import uuid from 'react-uuid'
const preguntasimg = [
    {
        enunciado: "¿Qué tecnología pertenece al MEVN Stack?",
        respuestasOption: [
            { respuestas: angular, isCorrect: false },
            { respuestas: vue, isCorrect: true },
            { respuestas: windows, isCorrect: false },
            { respuestas: kotlin, isCorrect: false }
        ],
    },
    {
        enunciado: "¿Cúal es la última versión de CSS?",
        respuestasOption: [
            { respuestas: css1, isCorrect: false },
            { respuestas: css2, isCorrect: false },
            { respuestas: css3, isCorrect: true },
            { respuestas: css4, isCorrect: false }
        ],

    },
];
const PreguntaImg = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [score, setScore] = useState(0);

    const handleCombrobar = () => {
        setClicked(false);

        if (currentQuestion < preguntasimg.length - 1) {
            setCurrentQuestion(currentQuestion + 1)

        } else {

            window.location.href = "./pregunta";
        }

    }



    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {

            Swal.fire(
                'Respuesta Correcta',
                'Buen trabajo',
                'success'
            )
            setScore(score + 1);


        } else {
            Swal.fire({
                type: 'error',
                title: 'Respuesta Incorrecta',
                text: 'vuelve a intentarlo'
            })
        }
        setClicked(true);

    }

    return (
        <div>
            <h2 id="enunciado">{preguntasimg[currentQuestion].enunciado}</h2>
            {preguntasimg[currentQuestion].respuestasOption.map((respuestaOption) => (<div><label key={uuid} class="flex2 custom-radio-checkbox">
                <button


                    disabled={clicked} onClick={() => handleAnswerOptionClick(respuestaOption.isCorrect)}



                >
                    <img class="imagenes" style={{ cursor: "pointer" }}
                        src={respuestaOption.respuestas}



                        alt="img" />
                </button>
            </label>

            </div>
            ))}

            <button className={`answer-button ${clicked && preguntasimg.isCorrect ? "correct" : ""}`} id="comprobar" onClick={handleCombrobar} disabled={!clicked}


            >COMPROBAR</button>
        </div>
    )
}

export default PreguntaImg;
