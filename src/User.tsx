import React from 'react';

export default function User({user}: any) {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td>{user.phone}</td>
    </tr>
  );
}


