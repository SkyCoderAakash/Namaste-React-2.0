import React from 'react';

const User = (props)=>{
    const {name,location,contact} = props
    return (
        <div className='userCard'>
            <h1>User Detail</h1>
            <h3>name : {name}</h3>
            <h3>location : {location}</h3>
            <h3>contact : {contact}</h3>
            <h3>role</h3>
        </div>
    );
};

export default User;