import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import myImage from '../../assets/images/square-social-logo.png'

const HeaderLogout = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    localStorage.removeItem('token')
    history.push('/')
    window.location.reload(); 
  }

  return (
    <Container>
        <LogoFacebook />
        <StyledSpan>Facebook</StyledSpan>
      {isToken ? (
        
        <LogoutButton onClick={handleLogout}>se deconnecter</LogoutButton>
        
      ) : (
        null
      )}
    </Container>
  )
}

const LogoutButton = styled.button`
  padding: 12px;
  background-color: transparent;
`
const Container = styled.div`
  background-color: #1877f2;
  display: flex;
  justify-content: space-between;
  height: 60px;
`
const LogoFacebook = styled.div`
  background-image: url(${myImage});
  width:75px;
  height:75px;
  max-width:100%;
  max-height:100%;
  align-items: left;

`

const StyledSpan = styled.span `
    color: black;
    display: inline-flex;
    align-items: center;
    letter-spacing: 0.2rem;
    font-weight: bold;
`

export default HeaderLogout