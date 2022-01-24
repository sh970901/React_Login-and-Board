import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [inputId, setInputId] = useState("")
    const [inputPw, setInputPw] = useState("")
    const [useId, setUseId] = useState(false);
    const history = useHistory();
    function handleInputId(e) {
        e.preventDefault();
        setInputId(e.target.value);
    };
    function handleInputPw(e) {
        e.preventDefault();
        setInputPw(e.target.value);
    }
    function checkLogin(e) {
        e.preventDefault();
        fetch("http://localhost:5000/api/login")
            .then((res) => (res.json()))
            .then(data => {
                for (var i = 0; i < data.length; i++) {
                    if (inputId === data[i].ID) {
                        if (inputPw === data[i].PW) {
                            setUseId(true)
                            console.log(useId)
                            alert("로그인 성공")
                            sessionStorage.setItem('user_id',inputId)
                            history.push({
                                pathname: '/',
                                state: {
                                    useid: !(useId),
                                    id: inputId,
                                    pw: inputPw
                                }
                            })
                            break;
                        } }
                    else {
                        if (i === data.length - 1) {
                            alert('로그인 실패')
                        }
                    }
                }
            })
    }
    return (
        <div className='loginMain'>
            <h1>로그인</h1>
            ID: <input type='text' name='inputId' value={inputId} onChange={handleInputId}></input><br />
            PW: <input type="password" name='inputPw' value={inputPw} onChange={handleInputPw}></input><br /><br />
            <Button onClick={checkLogin}>확인</Button>{'  '}
            <Link to='/loginAdd'>
                <Button>회원가입</Button>
            </Link>
            {'   '}
            <Link to='/loginFind'>
                <Button>ID/PW찾기</Button>
            </Link>
            <br></br><br></br>
            <Link to="/">
                <Button>메인으로</Button>
            </Link>
        </div>
    )
}

export default Login
