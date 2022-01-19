import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Main = props => {
    
    const location = useLocation();
    console.log(location)
    // useEffect(()=>{
    //     console.log(location.state)
    //     if(location.state.id === true){
            
    //     }
    // }, [])


    return( 
    <>
        <p>상태: </p>
        <h1>메인페이지 입니다</h1>
        <Link to ="/login">
            <Button>로그인</Button>
        </Link>
    </>
    )
};

export default Main;
