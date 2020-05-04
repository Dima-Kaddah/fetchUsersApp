import React, { useState } from 'react';
import Button from './Button';
import SelectUser from './SelectUser';
import UserInfo from './UserInfo';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [select, setSelect] = useState('');

  const getUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://randomuser.me/api/?results=5`);
      const data = await res.json();
      setUsers(data.results);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };
  const handleSelect = (user) => {
    setSelect(user);
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <Button handleBtn={getUser} />
        {hasError && <p className="err">Something went wrong</p>}
        {isLoading && <p className="loading">Loading ....</p>}
        {!hasError && <SelectUser users={users} selectedUser={handleSelect} />}
        {select && <UserInfo info={select} />}
      </div>
    </div>
  );
}
