
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AppLogin from '../components/AppLogin'
import Registro from '../components/login/Registro'
import Home from '../components/Home'
const App = () => {
    return (
        
            <Router>

                <Switch>
                    <Route exact path="/" component={AppLogin} />
                    <Route exact path="/registro" component={Registro} />
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router>
        
    )
}

export default App
