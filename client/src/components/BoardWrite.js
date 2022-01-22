import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Main from './Main';
import axios from 'axios';

const BoardWrite = () => {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    // const [writer, setWriter]= useState("")
    


    function handleTitle(e){
        e.preventDefault();
        setTitle(e.target.value)
    }
    function handleContent(e){
        e.preventDefault();
        setContent(e.target.value)
    }
    function mainGo(e) {
        e.preventDefault();
        history.push({
            pathname: '/'
        })
    }
    function writeboard(e){

        e.preventDefault();
        // setWriter(sessionStorage.getItem('user_id'))
        const userData = {
            title : title,
            content : content,
            writer: sessionStorage.getItem('user_id')
        }
        axios.post("http://localhost:5000/api/board", userData)
            .then((res)=> {
                if(res.status===200){
                    alert("생성이 완료되었습니다.")
                    history.push('/')
                }
                else{
                    alert("생성이 실패하였습니다.")
                }
            })

    }
    return (
        <div>
            <Main></Main>
            <div className='Board'>

                <h1>게시글 작성 {' '}<Button onClick={mainGo}>메인으로</Button></h1>
                
                <h4>제목</h4><input type="text" name="title" value={title} onChange={handleTitle}></input><br /><br />
                <h4>작성일</h4>
                <input type="text" name="data" value={Date.now()} disabled></input><br />
                
                <br/><h4>내용</h4>
                <textarea name = "content" value={content} onChange={handleContent}></textarea>
                
                <Button onClick={writeboard}>작성</Button>
            </div>
        </div>
    )
};

export default BoardWrite;
