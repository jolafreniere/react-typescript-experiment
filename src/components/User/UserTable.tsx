import React from 'react';
import { UserEntity } from '../../model/User';
import UserList from './UserList';
export default function UserTable({users} : {users: UserEntity[]}) {
  return (
    <div>
        <table className="ui celled table">
        <thead className="bg-slate-500">
            <tr>
              <th colSpan={4}>User List</th>
            </tr>
            <tr>
              <th>Username</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
        </thead>
        <UserList users={users} />
        </table>
    </div>
  );
}


