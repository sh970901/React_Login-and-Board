import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Main = props => {

    const [loginOk, setLoginOk] = useState("로그인");
    const [state,setState] = useState("off")
    const history = useHistory();

    const location = useLocation();
    
   
    useEffect(() => {
        console.log(location.state)
        if (location.state === undefined) {
            setState("비로그인")
           
        } else {
            setLoginOk("로그아웃")
            setState(location.state.id)
            // a= location.state.id
        }


    }, [])

    function change(e){
        e.preventDefault();
        if(location.state === undefined){
            
            history.push('/login')
            
        }else{
            console.log("hh")
            history.push("/login")
        }
    }

    return (
        <>
            <p>상태: {state}        님 안녕하세요</p>
            <h1>메인페이지 입니다</h1>
            
                <Button onClick={change}>{loginOk}</Button>
            
        </>
    )
};

export default Main;
