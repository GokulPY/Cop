import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";


const Update = () => {
    const[data,setData]=useState([]);
    const[value,setValue]=useState({
        username:"",
        email:"",
    });
    const {id}=useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then(res=>setValue(res.data))
        .catch(err=>console.log(err))
    },[id])

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`,value)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
        navigate("/View")
    }
  return (
    <>
    <div>
        <form>
            <label>Name : </label>
            <input type='text' placeholder='Enter Name' name='name' value={value.username}  onChange={e=>setValue({...value, username:e.target.value})}/><br></br>
            <label>Email : </label>
            <input type='email' placeholder='Enter Email' name='email' value={value.email}  onChange={e=>setValue({...value, email:e.target.value})}/><br></br>
            <button onClick={handleUpdate}>Submit</button>
        </form>
    </div>
    </>
  )
}

export default Update;