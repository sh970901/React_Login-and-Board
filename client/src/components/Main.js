import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Main = props => {

    const [loginOk, setLoginOk] = useState("로그인");
    const history = useHistory();

    const location = useLocation();
    // console.log(location.state)
    // if(location.state === undefined){
    //     console.log("gg")
    // }else{
    //     setLoginOk("로그아웃")
    // }

    // if(location.state.id===true){
    //     setLoginOk("로그아웃")
    // }
    useEffect(() => {
        console.log(location.state)
        if (location.state === undefined) {
            console.log("gg")
        } else {
            setLoginOk("로그아웃")
        }


    }, [])

    function change(e){
        e.preventDefault();
        if(location.state === undefined){
            console.log("gg")
            history.push('/login')
            
        }else{
            console.log("hh")
            history.push("/loginOut")
        }
    }

    return (
        <>
            <p>상태: </p>
            <h1>메인페이지 입니다</h1>
            
                <Button onClick={change}>{loginOk}</Button>
            
        </>
    )
};

export default Main;
