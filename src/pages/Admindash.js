import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Admindash() {
    const [users, setusers] = useState([]);
    const deleteHandler = (id) => {
        axios.delete(`http://13.234.238.195:5000/api/user/${id}`).then(res => window.location.reload(false));
    }
    useEffect(() => {
        axios.get('http://13.234.238.195:5000/api/user').then(res => setusers(res.data));
    }, [])
  return (
    <div>
        <h2>Users</h2>
        {users.length > 0 && users.map(user => {
            return(
                <div key={user._id} className="user">
                    <div className="name"><h3>Name</h3>{user.name}</div>
                    <div className="username"><h3>Username</h3>{user.name}</div>
                    <div className="usermail"><h3>usermail</h3>{user.email}</div>
                    <div className="deltebtn"><button onClick={() => deleteHandler(user._id)}>Delete</button></div>
                </div>
            )
        })} 
    </div>
  )
}
