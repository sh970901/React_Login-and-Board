import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const BoardRead = () => {
    return (
        <div>
            
            <h1>게시글 조회</h1>
            <Link to ='/'>
            <Button>뒤로가기</Button>
            </Link>
            
        </div>
    )
};

export default BoardRead;
