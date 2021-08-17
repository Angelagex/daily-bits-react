import Home from "../containers/home/Home"
import Login from "../containers/login/Login"
import Metrics from "../containers/metrics/Metrics"
import Pregunta from "../containers/pregunta/Pregunta"
import Perfil from "../containers/profile/Perfil"
import Registro from "../containers/registro/Regsitro"
import Usuarios from "../components/login/MostrarUser"
import EditUsers from "../components/login/EditUser"


const routes = {
  private: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/pregunta",
      name: "pregunta",
      component: Pregunta
    },
    {
        path: "/metrics",
        name: "metrics",
        component: Metrics
    },
    {
        path: "/profile",
        name: "profile",
        component: Perfil
    },


    {
        path: "/usuarios",
        name: "usuarios",
        component: Usuarios
    },
    {
      path: `/edit/:id`,
      name: "edituser",
      component: EditUsers
  },


  ],
  public: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
        path: "/registro",
        name: "registro",
        component: Registro
    },
  ]
}

export default routes