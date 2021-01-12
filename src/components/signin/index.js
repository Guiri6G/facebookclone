import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const Signin = props => {
    console.log('props', props)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [formState, setFormState] = useState({username: '', password: ''})
    
    useEffect(()=>{
        console.log(formState)
    })
    const history = useHistory()
    console.log('history', history)

    const submit = e =>{
        e.preventDefault()
        console.log(username)
        console.log(password)

        axios({
           method:'POST',
           url:'https://easy-login-api.herokuapp.com/users/login',
           data:{
               username: formState.username,
               password: formState.password
           } 
        }).then(res => {
            localStorage.setItem('token', res.headers['x-access-token'])
            history.push('/home/20')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
            <StyledForm onSubmit={submit} >
                <StyledSpan>Signein</StyledSpan>
                <SigninInput placeholder='Username'
                    onChange={e => setFormState({ ...formState, username: e.target.value})}
                    type='text'></SigninInput>
                <SigninInput placeholder='password'
                    onChange={e => setFormState({ ...formState, password: e.target.value})}
                    type='password'></SigninInput>
            {/* <button onClick={() => props.history.push('/home')}> home </button> */}
            <SigninInput type='submit'></SigninInput>
            </StyledForm>
    )
}

const StyledSpan = styled.span `
    color: green;
    margin-bottom:12px;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SigninInput = styled.input`
    margin: 6px 0px;
    border-radius: 12px;
    height:30px;
`
export default Signin;