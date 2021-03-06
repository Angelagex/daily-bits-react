import React, { Component } from "react";
import styled from "styled-components";
import "../../styles/Styles.css";
import Swal from "sweetalert2";

const ContenedorPrincipal = styled.div`
  align-items:center;
  justify-content:center;`

const Pregunta = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: row;

`;

const Avatar = styled.img`
  width: 112px;
  height: 238px;
  margin-top: 30px;
`;
const PreguntaTexto = styled.h1`
  margin: 5px;
  width: 200px;
  font-size: 20px;
`;
const PreguntaSelect = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 13px;
  cursor: pointer;
  top: 12px;
  letter-spacing: 0.005em;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Preguntas = styled.a`
  display: flex;
  position: relative;
  color: var(--color-white);
  background: var(--color-neutral);
  border-color: var(--color-white);
  border-style: solid;
  border-width: 2px;
  box-sizing: border-box;
  left: 15px;
  border-radius: 4px;
  width: 328px;
  height: 56px;
  margin-top: 15px;
  padding-left: 15px;
  text-decoration: none;
  &:focus-within {
    border-color: var(--color-green);
  }
`;
const Container = styled.label.attrs((/* props */) => ({ tabIndex: 0 }))`
  & > Input.custom-radio-checkbox__input {
    display: none;
  }

  & > Span.custom-radio-checkbox__show {
    display: inline-block;
    margin-left: auto;

    width: 25px;
    height: 25px;
    margin-right: 1rem;
    background-size: cover;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
const Span = styled.span`
  position: absolute;
  top: 12px;
  right: 8px;
  height: 25px;
  width: 25px;
  border-radius: 50%;

  & {
    background-image: url("https://gejocad.github.io/DailyBits/img/radio-button.png");
  }

  ${Input}:checked + & {
    background-image: url("https://gejocad.github.io/DailyBits/img/radio-button-active.png");
  }
`;

const Contenedor = styled.div`
  position:relative;
  align-items: center;
  justify-content: center;
  align-content: center;
  left: 15px;
  transform: translateY(200px);
`;

const Button = styled.button`
  position: absolute;
  width: 328px;
  height: 50px;
  color: var(--color-white);
  bottom: 16px;
  margin-top: 20px;
  background: #d4caf3;
  border-radius: 16px;
`;

const preguntasDB =
  "https://gist.githubusercontent.com/gejocad/b07d390e21f55663e95c7ff741884414/raw/71ea594519317104f500611611a9837148f5fcf0/preguntasSelecDB.json";

class PreguntaSelec extends Component {
  constructor() {
    super();
    this.state = {
      preguntas: [
        {
          id: "",
          avatar: "",
          pregunta: "",
          resCorrect: "",
        },
      ],
      cuenta: 0,
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }
  onValueChange(event) {
    this.setState({
      btn: "",

      selectedOption: event.target.value,
    });

    this.activarComprobar();
  }

  componentDidMount() {
    fetch(preguntasDB)
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            preguntas: res.preguntas,
          },
          this.siguientePregunta
        );
      });
  }

  siguientePregunta = () => {
    const { preguntas } = this.state;

    if (preguntas.length > 0) {
      const cuenta = Math.floor(Math.random() * preguntas.length);
      this.setState({
        cuenta,
      });
    }
  };

  activarComprobar = () => {
    let button = document.querySelector(".btn-active");
    button.innerHTML = "";
    button.innerHTML += `
        <button id="run" type="submit" class="comprobar-active">COMPROBAR</button>
      `;
  };

  perdiste = () => {
    localStorage.setItem('barras', 0);
        localStorage.setItem('vidas', 4); 
        alert ("perdiste");
  }

  ganaste = () => {
    localStorage.setItem('barras', 10);
        localStorage.setItem('vidas', 4); 
        alert ("Ganaste");
  }

  formSubmit(event) {
    event.preventDefault();

    let resCorrect = localStorage.getItem("resCorrect");
    let resSelect = this.state.selectedOption;
    console.log(resCorrect);
    console.log(resSelect);
    if (resCorrect === resSelect) {
      Swal.fire("Respuesta Correcta", "Buen trabajo", "success");
      
      let pBarras;
      let pCorrectas;
      let tPreguntas;
      pBarras = localStorage.getItem("barras");
      pCorrectas = localStorage.getItem("correctas");
      tPreguntas = localStorage.getItem("tpreguntas");
      pBarras++;
      pCorrectas++;
      tPreguntas++;
  
      localStorage.setItem("barras", pBarras);
      localStorage.setItem("correctas", pCorrectas);
      localStorage.setItem("tpreguntas", tPreguntas);
      if (pBarras >=10){this.ganaste()}
    } else {
      Swal.fire({
        type: "error",
        title: "Respuesta Incorrecta",
        text: "vuelve a intentarlo",
      });
      let pVidas;
      let pIncorrectas;
      let tPreguntas;
      pVidas = localStorage.getItem("vidas");
      pIncorrectas = localStorage.getItem("incorrectas");
      tPreguntas = localStorage.getItem("tpreguntas");
      pVidas--;
      pIncorrectas++;
      tPreguntas++;
      localStorage.setItem("vidas", pVidas);
      localStorage.setItem("incorrectas", pIncorrectas);
      localStorage.setItem("tpreguntas", tPreguntas);
      if (pVidas <= 0){this.perdiste()}
    }
    setTimeout(() => {

      window.location.reload(false)
      this.siguientePregunta();
    }, 2000);
  }

  render() {
    const { preguntas, cuenta } = this.state;
    const pregunta = preguntas[cuenta];

    function comprobarT() {
      const resCorrect = pregunta.resCorrect;
      localStorage.setItem("resCorrect", resCorrect);
    }

    return (
      <ContenedorPrincipal>
        <Pregunta>
          <Avatar src={pregunta.avatar} alt="calcelar" border="0" />
          <PreguntaTexto>{pregunta.pregunta}</PreguntaTexto>
        </Pregunta>
        <form onSubmit={this.formSubmit} onClick={comprobarT()}>
          <Preguntas>
            <Container className="custom-radio-checkbox">
              <PreguntaSelect>{pregunta.res1}</PreguntaSelect>
              <Input
                className="custom-radio-checkbox__input"
                type="radio"
                name="answer"
                value={pregunta.res1}
                onChange={this.onValueChange}
              />
              <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio" />
            </Container>
          </Preguntas>
          <Preguntas>
            <Container className="custom-radio-checkbox">
              <PreguntaSelect>{pregunta.res2}</PreguntaSelect>
              <Input
                className="custom-radio-checkbox__input"
                type="radio"
                name="answer"
                value={pregunta.res2}
                onChange={this.onValueChange}
              />
              <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio" />
            </Container>
          </Preguntas>
          <Preguntas>
            <Container className="custom-radio-checkbox">
              <PreguntaSelect>{pregunta.res3}</PreguntaSelect>
              <Input
                className="custom-radio-checkbox__input"
                type="radio"
                name="answer"
                value={pregunta.res3}
                onChange={this.onValueChange}
              />
              <Span className="custom-radio-checkbox__show custom-radio-checkbox__show--radio" />
            </Container>
          </Preguntas>
          <Contenedor>
            <Button className="btn-active" type="submit">
              COMPROBAR
            </Button>
          </Contenedor>
        </form>
      </ContenedorPrincipal>
    );
  }
}

export default PreguntaSelec;
