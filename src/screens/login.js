import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';
import Signin from '../components/signin';

const submit = e =>{
    e.preventDefault()
    console.log(e.target)
 
}

const Login = () => {
    return (
        <div>
         <Header backgroundColor='green'></Header>
         <Signin></Signin>
        </div>
    );
};

export default Login;