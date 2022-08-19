import React from 'react';
import { UserEntity } from '../model/User';

export default function User({user}: {user: UserEntity}) {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
}


