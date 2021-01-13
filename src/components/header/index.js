import React from 'react';
import styled from 'styled-components';



const Header = props => {
    return (
        <div>
            <HeaderContainer>
            <p>header</p>
            </HeaderContainer>
        </div>
    );
};

const HeaderContainer =  styled.div`
    background-color: #2078f4;
    `

export default Header;