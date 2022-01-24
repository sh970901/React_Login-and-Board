import React, { useEffect, useState } from 'react';
import { Button} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Comment from './Comment';
import { Table } from 'react-bootstrap';

const BoardDetail = () => {
    const history = useHistory()
    const location = useLocation();
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState("")

    useEffect(()=>{
        fetch(`http://localhost:5000/api/comment/${location.state.props.title}`)
        .then(res=>res.json())
        .then(data=> {
            setComments(data)
        })
    },[])
    
    function handleComment(e){
        e.preventDefault();
        setComment(e.target.value)
    }
    function sendComment(e){
        e.preventDefault();
        console.log(comment)
        if(comment === ""){
            alert("값을 입력하세요")
        }else{
            const userData = {
                id: sessionStorage.getItem("user_id"),
                comment: comment,
                title: location.state.props.title
            }
            axios.post("http://localhost:5000/api/user/comment",userData)
            .then((res)=>{
                if(res.status ===200){
                    alert("댓글 생성완료")
                    window.location.reload()
                    
                }
            })
            
        
        }
    }
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
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>작성자</th>
                        <th>댓글</th>
                    </tr>
                </thead>
                <tbody>
                    {comments ? comments.map(c=>{
                        return (<Comment
                        
                        id = {c.id}
                        comment={c.comments}
                        ></Comment>)
                    }): 
                    <tr>
                        <td>
                            댓글 없음
                        </td>    
                    </tr>}
                </tbody>
            </Table>
            
            <h2>댓글</h2>
            <input type="text" value={comment} onChange={handleComment}></input>      
            <br></br>
            <Button onClick={sendComment}>댓글 달기</Button><br></br><br></br> 

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
