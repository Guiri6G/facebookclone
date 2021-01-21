import React from 'react'


import { Route,
    BrowserRouter as Router,
    Redirect,
    Switch } 
    from "react-router-dom";

import Login from '../screens/login'
import Home from '../screens/home'
import Counter from '../components/counter'
import PrivateRoute from '../utils/privateRoute'
import HeaderLogout from '../components/headerLogout';

const Routes = () => {
    return(
        <Router>
            <HeaderLogout></HeaderLogout>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/counter" component={Counter} />
                <PrivateRoute path="/home" component={Home} />
                <Redirect to='/'> </Redirect>
            </Switch>
        </Router>
    )
}

export default Routes