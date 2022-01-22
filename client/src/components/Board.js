import React from 'react';

const Board = (props) => {
  return (
  <tr>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.day}</td>
      <td>{props.writer}</td>
      <td>{props.content}</td>
  </tr>
  );
};

export default Board;
