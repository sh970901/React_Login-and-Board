import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


const BoardDetail = () => {
    const history = useHistory()
    const location = useLocation();
    function deleteBoard(e) {
        e.preventDefault();
        
        if (sessionStorage.getItem('user_id') === location.state.props.writer) {
            
            const url = `http://localhost:5000/api/board/user/${location.state.props.title}`
            fetch(url, {
                method: 'DELETE'
            })
            history.push('/boardRead')
            console.log("삭제")
        } else {
            alert('자신의 글만 삭제가능합니다.')
        }

    }
    return (
        <div>
            <h1>게시글 상세 페이지</h1>
            <h2>제목</h2>
            <input type='text' value={location.state.props.title} readOnly></input>
            <p></p>
            <h2>날짜</h2>
            <input type='text' value={location.state.props.day} readOnly></input>
            <h2>작성자</h2>
            <input type='text' value={location.state.props.writer} readOnly></input>
            <h2>내용</h2>
            <input type='text' value={location.state.props.content} readOnly></input>
            <br /><br />
            <Link to='/boardRead'>
                <Button>뒤로가기</Button>{'  '}
            </Link>
            <p>
                <br /><Button onClick={deleteBoard}>삭제</Button>
            </p>


        </div>
    );
};

export default BoardDetail;
