import React, { useState } from 'react';
import { useEffect } from 'react';
const Comment = (props) => {

   
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.comment}</td>
        </tr>
    );
};

export default Comment;
