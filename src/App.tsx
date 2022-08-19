import React, { useEffect, useState } from 'react';
import './App.css';
import UserList from './UserList';
function App() {
  const [users, setUsers] = useState<any[]>([]);
  useEffect( () => {
    loadPlaceholderUsers();
  }, []);

  const loadPlaceholderUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setUsers(users);
  }
  return (
    <div className="App">
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>Userame</th>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <UserList users={users} />
      </table>
      <div>
        <button>Clear</button>
      </div>
    </div>
  );
}

export default App;
