import React, {Component} from 'react'
import Cookies from 'universal-cookie'

const cookies= new Cookies();
class Home extends Component{

   cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('apellidos', {path: "/"});
        cookies.remove('email', {path: "/"});
        window.location.href="./";
    }
    
     componentDidMount(){
            if(!cookies.get('email')){
                window.location.href="./home";
            }
        }

       
    render(){
        console.log(cookies.get('id'));
        console.log(cookies.get('nombre'));
        console.log(cookies.get('apellidos'));
        console.log(cookies.get('email'));
      
       
    return(
<>
    <h1>Home</h1>

    <button onClick={()=>this.cerrarSesion()} >Cerrar Sesion</button>
</>
    );
}
}


export default Home;