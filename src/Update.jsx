// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Update = () => {
    const loadadedUsers = useLoaderData()

    const handleUpdate = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email};
        console.log(updatedUser)
        fetch(`http://localhost:5000/users/${loadadedUsers._id}` ,{
        method: 'PUT',
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0){
                alert('update successfully')
            }
        })
    }
    return (
        <div>
            <h1>User: {loadadedUsers.name}</h1>

            <form onSubmit={handleUpdate}>
                <input type="text" name="name" id="" defaultValue={loadadedUsers?.name}/>
                <br /><br />
                <input type="email" name="email" id="" defaultValue={loadadedUsers?.email} />
                <br /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;