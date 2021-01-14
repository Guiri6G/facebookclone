import React, {useState, useEffect, Fragment} from 'react'
import styled from 'styled-components'
import axio from 'axios'
import {useHistory} from 'react-router-dom'
import { MDBBtn } from "mdbreact";

const Signin = ({submit}) => {
    const [formState, setFormState] = useState({username: '', password: ''})
    const [errorMessage, setErrorMessage] = useState('')
    
    useEffect(() => {
        console.log(formState)
    })
    const history = useHistory()

    return (
            <StyledForm onSubmit={e => submit(e, formState, setErrorMessage, history)} >
                <StyledSpan>Se connecter</StyledSpan>
                <SigninInput placeholder='Username'
                    onChange={e => setFormState({ ...formState, username: e.target.value})}
                    type='text'></SigninInput>
                <SigninInput placeholder='Password'
                    onChange={e => setFormState({ ...formState, password: e.target.value})}
                    type='password'></SigninInput>
            {/* <button onClick={() => props.history.push('/home')}> home </button> */}
            <StyledSpan>{errorMessage}</StyledSpan>
            <ButtonPage type='submit'></ButtonPage>
            </StyledForm>
    )
}

const StyledSpan = styled.span `
      color: black;
    display: inline-flex;
    align-items: center;
    letter-spacing: 0.2rem;
    font-weight: bold;
   
`

const ButtonPage = () => {
    return (
      <Fragment>
        <MDBBtn
        type="submit"
         outline color="primary">Connexion</MDBBtn>
      </Fragment>
    );
  }

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:12px;
`

const SigninInput = styled.input`
    margin: 6px 0px;
    border-radius: 12px;
    height:30px;
`
export default Signin;