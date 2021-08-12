
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppLogin from '../components/AppLogin.jsx'


import EditUsers from '../components/login/EditUser.jsx'
import Inicio from '../components/login/Inicio.jsx'
import AddUser from '../components/login/AddUser.jsx'
const App = () => {
    return (
        
            <Router>

                <Switch>
                    <Route exact path="/" component={AppLogin} />
                 
                   
                    <Route exact path="/usuarios" component={Inicio} />
                    <Route exact path="/ani" component={AddUser} />
                    <Route exact path="/edit/:id/" component={EditUsers}/>
                </Switch>
            </Router>
        
    )
}

export default App
