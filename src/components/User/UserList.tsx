import React from 'react';
import { UserEntity } from '../../model/User';
import User from './User';
export default function UserList({users}: {users: UserEntity[]} ) {
  return (
    <tbody>
        {
          users.map((user: any) => {
            return <User key={user.id} user={user}/>
          })
        }
    </tbody>
  );
}


