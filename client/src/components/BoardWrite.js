import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Main from './Main';

const BoardWrite = () => {
    const history = useHistory()
    const location = useLocation();
    console.log(location)

    function mainGo(e) {
        e.preventDefault();
        // history.push('/')
        history.push({
            pathname: '/',
            state: {
                id: location.state.id,
                pw: location.state.pw

            }

        })
    }
    return (
        <div>
            <Main></Main>
            <div className='Board'>

                <h1>게시글 작성 {' '}<Button onClick={mainGo}>메인으로</Button></h1>
                <p>
                <h4>제목</h4><input type="text"></input><br /><br />
                <h4>내용</h4>
                <textarea></textarea>
                </p>
                <Button>작성</Button>
            </div>
        </div>
    )
};

export default BoardWrite;
