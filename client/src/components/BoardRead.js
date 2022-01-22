import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Table } from 'react-bootstrap'
import Board from './Board';




const BoardRead = () => {
    const [board, setBoard] = useState([])
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [myBoard, setMyBoard] = useState([])

    


    function boardRead(e) {
        e.preventDefault();
        fetch("http://localhost:5000/api/board")
            .then((res) => (res.json()))
            .then((data) => {
                setBoard(data)

            })
    }
    function myboardRead(e){
        e.preventDefault();
        fetch(`http://localhost:5000/api/board/user/${sessionStorage.getItem('user_id')}`)
        .then((res)=>(res.json()))
        .then(data=>{
            setBoard(data)
        })
    }


    return (
        <div>

            <h1>게시글 조회</h1>
            <Button onClick={boardRead}>전체 조회</Button> {'  '}
            <Button onClick={myboardRead}>내 글 조회</Button> {'  '}
            <Link to='/'>
                <Button>뒤로가기</Button>
            </Link>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>작성자</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    {board ? board.map(c=>{
                        return (<Board
                        key={c.idBoard}
                        id={c.idBoard}
                        writer={c.writer}
                        title={c.title}
                        content={c.content}
                        day = {c.createDay}
                        ></Board>)
                    }): 
                    <tr>
                        <td>
                            게시글 없음
                        </td>    
                    </tr>}
                </tbody>
            </Table>




        </div>
    )
};

export default BoardRead;
