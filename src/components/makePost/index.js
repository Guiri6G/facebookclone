import React, { useState, Fragment } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
import Like from '../like';
import 'font-awesome/css/font-awesome.min.css';
import { MDBBtn } from "mdbreact";


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
               <SigninInput type='submit'></SigninInput>
            </StyledForm>

            {post.map(postD =>
                <StyledBox>
                    <h3>{username} a poster : </h3>
                    <StyledPost key={postD.id}>{postD.content}</StyledPost>
            <StyledOption>
                <StyledDeleteIcon className="fa fa-trash" onClick={() => DeletePost(postD.id)}></StyledDeleteIcon> 
                <Like></Like>
            </StyledOption>
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
float: left;
width: 100%;
min-height: 75px;
border: 1px solid grey;
color: #000000;
`
const SigninInput = styled.input`
  border-radius: 12px;
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 25px;
  margin: 4px 2px;
  cursor: pointer;
`

const StyledBox = styled.div`
    padding:20px;
    background-color:white;
    margin-top: 30px;
    padding: 1px 10px 0px 10px;
    border-radius: 0px 10px 10px 10px;
`

const StyledDeleteIcon = styled.span`
    cursor: pointer;
    user-select: none;
`

const StyledPost = styled.p`
    font-size: 14px;
    font-family: arial;
`

const StyledOption = styled.div`
    display: flex ;
    justify-content: space-between;
    margin-bottom: 12px;
    font-size: 15px;
    user-select: none;
    `

export default MakePost;