import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './profile.css';
import { useNavigate } from 'react-router-dom';

function Profile(props) {
  const [userData, setUserData] = useState();
  let userInfo;
  const navigatePage = useNavigate();
  useEffect(() => {
    console.log('userEffect');
    getData();
  }, []);
  const getData = () => {
    //   get api call
    Axios.get('https://reqres.in/api/users')
      .then((res) => setUserData(res.data.data))
      .catch((err) => console.log('Error to load users: ' + err.message));
    const updateUserData = {
      name: 'morpheus',
      job: 'leader',
    };

    // post api call
    // Axios.post('https://reqres.in/api/users',updateUserData)
    //   .then((res) => console.log('updated user data successfully: ' ,res))
    //   .catch((err) => console.log('Error to update users data: ' + err.message));

    // // put api
    //  Axios.put('https://reqres.in/api/users/2',updateUserData)
    //   .then((res) => console.log('replaced user data successfully: ' ,res))
    //   .catch((err) => console.log('Error to replace users data: ' + err.message));

    // // patch api
    // Axios.patch('https://reqres.in/api/users/2',updateUserData)
    // .then((res) => console.log('patch user data successfully: ' ,res))
    // .catch((err) => console.log('Error to patch users data: ' + err.message));

    // delete api
    Axios.delete('https://reqres.in/api/users/2')
      .then((res) => {
          if(res.status === 204) {
              alert('user deleted');
              navigatePage('/home');
          }
          console.log('deleted user data successfully: ', res.status)
        })
      .catch((err) => console.log('Error to delete users data: ' + err.message));
  };
  if (userData) {
    console.log(userData);
    userInfo = userData.map((data, index) => (
      <div className="userinfo-container" key={index}>
        <img src={data.avatar} alt="avatar" />
        <div>
        <p>
            id : {data.id}
          </p>
          <p>
            Name : {data.first_name} {data.last_name}
          </p>
          <p>Email: {data.email}</p>
        </div>
      </div>
    ));
  }
  return <div>{userInfo}</div>;
}

export default Profile;
