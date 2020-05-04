import React from 'react';
export default function SelectUser({ users, selectedUser }) {
  return (
    <ul className="list">
      {users.map((user) => {
        return (
          <li
            className="users-list"
            key={user.login.uuid}
            onClick={() => selectedUser(user)}
          >
            {user.name.first}
            {user.name.last}
          </li>
        );
      })}
    </ul>
  );
}
