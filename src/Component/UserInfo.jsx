import React from 'react';

const UserInfo = ({ info }) => {
  return (
    <div className="userInfo">
      <img
        src={info.picture.large}
        alt={info.name.first + ' ' + info.name.last + ' Avtar'}
      />
      <h2 className="name">
        {info.name.first} {info.name.last}
      </h2>
      <p> {info.email}</p>
      <p> {info.phone}</p>
      <p>{info.location.city + ',' + info.location.country}</p>
    </div>
  );
};

export default UserInfo;
