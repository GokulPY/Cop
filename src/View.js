import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const View = () => {
    const[api,setApi]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then(res=>setApi(res.data))
        .catch(err=>console.log(err))
    },[])

    const handleDelete = (id) => {
          axios.delete(`http://localhost:3000/users/${id}`)
               .then((res) => {
               if (res.status === 200) {
                window.location.reload(); 
                }
                })
                .catch((err) => console.log(err));
    };
  return (
    <>
    <div>
        <table>
            <tr>
                <th>No</th>
                <th>Username</th>
                <th>Email</th>
                <th>View</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {api.map((d,i)=>(
                <tr key={i}>
                    <td>{d.id}</td>
                    <td>{d.username}</td>
                    <td>{d.email}</td>
                    <td><Link to={`/Read/${d.id}`}><button>View</button></Link></td>
                    <td><Link to={`/Update/${d.id}`}><button>Update</button></Link></td>
                    <td><button onClick={e=>handleDelete(d.id)}>Delete</button></td>
                </tr>
            ))}
        </table>
    </div>
    </>
  )
}

export default View;