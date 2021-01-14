import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styled from 'styled-components'

const Like = () => {

    const [toggle, setToggle] = useState(false)

    const toggler = () =>{
        toggle ? setToggle(false): setToggle(true)
    }

    return (
        <div>
            {toggle?
            <StyledBlueSpan onClick={toggler} className="fa fa-thumbs-up" > +1 like </StyledBlueSpan>
            :<StyledBlackSpan onClick={toggler} className="fa fa-thumbs-up"></StyledBlackSpan> }
        </div>
    );
};

const StyledBlueSpan = styled.span`
    color: #2078f4;
    margin-bottom: 12px;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
`

const StyledBlackSpan = styled.span`
    color: black;
    margin-bottom: 12px;
    font-size: 20px;
    cursor: pointer;
    user-select: none;
`

export default Like;