import React from 'react'


import { Route,
    BrowserRouter as Router,
    Redirect,
    Switch } 
    from "react-router-dom";

import Login from '../screens/login'
import Home from '../screens/home'
import Signin from '../components/signin'

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Signin} />
                <Route exact path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Redirect to='/'> </Redirect>
            </Switch>
        </Router>
    )
}

export default Routes