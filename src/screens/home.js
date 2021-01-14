import React from 'react';
import MakePost from '../components/makePost'
import styled from 'styled-components'

const Home = props => {
    console.log('Home => props', props)
    const username = localStorage.getItem('username')
    return (
        <StyledContainer>
            <h2>Bonjour {username} !</h2>
            <MakePost></MakePost>
        </StyledContainer>
        
    );
};

const StyledContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-top: 50px;
`

export default Home;