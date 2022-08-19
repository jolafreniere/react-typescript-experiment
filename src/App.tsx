import React, { useState } from 'react';
import './App.css';
import UserList from './UserList';
function App() {
  const users = [{"name": "John Doe", "age": 30}, {"name": "Jane Doe", "age": 25}];
  return (
    <div className="App">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <UserList users={users} />
      </table>
      <button>Button 1</button>
      <button>Button 2</button>
    </div>
  );
}

export default App;
