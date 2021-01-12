import React from 'react';
import styled from 'styled-components';



const Header = props => {
    return (
        <div>
            <HeaderContainer backgroundColor={props.backgroundColor}>
            <p>header</p>
            </HeaderContainer>
        </div>
    );
};

const HeaderContainer =  styled.div`
    background-color: ${props => props.backgroundColor };
    `

export default Header;