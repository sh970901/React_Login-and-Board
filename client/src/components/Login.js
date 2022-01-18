import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [ inputId, setInputId ] = useState("")
    const [ inputPw, setInputPw ] = useState("")

    function handleInputId(e){  
        e.preventDefault();
        setInputId(e.target.value);
    };
    function handleInputPw(e){
        e.preventDefault();
        setInputPw(e.target.value);
    }
    return (
        <div className='loginMain'>
            <h1>로그인</h1>
            
            ID: <input type='text' name='inputId' value={inputId} onChange={handleInputId}></input><br /> 
            PW: <input type="password" name = 'inputPw' value={inputPw} onChange={handleInputPw}></input><br /><br/>
            <Button>확인</Button>{'  '}
            <Link to='/loginAdd'>
                <Button>회원가입</Button>
            </Link>
            {'   '}
            <Link to ='/loginFind'>
                <Button>ID/PW찾기</Button>
            </Link>
        </div>
    )
}

export default Login
