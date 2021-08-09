import React, {Component} from 'react'
import Cookies from 'universal-cookie'

const cookies= new Cookies();
class Home extends Component{

   cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href="./";
    }
     componentDidMount(){
            if(!cookies.get('username')){
                window.location.href="./home";
            }
        }
    render(){
        console.log(cookies.get('id'));
        console.log(cookies.get('apellido_paterno'));
        console.log(cookies.get('apellido_materno'));
        console.log(cookies.get('nombre'));
        console.log(cookies.get('username'));
      
       
    return(
<div>
    Home

    <button onClick={()=>this.cerrarSesion()} >Cerrar Sesion</button>
</div>
    );
}
}

export default Home;