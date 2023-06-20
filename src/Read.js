import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

const Read = () => {
    const[api,setApi]=useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${id}`)
        .then(res=>setApi(res.data))
        .catch(err=>console.log(err))
    },[id])
  return (
    <>
    <div>
        <h2>Name : <span>{api.username}</span></h2>
        <h2>Email : <span>{api.email}</span></h2>
        <Link to={'/View'}><button>Back</button></Link>
    </div>
    </>
  )
}

export default Read;