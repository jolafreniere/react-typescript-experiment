import React from 'react';
import { UserEntity } from '../../model/User';
import UserList from './UserList';
export default function UserTable({users} : {users: UserEntity[]}) {
  return (
    <div>
        <h1>Users</h1>
        <table className="table-auto">
        <thead className="bg-slate-500">
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


