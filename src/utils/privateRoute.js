import React from 'react'

import {Redirect, Route} from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <div>
            <Route 
            {...rest}
            render={props =>
                localStorage.getItem('token') ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/'></Redirect>
                )
            }
            ></Route>
        </div>
    );
};

export default PrivateRoute;