import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Main = props => {

    const [loginOk, setLoginOk] = useState("로그인");
    const [state, setState] = useState("off")
    const history = useHistory();

    const location = useLocation();


    useEffect(() => {
        if (location.state === undefined) {
            setState("비로그인")

        } else {
            setLoginOk("로그아웃")
            // setState(location.state.id)
            setState(`${location.state.id}님 안녕하세요`)
        }


    }, [])

    function change(e) {
        e.preventDefault();
        if (location.state === undefined) {

            history.push('/login')

        } else {

            history.push("/login")
        }
    }
    function boardWrite(e){
        e.preventDefault();
        if(location.state === undefined){
            alert("로그인 후 이용가능합니다.")
        }
        else{
            history.push({
                pathname: '/boardWrite',
                state: {
                    id: location.state.id,
                    pw: location.state.pw
                    
                }

            })
            //정보넘겨주기 !!
        }
    }
    function boardRead(e){
        e.preventDefault();
        history.push("/boardRead")
    }
    return (
        <div>
            <div className='header'>
                <p>{state}{"  "}<Button onClick={change}>{loginOk}</Button></p>
            </div>
            <div className='mainPage'>
                <h1>메인페이지 입니다</h1>
                <Button onClick={boardWrite}>게시글 작성</Button>{"  "}
                <Button onClick={boardRead}>게시글 조회</Button>
            </div>

        </div>
    )
};

export default Main;
