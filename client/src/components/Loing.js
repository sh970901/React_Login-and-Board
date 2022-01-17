import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


const Loing = () => {
    const [ inputId, setInputId ] = useState("")
    const [ inputPw, setInputPw ] = useState("")


    function handleInputId(e){  
        e.preventDefault();
        setInputId(e.target.value);
    };
    function handleInputPw(e){
        e.preventDefault();
        setInputPw(e.target.value);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        // addPeople()
        const userData = {
          name: inputId,
          passwd: inputPw
        };
        axios.post("http://localhost:5000/api/login", userData)
        .then((response)=>{
            console.log(response.status);
            console.log(response.data);
        });
    };
    // const addPeople = () => {
    //     // const url = 'http://localhost:5000/api/login'
    //     // const formData = new FormData();
    //     // formData.append('id', inputId)
    //     // formData.append('pw', inputPw)

    //     // const config = {
    //     //     headers: {
    //     //         'content-type': 'application/json'
    //     //     }
    //     // }
    //     // return post(url, formData, config);
    //     const form = new FormData();
    //     form.append('id', inputId);
    //     form.append('pw', inputPw);

    //     axios({
    //         url: 'http://localhost:5000/api/login',
    //         method: 'post',
    //         data: form
    //     })
    //     .then((res)=>{console.log(res)})
    //  }

    return (
        <div className='loginMain'>
            <form onSubmit={handleFormSubmit}>
                <h1>로그인 페이지</h1>
                ID: <input type='text' name='inputId' value={inputId} onChange={handleInputId} placeholder='ID'></input><br /> 
                PW: <input type="password" name = 'inputPw' value={inputPw} onChange={handleInputPw} placeholder='PW'></input><br />
                <Button variant="outline-success" type="submit">확인</Button>
            </form>
        </div>
    )
}

export default Loing
