import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
import Like from '../like';
import 'font-awesome/css/font-awesome.min.css';

    const username = localStorage.getItem('username');

    const MakePost = () => {

        const [post, setPost] = useState([])
        const [inputValue, setInputValue] = useState('')
        const submit = (e) =>{
            e.preventDefault()
            const newPost = {id: nanoid(), content: inputValue}
            setInputValue('')
            setPost([...post, newPost]);
        }

    const DeletePost = id => {
        const newPost = post.filter(postD => postD.id !== id)
        setPost(newPost);
    }

    return (
        <div>
            <StyledForm onSubmit={submit}>
            <StyledTextarea placeholder={"Que voulez-vous dire "+username+" ?"}
                onChange={(e) => setInputValue(e.target.value) } 
                type="text"></StyledTextarea>
                <SubmitButton type='submit'> Publier </SubmitButton>
            </StyledForm>

            {post.map(postD =>
                <StyledBox>
                    <h3>{username} </h3>
                    <StyledP key={postD.id}>{postD.content}</StyledP>
            <StyledAd>
                <StyledSpanTrash className="fa fa-trash" onClick={() => DeletePost(postD.id)}></StyledSpanTrash> 
                <Like></Like>
            </StyledAd>
                </StyledBox>
                )}
        </div>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const StyledTextarea = styled.textarea`
  width: 470px;
  max-width: 470px;
  height: 110px;
  max-height: 110px;
  padding: 15px;
  float:left;
  
  background: transparent;
  outline: none;
  
  color: #726659;
  font-family: 'Lato', sans-serif;
  font-size: 0.875em;
  
  border: solid 1px #b3aca7;
  
  transition: all 0.3s ease-in-out;
`

const SubmitButton = styled.button`
    margin: 6px 0px;
    border-radius: 12px;
    height:30px;
`

const StyledBox = styled.div`
    padding:20px;
    background-color:white;
    margin-top: 30px;
    padding: 1px 10px 0px 10px;
    border-radius: 0px 10px 10px 10px;
`

const StyledSpanTrash = styled.span`
    cursor: pointer;
    user-select: none;
`

const StyledP = styled.p`
    font-size: 14px;
    font-family: arial;
`

const StyledAd = styled.div`
    display: flex ;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 15px;
    user-select: none;
    `

export default MakePost;