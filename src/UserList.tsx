import React from 'react';
import User from './User';
export default function UserList({users} : any) {
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


