import React from 'react';

export default function User({user}: any) {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
    </tr>
  );
}


