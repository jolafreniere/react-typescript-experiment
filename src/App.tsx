import React, { useEffect, useState } from 'react';
import './App.css';
import UserList from './UserList';
function App() {
  const [users, setUsers] = useState<{id: number, name: string, age: number}[]>([]);
  useEffect(() => {
    setUsers([{"id": 1, "name": "John Doe", "age": 30}, {id: 2, "name": "Jane Doe", "age": 25}]);
  }, []);

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
    </div>
  );
}

export default App;
