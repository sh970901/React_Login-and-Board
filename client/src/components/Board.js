import React from 'react';
import { useHistory } from 'react-router-dom';

const Board = (props) => {
    const history = useHistory();
    function selectTr(e) {
        e.preventDefault()
        history.push({
            pathname: '/boardDetail',
            state: {props: props}
        })
    }
    return (
        <tr onClick={selectTr}>
            <td>{props.id}</td>
            <td>{props.title}</td>
            <td>{props.day}</td>
            <td>{props.writer}</td>
            <td>{props.content}</td>
        </tr>
    );
};

export default Board;
