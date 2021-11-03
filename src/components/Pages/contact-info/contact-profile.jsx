import React from 'react';
import './contact-profile.css'

function contactProfile(props) {
    const { name, age, phone, address, id} = props;
    return (
        <div className="card">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Phone: {phone}</p>
            <p>Add: {address}</p>
            <p>Id: {id}</p>
        </div>
    );
}

export default contactProfile;