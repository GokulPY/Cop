import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const Create = () => {
    const[value,setValue]=useState({
        username:"",
        email:"",
    });
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/users",value)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate("/View")
    }

  return (
    <>
    <div>
        <form>
            <label>Name : </label>
            <input type='text' placeholder='Enter Name' onChange={e=>setValue({...value, username:e.target.value})}/><br></br>
            <label>Email : </label>
            <input type='text' placeholder='Enter Name' onChange={e=>setValue({...value, email:e.target.value})}/><br></br>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Create;