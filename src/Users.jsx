// import React from 'react'

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUser = useLoaderData(null);
  const [users, setUser] = useState(loadedUser);
  const handleDelete = _id =>{
    console.log('dlt', _id)
    fetch(`http://localhost:5000/users/${_id}`,{
        method: "DELETE"
    })
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount > 0 ){
        alert('dlt successfully');
        const remaining = users.filter(user => user._id !== _id)
        setUser(remaining)
      }
    })
  }
  return (
    <div>
      <h3>data: {users.length}</h3>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} : {user.email} : {user._id}{" "}
          <Link to={`/update/${user._id}`}>Update</Link>
           <button onClick={()=> handleDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
